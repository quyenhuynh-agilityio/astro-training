export const propertyQuery = `
*[_type == "property" && slug.current == $slug][0]{
  _id,
  title,
  slug,  
  address,
  price,
  pricePerSqft,
  mainImage { asset-> { url }, alt },
  galleryImages[] { asset-> { url }, alt },
  details { beds, baths, area, garage, yearBuilt },
  description[],
  features,
  status
}
`;

export const detailPageQuery = `
*[_type == "homePage"][0] {
  header {
    logo { asset-> { url }, alt },
    navItems[] { title, link },
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
