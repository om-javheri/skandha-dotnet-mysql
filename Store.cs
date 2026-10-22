using System.Text.Encodings.Web;
using System.Text.Json;

namespace Site;

/** Where messages and counters are kept. Nothing about visitors is kept. */
public interface IStore
{
    /** Keeps a message; only the newest keepMessages are kept. */
    void AddMessage(Message m);

    /** The newest messages first. */
    List<object> Messages(int limit);

    bool DeleteMessage(long id);

    /** Counts a view of a page today, and the site it came from. */
    void CountView(string path, string? referrer);

    /** The last days days (today included): views a day, by page and by referring site. */
    object Stats(int days);

    /** A database server keeps the sending limits itself, so they hold across instances; null: kept in memory. */
    bool? Allow(string bucket, int perMinute) => null;
}

public static class Store
{
    public static readonly JsonSerializerOptions Json = new(JsonSerializerDefaults.Web) { Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping };

    /** The database server's address: DATABASE_URL (or MONGODB_URI, as the Vercel MongoDB Atlas integration names it). */
    public static string DatabaseUrl => Environment.GetEnvironmentVariable("DATABASE_URL") is { Length: > 0 } url ? url : Environment.GetEnvironmentVariable("MONGODB_URI") ?? "";
}
