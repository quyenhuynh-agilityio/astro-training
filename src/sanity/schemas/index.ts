import type { SchemaTypeDefinition } from 'sanity';
import { categoryType } from './header';
import { blockContentType } from './blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, blockContentType],
};
