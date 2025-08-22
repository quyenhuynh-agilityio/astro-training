import { defineConfig, passthroughImageService } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

const env = loadEnv(import.meta.env.MODE || 'development', process.cwd(), '');

const validateEnv = () => {
  const missingVars = [];
  if (!env.PUBLIC_SANITY_PROJECT_ID)
    missingVars.push('PUBLIC_SANITY_PROJECT_ID');
  if (!env.PUBLIC_SANITY_DATASET) missingVars.push('PUBLIC_SANITY_DATASET');
  if (import.meta.env.PROD && !env.SANITY_API_READ_TOKEN)
    missingVars.push('SANITY_API_READ_TOKEN');
  if (missingVars.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missingVars.join(', ')}. Check your .env files.`
    );
  }
};
validateEnv();

export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
      bypassToken: env.SANITY_API_READ_TOKEN,
    },
    imageService: true,
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
      useCdn: env.DEV ? false : true,
      apiVersion: '2023-05-03',
      studioBasePath: '/studio',
      stega: {
        studioUrl:
          env.PUBLIC_STUDIO_URL || 'https://astro-real-estate.vercel.app/',
        enabled: env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true',
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    optimizeDeps: {
      include: ['@sanity/client', '@sanity/image-url'],
      exclude: ['fsevents'],
    },
    ssr: {
      noExternal: ['@sanity/client', '@sanity/image-url'],
    },
    build: {
      rollupOptions: {
        external: [/fsevents\.node$/],
      },
    },
    define: {
      global: 'globalThis',
    },
  },
  define: {
    'import.meta.env.PUBLIC_SANITY_PROJECT_ID': JSON.stringify(
      env.PUBLIC_SANITY_PROJECT_ID || ''
    ),
    'import.meta.env.PUBLIC_SANITY_DATASET': JSON.stringify(
      env.PUBLIC_SANITY_DATASET || 'production'
    ),
    'import.meta.env.PUBLIC_STUDIO_URL': JSON.stringify(
      env.PUBLIC_STUDIO_URL || 'https://astro-real-estate.vercel.app/'
    ),
    'import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED': JSON.stringify(
      env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED || 'false'
    ),
  },
});
