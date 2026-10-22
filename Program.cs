using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using Site;

// The site's own server (docs/39 in UniversalIDE): the site from site/, its forms' messages and its
// page views. Run with PORT, DATA_DIR and ADMIN_KEY (see README.md).

var contentTypes = new Dictionary<string, string>
{
    ["html"] = "text/html; charset=utf-8",
    ["css"] = "text/css; charset=utf-8",
    ["js"] = "text/javascript; charset=utf-8",
    ["mjs"] = "text/javascript; charset=utf-8",
    ["json"] = "application/json",
    ["txt"] = "text/plain; charset=utf-8",
    ["xml"] = "application/xml",
    ["png"] = "image/png",
    ["jpg"] = "image/jpeg",
    ["jpeg"] = "image/jpeg",
    ["gif"] = "image/gif",
    ["webp"] = "image/webp",
    ["avif"] = "image/avif",
    ["svg"] = "image/svg+xml",
    ["ico"] = "image/x-icon",
    ["woff"] = "font/woff",
    ["woff2"] = "font/woff2",
    ["ttf"] = "font/ttf",
    ["otf"] = "font/otf",
    ["mp4"] = "video/mp4",
    ["webm"] = "video/webm",
    ["mp3"] = "audio/mpeg",
    ["pdf"] = "application/pdf",
};

string Setting(string name, string fallback = "") => Environment.GetEnvironmentVariable(name) is { Length: > 0 } value ? value : fallback;

var config = ServerConfig.Load();
var root = ServerConfig.Root;
var site = Path.GetFullPath(Path.Combine(root, "site"));
var notFoundPage = File.ReadAllText(Path.Combine(root, "not-found.html"));
var dataDir = Setting("DATA_DIR", Path.Combine(root, "data"));
IStore? store = null;
var storeLock = new object();
// Opened on the first request that needs it (null: the database server isn't set up); tried again after a failure.
IStore? OpenStore()
{
    lock (storeLock) return store ??= Stores.Open(dataDir, config.Rules.KeepMessages);
}
var bots = new Regex(config.BotPattern, RegexOptions.IgnoreCase);
var messageLimit = new Limiter(config.Rules.MessagesPerMinute);
var viewLimit = new Limiter(config.Rules.ViewsPerMinute);
var adminKey = Setting("ADMIN_KEY");
var trustProxy = Setting("TRUST_PROXY") == "1";

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://0.0.0.0:" + Setting("PORT", "8080"));
builder.Logging.SetMinimumLevel(LogLevel.Warning);
var app = builder.Build();

app.Use(async (ctx, next) =>
{
    ctx.Response.Headers.XContentTypeOptions = "nosniff";
    await next();
});

IResult Answer(int status, object body) => Results.Json(body, Store.Json, statusCode: status);
IResult Refuse(int status, string key) => Answer(status, new { message = config.Message(key) });
IResult NoDatabase() => Answer(503, new { message = "This site can’t take messages yet: its database isn’t set up (DATABASE_URL)." });

// The sending limits: kept by a database server when there is one, else in memory.
bool Allow(IStore s, string kind, string visitor)
{
    var message = kind == "message";
    var bucket = kind + ":" + Convert.ToHexStringLower(SHA256.HashData(Encoding.UTF8.GetBytes(visitor)))[..32];
    return s.Allow(bucket, message ? config.Rules.MessagesPerMinute : config.Rules.ViewsPerMinute) ?? (message ? messageLimit : viewLimit).Allow(visitor);
}

// The visitor's address, for the limits only (never kept).
string Visitor(HttpContext ctx)
{
    var forwarded = trustProxy ? ctx.Request.Headers["X-Forwarded-For"].ToString().Split(',')[0].Trim() : "";
    return forwarded.Length > 0 ? forwarded : ctx.Connection.RemoteIpAddress?.ToString() ?? "";
}

// The request body as text, or null when larger than the rules allow.
async Task<string?> Body(HttpContext ctx)
{
    var max = config.Rules.MaxBody;
    if (ctx.Request.ContentLength > max) return null;
    var buffer = new MemoryStream();
    var chunk = new byte[8192];
    int read;
    while ((read = await ctx.Request.Body.ReadAsync(chunk)) > 0)
    {
        buffer.Write(chunk, 0, read);
        if (buffer.Length > max) return null;
    }
    return Encoding.UTF8.GetString(buffer.ToArray());
}

IResult? NotAdmin(HttpContext ctx)
{
    if (adminKey.Length == 0) return Refuse(404, "notFound");
    var match = Regex.Match(ctx.Request.Headers.Authorization.ToString(), "^Bearer (.+)$");
    var ok = match.Success && CryptographicOperations.FixedTimeEquals(SHA256.HashData(Encoding.UTF8.GetBytes(match.Groups[1].Value)), SHA256.HashData(Encoding.UTF8.GetBytes(adminKey)));
    return ok ? null : Refuse(401, "unauthorized");
}

