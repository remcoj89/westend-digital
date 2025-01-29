import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({

  site: 'https://westend-digital.nl/',
  output: 'static',
  adapter:  netlify(),
  image: {
    domains: ['https://mediumturquoise-sparrow-543006.hostingersite.com/']
  },
  integrations: [
    react(),
    sitemap(),
  ],
  experimental: {
    svg: true,
  },
});
