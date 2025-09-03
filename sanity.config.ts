import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { resolve } from './studio/lib/resolve';
import { schema } from './studio/schemas';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,

  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema,
});
