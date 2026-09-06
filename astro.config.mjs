// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site is published as a GitHub Pages *project* page, so it lives under
  // a sub-path rather than at a domain root. Both values below are the single
  // source of truth for every absolute URL the build emits — point `site` at a
  // custom domain and drop `base` if bidiex.com is ever wired up.
  //
  // Files under public/ are copied verbatim and cannot read this config, so
  // they spell the published URL out by hand and have to be updated alongside
  // it: robots.txt, sitemap.xml, site.webmanifest, manifest.json,
  // browserconfig.xml.
  site: 'https://bidiex.github.io',
  base: '/bidiex-agency',
  output: 'static',
  build: {
    // Keep CSS in one file — the site ships a single global stylesheet.
    inlineStylesheets: 'never',
  },
});
