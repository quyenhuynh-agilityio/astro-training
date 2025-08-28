/** A Sanity image with optional asset data */
import type { SanityImageDimensions } from '@sanity/image-url/lib/types/types';

export interface ImageDimensions {
  dimensions: SanityImageDimensions;
}
export interface SanityImageType {
  asset: {
    url: string;
    metadata: ImageDimensions;
  };
  alt: string;
}

/** A text heading block with alignment */
export interface HeadingBlock {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}

/** Navigation item used in header/footer */
export interface NavItem {
  link?: {
    _type: 'slug';
    current: string;
  };
  title?: string;
}
export interface Slug {
  _type: 'slug';
  current: string;
}

/** Shared header type */
export interface SiteHeader {
  logo?: SanityImageType;
  navItems?: NavItem[];
  ctaText?: string;
  ctaLink?: string;
}

/** Shared footer type */
export interface SiteFooter {
  logo?: SanityImageType;
  links?: {
    title: string;
    links: string[];
  }[];
  socialLinks?: {
    url?: string;
    icon?: SanityImageType;
  }[];
  ctaText?: string;
  ctaLink?: string;
}
