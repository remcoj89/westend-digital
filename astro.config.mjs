import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
    site: 'https://westend-digital.nl/',
    output: 'server',
    adapter: netlify(),
    integrations: [
      react(),
      sitemap(),

    ],
});
