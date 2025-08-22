import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 1. Configure Sanity client
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // from your env
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01', // or today's date for latest API
  useCdn: true,
});

// 2. Configure image URL builder
const builder = imageUrlBuilder(sanityClient);

// 3. Helper function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}
