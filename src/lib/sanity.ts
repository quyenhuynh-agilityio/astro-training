import { createClient } from '@sanity/client';
import { loadEnv } from 'vite';

// Load environment variables
const env = loadEnv(import.meta.env.MODE || 'development', process.cwd(), '');

// Dynamically import imageUrlBuilder to handle potential CommonJS issues
const imageUrlBuilder = async () => {
  const { default: builder } = await import('@sanity/image-url');
  return builder;
};

const client = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: env.SANITY_API_READ_TOKEN,
});

// Use async function to get builder instance
export const urlFor = async (source: {
  _ref?: string;
  asset?: { _ref?: string };
  [key: string]: any;
}) => {
  const builder = await imageUrlBuilder();
  return builder.image(source);
};

export default client;
