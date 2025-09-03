import type { SanityImageType, SiteFooter, SiteHeader, Slug } from './common';
import type { PortableTextBlock } from 'sanity';

export interface PropertyDetails {
  beds: number;
  baths: number;
  area: number;
  garage: number;
  yearBuilt: number;
}

export interface ImageWithAlt {
  asset: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: string;
}

export interface Property {
  _id: string;
  _type: 'property';
  title: PortableTextBlock;
  address: PortableTextBlock;
  price: number;
  pricePerSqft: number;
  mainImage: SanityImageType;
  galleryImages: SanityImageType[];
  details: PropertyDetails;
  description: PortableTextBlock;
  features?: string[];
  status: 'For Sale' | 'Sold' | 'Under Offer';
  slug: Slug;
}

export interface PropertyPageData {
  property: Property;
  header: SiteHeader;
  footer: SiteFooter;
}
