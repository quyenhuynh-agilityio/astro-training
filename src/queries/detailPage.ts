export const propertyQuery = `
*[_type == "property" && slug.current == $slug][0]{
  _id,
  title,
  slug,  
  address,
  price,
  pricePerSqft,
  mainImage { alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      } },
  galleryImages[] { alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      } },
  details { beds, baths, area, garage, yearBuilt },
  description[],
  features,
  status
}
`;

export const detailPageQuery = `
*[_type == "homePage"][0] {
  header {
    logo { alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }},
    navItems[] { title, link },
    ctaText,
    ctaLink
  },
  footer {
    logo { alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }},
    links[] {
      title[],                               
      links[] {
        label[],                             
        href                                 
      }
    },
    socialLinks[] {
      url,
      icon { alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }}
    },
    ctaText,
    ctaLink
  }
}
`;
