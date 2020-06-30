const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/housePage.tsx`);
  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { filter: { in: "housePage" } } }) {
        nodes {
          frontmatter {
            filter
            text
            title
            DetailsList
            featureImage {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo1 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo2 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo3 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo4 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo5 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo6 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo7 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo8 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo9 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo10 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo11 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            Photo12 {
              childImageSharp {
                original {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(page => {
    createPage({
      path: `house/${page.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        page,
      },
    });
  });
};
