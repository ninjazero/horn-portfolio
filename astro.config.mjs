// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: confirm the production domain before launch.
export default defineConfig({
  site: 'https://anthonyhorn.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
