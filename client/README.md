# Skandha (.NET + MySQL)

A React + Vite + TypeScript site, exported from UniversalIDE.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # the site, in dist/ (works at any path)
```

## Layout

- One HTML file per page, at the same path as on the published site, with that page's title,
  search and social tags in its `<head>`:
  - `index.html` → `src/pages/Home.tsx`
  - `digital-first-services/index.html` → `src/pages/DigitalFirstServices.tsx`
  - `ai-ml-for-media/index.html` → `src/pages/AIMLForMedia.tsx`
  - `customized-solutions/index.html` → `src/pages/CustomizedSolutions.tsx`
  - `digital-sports-operations/index.html` → `src/pages/DigitalSportsOperations.tsx`
  - `managed-media-fabric/index.html` → `src/pages/ManagedMediaFabric.tsx`
  - `vidre/index.html` → `src/pages/VidRE.tsx`
  - `media-capability-centres/index.html` → `src/pages/MediaCapabilityCentres.tsx`
  - `media-verticals/index.html` → `src/pages/MediaVerticals.tsx`
  - `about/index.html` → `src/pages/About.tsx`
  - `news/index.html` → `src/pages/News.tsx`
  - `contact/index.html` → `src/pages/Contact.tsx`
- `src/pages/`: a component per page; each top-level section is a component in the same file.
  A page's `.css` file holds its tablet and phone styles.
- `src/site.css`: the site's shared styles. `src/site-scripts.ts`: the shared page behaviour
  (entrance animations, folding menus, sending forms), started by `src/mount.tsx`.
- `public/`: pictures (`files/`), exact copies of imported pages (`_embeds/`, shown in a
  sandboxed frame), robots.txt, llms.txt and the sitemap, copied as they are.

Pages render in the browser. Links between pages are ordinary links, as on the HTML site.
