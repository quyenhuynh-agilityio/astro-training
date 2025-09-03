import type {
  HeadingBlock,
  SanityImageType,
  SiteFooter,
  SiteHeader,
} from './common';
import type { Property } from './property';

export interface Hero {
  heading: HeadingBlock;
  image?: SanityImageType;
  ctaText?: string;
  ctaLink?: string;
}

export interface About {
  title?: string;
  description?: string;
  image?: SanityImageType;
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
  mainImage?: SanityImageType;
}

export interface PropertiesSection {
  heading: HeadingBlock;
  items?: Property[];
  filters?: any;
  introText?: string;
}

export interface Feature {
  title?: string;
  description?: string;
  image?: SanityImageType;
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
    image?: SanityImageType;
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
