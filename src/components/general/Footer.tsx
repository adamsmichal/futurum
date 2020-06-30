import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  padding: ${({ theme }) => theme.space.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greeyFooter};
  color: ${({ theme }) => theme.colors.greeyH};
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    padding: ${({ theme }) => theme.space.sm};
    height: 65px;
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.space.l};
  }
`;

const FooterInfoWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLink = styled.a`
  & :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterInfoWrapper>
        <p>Michał Adamski</p>
        <p>|</p>
        <ProjectLink href="https://www.behance.net/gallery/99772637/Website-Design-for-Futurum">
          Projekt
        </ProjectLink>
      </FooterInfoWrapper>
      <p>&copy; All rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
