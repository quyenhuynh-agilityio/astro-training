import { loadEnv } from 'vite';
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import node from '@astrojs/node';

const env = loadEnv('production', process.cwd(), '');

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  redirects: {
    'benefits/': '/',
  },
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: '2025-01-28',
      studioBasePath: '/studio',
      stega: {
        studioUrl: '/studio',
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
