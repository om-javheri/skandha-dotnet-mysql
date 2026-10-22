import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));

// One HTML page per site page, at the same paths as the HTML site. Relative addresses
// (base './') make the built site work at any path, e.g. GitHub Pages' /<repo>/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: {
        home: resolve(root, "index.html"),
        "digital-first-services": resolve(root, "digital-first-services/index.html"),
        "aimlfor-media": resolve(root, "ai-ml-for-media/index.html"),
        "customized-solutions": resolve(root, "customized-solutions/index.html"),
        "digital-sports-operations": resolve(root, "digital-sports-operations/index.html"),
        "managed-media-fabric": resolve(root, "managed-media-fabric/index.html"),
        "vid-re": resolve(root, "vidre/index.html"),
        "media-capability-centres": resolve(root, "media-capability-centres/index.html"),
        "media-verticals": resolve(root, "media-verticals/index.html"),
        about: resolve(root, "about/index.html"),
        news: resolve(root, "news/index.html"),
        contact: resolve(root, "contact/index.html"),
      },
    },
  },
});
