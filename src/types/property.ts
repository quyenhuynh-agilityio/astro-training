import type { SanityImage, SiteHeader, SiteFooter, Slug } from './common';

export interface PropertyDetailType {
  _id: string;
  title: string;
  slug: Slug;
  address: string;
  price: string;
  pricePerSqft: string;
  mainImage?: SanityImage;
  galleryImages?: SanityImage[];
  details: {
    beds: number;
    baths: number;
    area: string;
    garage: number;
    yearBuilt: number;
  };
  description: string;
  features: string[];
  status?: string;
}

export interface PropertyPageData {
  property: PropertyDetailType;
  header: SiteHeader;
  footer: SiteFooter;
}
