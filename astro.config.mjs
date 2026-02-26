// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import frontmanAi from '@frontman-ai/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.heart-logic.com',
  base: '/',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), frontmanAi({ projectRoot: import.meta.dirname })],
  output: 'static',
  server: {
    port: 3000,
  },
});