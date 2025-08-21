/** A Sanity image with optional asset data */
export interface SanityImage {
  asset?: {
    url?: string;
    alt?: string;
  };
  alt?: string;
}

/** A text heading block with alignment */
export interface HeadingBlock {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}

/** Navigation item used in header/footer */
export interface NavItem {
  title: string;
  link: string;
}

/** Shared header type */
export interface SiteHeader {
  logo?: SanityImage;
  navItems?: NavItem[];
  ctaText?: string;
  ctaLink?: string;
}

/** Shared footer type */
export interface SiteFooter {
  logo?: SanityImage;
  links?: {
    title: string;
    links: string[];
  }[];
  socialLinks?: {
    url: string;
    icon?: SanityImage;
  }[];
  ctaText?: string;
  ctaLink?: string;
}
