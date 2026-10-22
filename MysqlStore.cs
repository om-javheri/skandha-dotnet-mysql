using System.Globalization;
using System.Text.Json;
using System.Text.RegularExpressions;
using MySqlConnector;

namespace Site;

/** Form messages and daily page-view counters in MySQL (DATABASE_URL). Nothing about visitors is kept. */
public sealed class MysqlStore : IStore
{
    private static readonly string[] Schema =
    [
        "CREATE TABLE IF NOT EXISTS form_messages (id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, form_id VARCHAR(200) NOT NULL, page VARCHAR(300) NOT NULL, fields LONGTEXT NOT NULL, created_at VARCHAR(30) NOT NULL) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
        "CREATE TABLE IF NOT EXISTS daily_counts (day CHAR(10) NOT NULL, kind VARCHAR(20) NOT NULL, `key` VARCHAR(255) NOT NULL, count BIGINT NOT NULL, PRIMARY KEY (day, kind, `key`)) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
        "CREATE TABLE IF NOT EXISTS rate_hits (bucket VARCHAR(100) NOT NULL, at DOUBLE NOT NULL, KEY rate_hits_bucket (bucket, at)) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
    ];

    private readonly string _connection;
    private readonly int _keepMessages;

    /**
     * mysql://user:password@host:3306/site. Hosted MySQL (TiDB Cloud, Aiven…) is reached over TLS,
     * checked against the certificate; it is off when the server is on this machine, or with ?ssl=false.
     */
    public MysqlStore(string url, int keepMessages)
    {
        var uri = new Uri(url);
        var query = uri.Query;
        var tls = query.Contains("ssl=true") || (!query.Contains("ssl=false") && !Regex.IsMatch(uri.Host, @"^(localhost|127\.\d+\.\d+\.\d+|::1|\[::1\])$"));
        var user = uri.UserInfo.Split(':', 2);
        _connection = new MySqlConnectionStringBuilder
        {
            Server = uri.Host,
            Port = (uint)(uri.Port > 0 ? uri.Port : 3306),
            UserID = Uri.UnescapeDataString(user[0]),
            Password = user.Length > 1 ? Uri.UnescapeDataString(user[1]) : "",
            Database = Uri.UnescapeDataString(uri.AbsolutePath.TrimStart('/')),
            SslMode = tls ? MySqlSslMode.VerifyFull : MySqlSslMode.None,
            // Without TLS, MySQL 8's default sign-in needs the server's public key.
            AllowPublicKeyRetrieval = !tls,
            CharacterSet = "utf8mb4",
        }.ConnectionString;
        _keepMessages = keepMessages;
        using var db = Open();
        foreach (var sql in Schema) Command(db, sql).ExecuteNonQuery();
    }

    // MySqlConnector pools connections, so each call opens one from the pool.
    private MySqlConnection Open()
    {
        var db = new MySqlConnection(_connection);
        db.Open();
        return db;
    }

    private static MySqlCommand Command(MySqlConnection db, string sql, params object[] values)
    {
        var command = db.CreateCommand();
        command.CommandText = sql;
        for (var i = 0; i < values.Length; i++) command.Parameters.AddWithValue("@p" + (i + 1), values[i]);
        return command;
    }

    private static string Today(int offset = 0) => DateTime.UtcNow.Date.AddDays(offset).ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);

    public void AddMessage(Message m)
    {
        using var db = Open();
        var created = DateTime.UtcNow.ToString("yyyy-MM-dd'T'HH:mm:ss.fff'Z'", CultureInfo.InvariantCulture);
        Command(db, "INSERT INTO form_messages (form_id, page, fields, created_at) VALUES (@p1, @p2, @p3, @p4)", m.FormId, m.Page, JsonSerializer.Serialize(m.Fields, Store.Json), created).ExecuteNonQuery();
        // MySQL reads its own table in a DELETE only through a derived table.
        Command(db, "DELETE FROM form_messages WHERE id <= (SELECT id FROM (SELECT id FROM form_messages ORDER BY id DESC LIMIT 1 OFFSET @p1) AS oldest)", _keepMessages).ExecuteNonQuery();
    }

    public List<object> Messages(int limit)
    {
        using var db = Open();
        var list = new List<object>();
        using var r = Command(db, "SELECT id, form_id, page, fields, created_at FROM form_messages ORDER BY id DESC LIMIT @p1", limit).ExecuteReader();
        while (r.Read()) list.Add(new { id = r.GetInt64(0), formId = r.GetString(1), page = r.GetString(2), fields = JsonSerializer.Deserialize<JsonElement>(r.GetString(3)), createdAt = r.GetString(4) });
        return list;
    }

    public bool DeleteMessage(long id)
    {
        using var db = Open();
        return Command(db, "DELETE FROM form_messages WHERE id = @p1", id).ExecuteNonQuery() > 0;
    }

    public void CountView(string path, string? referrer)
    {
        const string bump = "INSERT INTO daily_counts (day, kind, `key`, count) VALUES (@p1, @p2, @p3, 1) ON DUPLICATE KEY UPDATE count = count + 1";
        using var db = Open();
        Command(db, bump, Today(), "view", path).ExecuteNonQuery();
        if (referrer != null) Command(db, bump, Today(), "referrer", referrer).ExecuteNonQuery();
    }

    private static List<object> Totals(MySqlConnection db, string kind, string since)
    {
        var list = new List<object>();
        using var r = Command(db, "SELECT `key`, SUM(count) AS count FROM daily_counts WHERE kind = @p1 AND day >= @p2 GROUP BY `key` ORDER BY count DESC, `key`", kind, since).ExecuteReader();
        while (r.Read()) list.Add(new { key = r.GetString(0), count = Convert.ToInt64(r.GetValue(1), CultureInfo.InvariantCulture) });
        return list;
    }

    public object Stats(int days)
    {
        using var db = Open();
        var since = Today(-(days - 1));
        var daily = new List<object>();
        using (var r = Command(db, "SELECT day, SUM(count) AS views FROM daily_counts WHERE kind = 'view' AND day >= @p1 GROUP BY day ORDER BY day", since).ExecuteReader())
        {
            while (r.Read()) daily.Add(new { day = r.GetString(0), views = Convert.ToInt64(r.GetValue(1), CultureInfo.InvariantCulture) });
        }
        return new { days, daily, pages = Totals(db, "view", since), referrers = Totals(db, "referrer", since) };
    }

    public bool? Allow(string bucket, int perMinute)
    {
        using var db = Open();
        var now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() / 1000.0;
        Command(db, "DELETE FROM rate_hits WHERE at <= @p1", now - 60).ExecuteNonQuery();
        if (Convert.ToInt64(Command(db, "SELECT COUNT(*) FROM rate_hits WHERE bucket = @p1", bucket).ExecuteScalar(), CultureInfo.InvariantCulture) >= perMinute) return false;
        Command(db, "INSERT INTO rate_hits (bucket, at) VALUES (@p1, @p2)", bucket, now).ExecuteNonQuery();
        return true;
    }
}
