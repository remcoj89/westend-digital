import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'

import react from '@astrojs/react';

export default defineConfig({
    site: 'https://westend-digital.nl/',
    integrations: [
      partytown({
        config: {
          forward: ["dataLayer.push"],
        },
      }),
       react()],
});
