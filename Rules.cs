using System.Text.Json;

namespace Site;

public sealed record Field(string Label, string Value);

/** A message that passed every check, or why it was refused. */
public abstract record Result;

public sealed record Message(string FormId, string Page, List<Field> Fields) : Result;

public sealed record Refusal(int Status, string Text) : Result;

public sealed record View(string Path, string? Referrer);

/** The checks on messages and page views, the same as the site's other servers. */
public static class Rules
{
    /** Whitespace as JavaScript trims it. */
    private static bool IsSpace(char c) =>
        c is ' ' or '\t' or '\n' or '\v' or '\f' or '\r' or (char)0x00A0 or (char)0x1680 or (>= (char)0x2000 and <= (char)0x200A) or (char)0x2028 or (char)0x2029 or (char)0x202F or (char)0x205F or (char)0x3000 or (char)0xFEFF;

    public static string Trim(string s)
    {
        int start = 0, end = s.Length;
        while (start < end && IsSpace(s[start])) start++;
        while (end > start && IsSpace(s[end - 1])) end--;
        return s[start..end];
    }

    private static JsonElement? Parse(string body)
    {
        try
        {
            using var doc = JsonDocument.Parse(body);
            return doc.RootElement.Clone();
        }
        catch (JsonException)
        {
            return null;
        }
    }

    /** The page a message came from: one of the site's pages, else the home page. */
    public static string PagePath(List<string> pages, string? page)
    {
        var path = (page ?? "").Split('?', '#')[0];
        if (path.EndsWith("/index.html", StringComparison.Ordinal)) path = path[..^"index.html".Length];
        if (path.Length > 1 && path.EndsWith('/')) path = path[..^1];
        return pages.Contains(path) ? path : "/";
    }

    /** Checks a form message (the body as sent: text/plain or JSON) against the form and the rules. */
    public static Result CheckMessage(ServerConfig config, string formId, string body)
    {
        var rules = config.Rules;
        var unreadable = new Refusal(400, config.Message("unreadable"));
        if (Parse(body) is not { ValueKind: JsonValueKind.Object } data) return unreadable;
        if (!data.TryGetProperty("fields", out var fields) || fields.ValueKind != JsonValueKind.Array) return unreadable;
        if (fields.GetArrayLength() < 1 || fields.GetArrayLength() > rules.MaxFields) return unreadable;
        var sent = new List<Field>();
        foreach (var f in fields.EnumerateArray())
        {
            if (f.ValueKind != JsonValueKind.Object || f.EnumerateObject().Any(p => p.Name is not ("label" or "value"))) return unreadable;
            if (!f.TryGetProperty("label", out var label) || !f.TryGetProperty("value", out var value)) return unreadable;
            if (label.ValueKind != JsonValueKind.String || value.ValueKind != JsonValueKind.String) return unreadable;
            // .NET counts string length in UTF-16 units, as JavaScript does.
            var (l, v) = (label.GetString()!, value.GetString()!);
            if (l.Length > rules.MaxLabel || v.Length > rules.MaxValue) return unreadable;
            sent.Add(new Field(l, v));
        }
        string? page = null;
        if (data.TryGetProperty("page", out var p))
        {
            if (p.ValueKind != JsonValueKind.String || p.GetString()!.Length > rules.MaxPage) return unreadable;
            page = p.GetString();
        }

        if (!config.Forms.TryGetValue(formId, out var formFields)) return new Refusal(404, config.Message("unknownForm"));
        if (sent.Count > formFields) return new Refusal(400, config.Message("tooManyFields"));
        if (sent.All(f => Trim(f.Value).Length == 0)) return new Refusal(400, config.Message("empty"));
        if (sent.Sum(f => f.Label.Length + f.Value.Length) > rules.MaxTotal) return new Refusal(400, config.Message("tooLong"));
        return new Message(formId, PagePath(config.Pages, page), sent.Select(f => new Field(Trim(f.Label), Trim(f.Value))).ToList());
    }

    /** A page view to count: the page's path, and the referring site's host when it is another site. */
    public static View? ReadView(ServerConfig config, string body, string ownHost)
    {
        if (Parse(body) is not { ValueKind: JsonValueKind.Object } data) return null;
        if (!data.TryGetProperty("path", out var p) || p.ValueKind != JsonValueKind.String) return null;
        var path = p.GetString()!.Split('?', '#')[0];
        if (!config.Pages.Contains(path)) return null;
        string? referrer = null;
        if (data.TryGetProperty("referrer", out var r) && r.ValueKind == JsonValueKind.String && Uri.TryCreate(r.GetString(), UriKind.Absolute, out var uri))
        {
            var host = uri.Host.ToLowerInvariant();
            if ((uri.Scheme == "http" || uri.Scheme == "https") && host.Length > 0 && host != ownHost.ToLowerInvariant() && host.Length <= 253) referrer = host;
        }
        return new View(path, referrer);
    }
}

/** At most perMinute hits a minute per key (a visitor's address), kept in memory. */
public sealed class Limiter(int perMinute)
{
    private readonly Dictionary<string, Queue<long>> _hits = new();

    public bool Allow(string key)
    {
        lock (_hits)
        {
            var now = Environment.TickCount64;
            if (!_hits.TryGetValue(key, out var recent)) _hits[key] = recent = new Queue<long>();
            while (recent.Count > 0 && now - recent.Peek() >= 60_000) recent.Dequeue();
            var allowed = recent.Count < perMinute;
            if (allowed) recent.Enqueue(now);
            if (_hits.Count > 10_000)
            {
                foreach (var stale in _hits.Where(h => h.Value.Count == 0 || now - h.Value.Last() >= 60_000).Select(h => h.Key).ToList()) _hits.Remove(stale);
            }
            return allowed;
        }
    }
}
