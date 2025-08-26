export const homePageQuery = `
*[_type == "homePage"][0] {
  hero {
    heading { title, subtitle, alignment },
    image { asset, alt },
    ctaText,
    ctaLink
  },
  header {
    logo { asset-> { url }, alt },
    navItems[] { title, link },
    ctaText,
    ctaLink
  },
  about {
    title,        
    description,
    image { asset-> { url }, alt },
    ctaText,
    ctaLink
  },
  properties {
    heading { title[], subtitle[], alignment },
    items[]-> {
      title,
      slug,
      details { beds, baths, area },
      mainImage { asset-> { url }, alt }
    },
    filters,
    introText[]
  },
  feature {
    title,
    description,
    image { asset-> { url }, alt },
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
      image { asset-> { url }, alt },
      quote[]
    },
    ctaText,
    ctaLink
  },
  footer {
    logo { asset-> { url }, alt },
    links[] {
      title[],                               
      links[] {
        label[],                             
        href                                 
      }
    },
    socialLinks[] {
      url,
      icon { asset-> { url }, alt }
    },
    ctaText,
    ctaLink
  }
}
`;
