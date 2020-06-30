import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Link from "gatsby-link";

const HousesBarWrapper = styled.section`
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: block;
    padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.xl};
  }
`;

const HousesBarGrid = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin: ${({ theme }) => theme.space.l} 0 ${({ theme }) => theme.space.ml};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.space.xl} 0 ${({ theme }) => theme.space.l};
    font-size: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    margin: ${({ theme }) => theme.space.xl} 0;
    font-size: 3.4rem;
  }
`;

const HouseBarElement = styled(Link)`
  padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.m};
  transform: scale(1);
  transition: all 0.6s;

  & :hover {
    transform: scale(1.1);
    transition: all 0.6s;
  }
`;

const HouseBar: React.FC = () => {
  const data = useStaticQuery(query);
  return (
    <HousesBarWrapper>
      <Title>Wybierz swój dom!</Title>
      <HousesBarGrid>
        {data.allMdx.nodes.map(item => (
          <HouseBarElement
            to={`/house/${item.frontmatter.slug}`}
            key={item.frontmatter.title}
          >
            <img
              src={item.frontmatter.featureImage.childImageSharp.original.src}
              alt={item.frontmatter.title}
            />
          </HouseBarElement>
        ))}
      </HousesBarGrid>
    </HousesBarWrapper>
  );
};

const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { filter: { in: "housePage" } } }
      sort: { fields: frontmatter___slug }
    ) {
      nodes {
        frontmatter {
          featureImage {
            childImageSharp {
              original {
                src
              }
            }
          }
          title
          slug
        }
      }
    }
  }
`;

export default HouseBar;
