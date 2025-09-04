export const loginPageQuery = `
*[_type == "homePage"][0] {
  hero {

    image {
      alt,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    }
  },
}
`;
