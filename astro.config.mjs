import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE || 'development', process.cwd(), '');

if (!env.PUBLIC_SANITY_PROJECT_ID || !env.PUBLIC_SANITY_DATASET) {
  console.warn('Missing Sanity ENV variables!');
}

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
    auth(),
    tailwind(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: '2023-05-03',
      studioBasePath: '/studio',
      stega: {
        studioUrl:
          env.PUBLIC_STUDIO_URL || 'https://astro-real-estate.vercel.app/',
        enabled: env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true',
      },
    }),
  ],
  // rewrites: {
  //   '/': '/home', // Rewrite root to /home
  // },
  image: {
    domains: ['cdn.sanity.io'], // allow Sanity image CDN
  },
  vite: {
    optimizeDeps: {
      include: ['@sanity/client'],
      exclude: ['fsevents'],
    },
    ssr: {
      noExternal: ['@sanity/client'],
      external: ['@sanity/image-url'],
    },
    assets: {
      domains: ['cdn.sanity.io'], // allow remote domain
    },
    define: {
      global: 'globalThis',
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
  },
});
