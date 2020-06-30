import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/assets/styles/theme";

import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";
import SEO from "../components/general/Seo";
import Contact from "../components/general/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <SEO title="Kontakt" />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default ContactPage;
