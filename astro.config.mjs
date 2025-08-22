import { loadEnv } from 'vite';
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

const env = loadEnv('production', process.cwd(), '');

export default defineConfig({
  output: 'server', // Use server for dynamic routes with Vercel ISR
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24, // Cache pages for 24 hours
      bypassToken: env.PUBLIC_SANITY_API_READ_TOKEN,
    },
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
      useCdn: false, // Set to false for consistency in SSR/ISR
      apiVersion: '2025-01-28',
      studioBasePath: '/studio', // Keep for local Studio, not deployed with frontend
      stega: {
        studioUrl: '/studio', // Use deployed Studio URL
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
