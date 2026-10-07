import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site";

// The site URL comes from src/data/site.ts so it only needs changing in one place.
export default defineConfig({
  site: site.url,
  output: "static",
  // URLs end in "/" (e.g. /blog/) so they work the same on every static host.
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    // Small stylesheets are inlined into the HTML to avoid an extra request.
    inlineStylesheets: "auto",
  },
  markdown: {
    shikiConfig: {
      // Code-block colour theme for blog posts.
      theme: "github-light",
    },
  },
});
