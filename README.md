# Skandha (.NET + MySQL)

The site, drawn by React, and its own server in .NET (ASP.NET Core, MySQL), exported from UniversalIDE. The .NET
10 SDK.

Build the site first (Node.js 22): `cd client && npm install && npm run build && cd .. && cp -r client/dist site`.

Set `DATABASE_URL` to the MySQL server's address (`mysql://user:password@host:3306/site`, over TLS unless it is on this machine or `?ssl=false`); without it the site is served and forms answer that the database isn't set up.

```sh
ADMIN_KEY=choose-a-long-secret dotnet run -c Release     # http://localhost:8080, from this folder
```

The server reads `server.json`, `not-found.html` and `site/` from the folder it is started in (or
`SITE_ROOT`). Or with Docker: `docker build -t site . && docker run -p 8080:8080 -e ADMIN_KEY=… -v site-data:/data site`.

## Layout

- `site/`: the site's pages, styles, pictures and exact copies, served as they are.
- `Program.cs`: the server: the site, `POST /api/forms/{id}`, `POST /api/views`, `/api/admin/…`.
- `Rules.cs`: the checks on messages and page views, and the sending limits; `Store.cs`,
  `Stores.cs` and `MysqlStore.cs`: the database; `ServerConfig.cs`: reads `server.json`.

## Messages and statistics

Forms on the site that send to you post to `/api/forms/<form id>`; the messages are kept in the
database (the newest 2,000). Page views are counted a day per page, with the sites visitors came
from; nothing about the visitors themselves is kept. Read them with the admin key:

```sh
curl -H "Authorization: Bearer $ADMIN_KEY" http://localhost:8080/api/admin/messages
curl -H "Authorization: Bearer $ADMIN_KEY" "http://localhost:8080/api/admin/stats?days=30"
curl -X DELETE -H "Authorization: Bearer $ADMIN_KEY" http://localhost:8080/api/admin/messages/<id>
```

| Setting | |
|---|---|
| `PORT` | where it listens |
| `DATA_DIR` | the folder for the database (`site.sqlite`) |
| `ADMIN_KEY` | lets you read messages and statistics; without it those addresses answer 404 |
| `TRUST_PROXY=1` | behind a proxy: a visitor's address (for the sending limits only) is the first in `X-Forwarded-For` |

`server.json` holds the site's forms, pages and rules; `site/` is the site itself. Both are
written by UniversalIDE: export again to update them.
