import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tests/**',
      '**/tests-examples/**',
    ],
    coverage: {
      provider: 'c8',
      all: true,
      include: ['**/src/**/*.{ts,tsx,astro}'],
      exclude: ['**/src/constants/**', '**/src/types/**'],
    },
  },
});
