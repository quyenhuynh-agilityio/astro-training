import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

import type { SanityImageType } from '@types-local/common';

export const imageBuilder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: SanityImageType) => {
  return imageBuilder.image(source);
};
