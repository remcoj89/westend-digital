import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import UnoCSS from "@unocss/astro";


export default defineConfig({
  site: 'https://westend-digital.nl/',
  output: 'static',
  adapter:  netlify(),
  image: {
    domains: ['https://mediumturquoise-sparrow-543006.hostingersite.com/']
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    UnoCSS(),
  ],
  experimental: {
    // svg: true,
  },
});
