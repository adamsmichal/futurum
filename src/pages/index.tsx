import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "../../src/assets/styles/theme";

import SEO from "../components/general/Seo";
import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";

import TextSlider from "../components/homePage/TextSlider";
import HomeArticle from "../components/homePage/HomeArticle";
import Map from "../components/homePage/Map";
import PhotoSlider from "../components/homePage/PhotoSlider";
import HousesBar from "../components/homePage/HousesBar";
import Contact from "../components/general/Contact";

const HomeWrapper = styled.main`
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const HomeArticlesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const IndexPage: React.FC = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <HomeWrapper>
          <SEO title="Strona główna" />
          <TextSlider />
          <HomeArticlesGrid>
            {data.allMdx.nodes.map(
              ({ frontmatter: { title, featureImage, text } }) => (
                <HomeArticle
                  image={featureImage.childImageSharp.original.src}
                  title={title}
                  text={text}
                  key={title}
                />
              )
            )}
          </HomeArticlesGrid>
          <Map />
          <PhotoSlider />
          <HousesBar />
          <Contact />
        </HomeWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { filter: { in: "homePage" } } }
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

export default IndexPage;
