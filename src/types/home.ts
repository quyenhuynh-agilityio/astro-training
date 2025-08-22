import type {
  SanityImage,
  HeadingBlock,
  SiteHeader,
  SiteFooter,
} from './common';

export interface Hero {
  heading: HeadingBlock;
  image?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface About {
  title?: string;
  description?: string;
  image?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface PropertyDetails {
  beds?: number;
  baths?: number;
  area?: string;
}

export interface PropertyCard {
  title?: string;
  slug?: { current: string };
  details?: PropertyDetails;
  mainImage?: SanityImage;
}

export interface PropertiesSection {
  heading: HeadingBlock;
  items?: PropertyCard[];
  filters?: any;
  introText?: string;
}

export interface Feature {
  title?: string;
  description?: string;
  image?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

export interface Agent {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Testimonial {
  heading: HeadingBlock;
  testimonials?: {
    author: string;
    role?: string;
    image?: SanityImage;
    quote: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
}

export interface HomePageType {
  hero: Hero;
  header: SiteHeader;
  about: About;
  properties: PropertiesSection;
  feature: Feature;
  agent: Agent;
  testimonial: Testimonial;
  footer: SiteFooter;
}
