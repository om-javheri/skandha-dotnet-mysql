namespace Site;

/** Opens the site's store (docs/57). */
public static class Stores
{
    /** Null when the site's database server isn't set up. */
    public static IStore? Open(string dataDir, int keepMessages) =>
        Store.DatabaseUrl.Length == 0 ? null : new MysqlStore(Store.DatabaseUrl, keepMessages);
}
