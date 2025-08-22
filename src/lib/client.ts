import { createClient } from '@sanity/client';

// Configure the client
export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});
