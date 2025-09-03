// Import all schema types
import { propertyDetailType } from './documents/detailPage';
import { homePageType } from './documents/homePage';
import { propertyType } from './documents/property';
import { aboutType } from './objects/aboutSection';
import { agentSectionType } from './objects/agentSection';
import { featureType } from './objects/featureSection';
import { footerType } from './objects/footer';
import { headerType } from './objects/header';
import { headingType } from './objects/heading';
import { propertiesType } from './objects/properties';
import { propertyDetailSectionType } from './objects/propertyDetail';
import { testimonialSectionType } from './objects/testimonialSection';
import { blockContentType } from './types/blockContent';

import type { SchemaTypeDefinition } from 'sanity';

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
