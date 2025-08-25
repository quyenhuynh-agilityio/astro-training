import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) =>
  builder.image(source).auto('format').quality(75);
