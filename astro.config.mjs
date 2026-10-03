// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site is served from the root of its custom domain (set in the repo's
  // Settings → Pages), so there is no `base` sub-path. `site` is the single
  // source of truth for every absolute URL the build emits.
  //
  // Files under public/ are copied verbatim and cannot read this config, so
  // they spell the published URL out by hand and have to be updated alongside
  // it: robots.txt, sitemap.xml, site.webmanifest, manifest.json,
  // browserconfig.xml.
  site: 'https://www.bidiex.agency',
  output: 'static',
  build: {
    // Keep CSS in one file — the site ships a single global stylesheet.
    inlineStylesheets: 'never',
  },
});
