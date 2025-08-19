import type { SchemaTypeDefinition } from 'sanity';

// Import all schema types
import { blockContentType } from './types/blockContent';
import { headingType } from './objects/heading';
import { footerType } from './objects/footer';
import { propertiesType } from './objects/properties';
import { propertyDetailSectionType } from './objects/propertyDetail';
import { testimonialSectionType } from './objects/testimonialSection';
import { agentSectionType } from './objects/agentSection';
import { propertyType } from './documents/property';
import { homePageType } from './documents/homePage';
import { propertyDetailType } from './documents/detailPage';
import { headerType } from './objects/header';
import { aboutType } from './objects/aboutSection';
import { featureType } from './objects/featureSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    headerType,
    aboutType,
    featureType,
    agentSectionType,
    testimonialSectionType,
    footerType,
    headingType,
    propertiesType,
    propertyDetailSectionType,
    propertyType,
    homePageType,
    propertyDetailType,
  ],
};
