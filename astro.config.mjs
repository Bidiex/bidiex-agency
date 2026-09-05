// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bidiex.com',
  output: 'static',
  build: {
    // Keep CSS in one file — the site ships a single global stylesheet.
    inlineStylesheets: 'never',
  },
});