app.MapPost("/api/forms/{id}", async (string id, HttpContext ctx) =>
{
    // The answer may be read by the page wherever it is shown.
    ctx.Response.Headers.AccessControlAllowOrigin = "*";
    var body = await Body(ctx);
    if (body == null) return Refuse(413, "tooLong");
    var result = Rules.CheckMessage(config, id, body);
    if (result is Refusal r) return Answer(r.Status, new { message = r.Text });
    var s = OpenStore();
    if (s == null) return NoDatabase();
    if (!Allow(s, "message", Visitor(ctx))) return Refuse(429, "tooMany");
    s.AddMessage((Message)result);
    return Answer(200, new { ok = true });
});

app.MapPost("/api/views", async (HttpContext ctx) =>
{
    var agent = ctx.Request.Headers.UserAgent.ToString();
    var body = await Body(ctx);
    try
    {
        var s = agent.Length > 0 && !bots.IsMatch(agent) && body != null ? OpenStore() : null;
        if (s != null && Allow(s, "view", Visitor(ctx)))
        {
            var view = Rules.ReadView(config, body!, ctx.Request.Host.Host);
            if (view != null) s.CountView(view.Path, view.Referrer);
        }
    }
    catch (Exception e)
    {
        Console.Error.WriteLine(e);
    }
    // A beacon never fails.
    return Results.NoContent();
});

app.MapGet("/api/admin/messages", (HttpContext ctx) => NotAdmin(ctx) ?? (OpenStore() is { } s ? Answer(200, new { messages = s.Messages(200) }) : NoDatabase()));

app.MapDelete("/api/admin/messages/{id}", (string id, HttpContext ctx) =>
    NotAdmin(ctx) ?? (OpenStore() is { } s ? (long.TryParse(id, out var n) && s.DeleteMessage(n) ? Results.NoContent() : Refuse(404, "notFound")) : NoDatabase()));

app.MapGet("/api/admin/stats", (HttpContext ctx) =>
{
    var days = int.TryParse(ctx.Request.Query["days"], out var asked) && asked >= 1 && asked <= 366 ? asked : 30;
    return NotAdmin(ctx) ?? (OpenStore() is { } s ? Answer(200, s.Stats(days)) : NoDatabase());
});

// Everything else: an unknown API address, or a file of the site.
app.MapFallback("{**path}", async (HttpContext ctx) =>
{
    var path = ctx.Request.Path.Value ?? "/";
    if (path.StartsWith("/api/", StringComparison.Ordinal))
    {
        await Refuse(404, "notFound").ExecuteAsync(ctx);
        return;
    }
    async Task NotFound()
    {
        ctx.Response.StatusCode = 404;
        ctx.Response.ContentType = "text/html; charset=utf-8";
        await ctx.Response.WriteAsync(notFoundPage);
    }
    var get = HttpMethods.IsGet(ctx.Request.Method);
    if ((!get && !HttpMethods.IsHead(ctx.Request.Method)) || path.Contains('\0') || path.Contains('\\') || path.Split('/').Any(s => s == ".." || s.StartsWith('.')))
    {
        await NotFound();
        return;
    }
    var file = Path.GetFullPath(Path.Combine(site, path.TrimStart('/')));
    if (file != site && !file.StartsWith(site + Path.DirectorySeparatorChar, StringComparison.Ordinal))
    {
        await NotFound();
        return;
    }
    if (!path.EndsWith('/') && Directory.Exists(file) && File.Exists(Path.Combine(file, "index.html")))
    {
        ctx.Response.StatusCode = 301;
        ctx.Response.Headers.Location = ctx.Request.PathBase + ctx.Request.Path.ToUriComponent() + "/" + ctx.Request.QueryString;
        return;
    }
    if (path.EndsWith('/')) file = Path.Combine(file, "index.html");
    if (!File.Exists(file))
    {
        await NotFound();
        return;
    }
    var extension = Path.GetExtension(file).TrimStart('.').ToLowerInvariant();
    ctx.Response.ContentType = contentTypes.GetValueOrDefault(extension, "application/octet-stream");
    ctx.Response.ContentLength = new FileInfo(file).Length;
    // Exact copies of imported pages run only sandboxed.
    if (path.StartsWith("/_embeds/", StringComparison.Ordinal)) ctx.Response.Headers.ContentSecurityPolicy = config.EmbedCsp;
    if (get) await ctx.Response.SendFileAsync(file);
});

Console.WriteLine("Listening on http://localhost:" + Setting("PORT", "8080"));
app.Run();
