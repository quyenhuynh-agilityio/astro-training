import { loadEnv } from 'vite';
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import tsconfigPaths from 'vite-tsconfig-paths';
import sanity from '@sanity/astro';
import node from '@astrojs/node';

const env = loadEnv('production', process.cwd(), '');
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  redirects: {
    'benefits/': '/',
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
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
