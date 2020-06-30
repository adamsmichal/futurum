import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Link from "gatsby-link";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const PhotoSliderWrapper = styled.section`
  width: 100vw;
  font-family: ${({ theme }) => theme.fontFamily.main};

  & .slider {
    height: 100%;
    --content-background-color: ${({ theme }) => theme.colors.white};

    & nav {
      bottom: 3vh;
      z-index: ${({ theme }) => theme.zIndex.level1};

      & button {
        width: 9px;
        height: 9px;
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 70vw;
    margin-bottom: ${({ theme }) => theme.space.l};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    & .slider {
      & nav {
        & button {
          width: 14px;
          height: 14px;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: none;
  }
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

const SliderBtn = styled(Link)`
  position: absolute;
  display: block;
  bottom: 0;
  right: 0;
  width: 30vw;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.greeyB};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    width: 30vw;
    height: 60px;
    font-size: 2.5rem;
    line-height: 60px;
  }
`;

const PhotoSlider: React.FC = () => {
  const data = useStaticQuery(query);

  const settings = {
    buttons: false,
    bullets: true,
    organicArrows: false,
  };

  return (
    <PhotoSliderWrapper>
      <Title>Wybierz swój dom!</Title>
      <AwesomeSlider className={"slider"} {...settings}>
        {data.allMdx.nodes.map(item => (
          <div key={item.frontmatter.title}>
            <img
              src={item.frontmatter.featureImage.childImageSharp.original.src}
              alt={item.frontmatter.title}
            />
            <SliderBtn to={`/house/${item.frontmatter.slug}`}>
              Zobacz szczegóły
            </SliderBtn>
          </div>
        ))}
      </AwesomeSlider>
    </PhotoSliderWrapper>
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

export default PhotoSlider;
