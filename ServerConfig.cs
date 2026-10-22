using System.Text.Json;

namespace Site;

/** What the site's server knows about it: written by UniversalIDE into server.json (docs/39). */
public sealed record ServerConfig(
    Dictionary<string, int> Forms,
    List<string> Pages,
    Limits Rules,
    Dictionary<string, string> Messages,
    string BotPattern,
    string EmbedCsp,
    string? Database = null)
{
    /** The project folder: server.json, not-found.html and site/ are here (SITE_ROOT, else the working folder). */
    public static string Root => Path.GetFullPath(Environment.GetEnvironmentVariable("SITE_ROOT") is { Length: > 0 } root ? root : Directory.GetCurrentDirectory());

    public static ServerConfig Load() =>
        JsonSerializer.Deserialize<ServerConfig>(File.ReadAllText(Path.Combine(Root, "server.json")), new JsonSerializerOptions(JsonSerializerDefaults.Web))
        ?? throw new InvalidOperationException("server.json is empty");

    public string Message(string key) => Messages[key];
}

public sealed record Limits(int MaxFields, int MaxLabel, int MaxValue, int MaxTotal, int MaxBody, int MessagesPerMinute, int ViewsPerMinute, int KeepMessages, int MaxPage);
