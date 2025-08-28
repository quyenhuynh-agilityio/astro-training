import { createClient } from '@sanity/client';

// Configure the client
export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});
