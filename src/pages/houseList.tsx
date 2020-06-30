import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../src/assets/styles/theme";

import SEO from "../components/general/Seo";
import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";
import HouseListArticle from "../components/houseList/HouseListArticle";

const HouseListPageWrapper = styled.main`
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const HouseListPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <HouseListPageWrapper>
          <SEO title="Lista domów" />
          <HouseListArticle />
        </HouseListPageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default HouseListPage;
