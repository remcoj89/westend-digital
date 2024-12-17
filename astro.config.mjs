import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
    site: 'https://westend-digital.nl/',
    output: 'server',
    adapter: netlify({
      imageCDN: false,
    }),
    image: {
      domains: ['https://mediumturquoise-sparrow-543006.hostingersite.com/']
    },
    integrations: [
      react(),
      sitemap(),

    ],
});
