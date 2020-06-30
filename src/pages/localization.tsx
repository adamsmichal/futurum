import React from "react";
import styled, { ThemeProvider } from "styled-components";
import SEO from "../components/general/Seo";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "../../src/assets/styles/theme";

import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";
import GeneralArticle from "../components/general/GeneralArticle";

const LocalizationPageWrapper = styled.main`
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const LocalizationPage: React.FC = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <LocalizationPageWrapper>
          <SEO title="Lokalizacja" />
          {data.allMdx.nodes.map(
            ({ frontmatter: { title, featureImage, text } }) => (
              <GeneralArticle
                image={featureImage.childImageSharp.original.src}
                title={title}
                text={text}
                key={title}
              />
            )
          )}
        </LocalizationPageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { filter: { in: "localizationPage" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          filter
          featureImage {
            childImageSharp {
              original {
                src
              }
            }
          }
          text
          title
        }
      }
    }
  }
`;

export default LocalizationPage;
