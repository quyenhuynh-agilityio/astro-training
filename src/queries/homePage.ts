export const homePageQuery = `
*[_type == "homePage"][0] {
  hero {
    heading { title, subtitle, alignment },
    image {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    ctaText,
    ctaLink
  },
  header {
    logo {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    navItems[] { title, link },
    ctaText,
    ctaLink
  },
  about {
    title,        
    description,
    image {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    ctaText,
    ctaLink
  },
  properties {
    heading { title[], subtitle[], alignment },
    items[]-> {
      title,
      slug,
      details { beds, baths, area },
      mainImage {
        alt,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      }
    },
    filters,
    introText[]
  },
  feature {
    title,
    description,
    image {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    ctaText,
    ctaLink
  },
  agent {
    title[],
    description[],
    ctaText,
    ctaLink
  },
  testimonial {
    heading { title[], subtitle[], alignment },
    testimonials[] {
      author,
      role,
      image {
        alt,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      },
      quote[]
    },
    ctaText,
    ctaLink
  },
  footer {
    logo {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    links[] {
      title[],                               
      links[] {
        label[],                             
        href                                 
      }
    },
    socialLinks[] {
      url,
      icon
    },
    ctaText,
    ctaLink
  }
}
`;
