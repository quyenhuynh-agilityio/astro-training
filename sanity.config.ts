import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './studio/schemas';
import { presentationTool } from 'sanity/presentation';
import { resolve } from './studio/lib/resolve';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false,
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema,
});
