import type { SchemaTypeDefinition } from 'sanity';

// Import all schema types
import { blockContentType } from './types/blockContent';
import { headingType } from './objects/heading';
import { footerType } from './objects/footer';
import { propertiesType } from './objects/properties';
import { propertyDetailSectionType } from './objects/propertyDetail';
import { testimonialSectionType } from './objects/testimonialSection';
import { agentSectionType } from './objects/agentSection';
import { contactSectionType } from './objects/contactSection';
import { propertyType } from './documents/property';
import { homePageType } from './documents/homePage';
import { propertyDetailType } from './documents/detailPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    headingType,
    footerType,
    propertiesType,
    propertyDetailSectionType,
    testimonialSectionType,
    agentSectionType,
    contactSectionType,
    propertyType,
    homePageType,
    propertyDetailType,
  ],
};
