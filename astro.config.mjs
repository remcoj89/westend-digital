import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: "https://westend-digital.nl/",
  output: "static",
  adapter: netlify(),
  image: {
    domains: [
      "https://mediumturquoise-sparrow-543006.hostingersite.com/",
      "https://lh3.googleusercontent.com",
    ],
  },
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  experimental: {
    // svg: true,
  },
});
