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
      "mediumturquoise-sparrow-543006.hostingersite.com/",
      "lh3.googleusercontent.com",
    ],
  },
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      // FILTER: Controleer of de URL eindigt op /bedankt of /bedankt/
      filter: (page) => !page.match(/\/bedankt\/?$/),
    }),
  ],
});
