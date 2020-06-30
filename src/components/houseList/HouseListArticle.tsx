import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ArticleWrapper = styled.article`
  width: 100%;
  height: calc(100vh - 100px);

  & .awssld__content {
    display: block;
  }

  & .slider {
    height: 100%;
    --content-background-color: ${({ theme }) => theme.colors.white};

    & nav {
      bottom: 3vh;
      z-index: ${({ theme }) => theme.zIndex.level1};

      & button {
        width: 9px;
        height: 9px;
        background-color: ${({ theme }) => theme.colors.greeyFooter};
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    margin: ${({ theme }) => theme.space.xl} 0;
    font-size: 3.4rem;
    & .slider {
      & nav {
        & button {
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    padding: 0;
    height: calc(87vh - 100px);
  }
`;

const SliderContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 70vh;
    padding: 0 ${({ theme }) => theme.space.xxxl};
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktopHuge}) {
    padding: 0 500px;
  }
`;

const Image = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 100%;
    padding: 0 ${({ theme }) => theme.space.s};
  }
`;

const TextWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.space.l};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    padding: 0 ${({ theme }) => theme.space.xl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    padding: 0 ${({ theme }) => theme.space.xxl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.space.xl};
  }
`;

const ArticleText = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.greeyP};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 3rem;
    line-height: 40px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 2rem;
    line-height: 30px;
  }
`;

const ArticleBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.greeyFooter};
  color: ${({ theme }) => theme.colors.greeyP};

  & :hover {
    color: ${({ theme }) => theme.colors.greeyFooter};
    background-color: ${({ theme }) => theme.colors.greeyP};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 40px;
    font-size: 2rem;
    margin-left: auto;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    height: 60px;
    font-size: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 40px;
    font-size: 2rem;
  }
`;

const HouseListArticle: React.FC = () => {
  const data = useStaticQuery(query);

  const settings = {
    buttons: true,
    bullets: true,
    organicArrows: true,
  };

  return (
    <ArticleWrapper>
      <AwesomeSlider className={"slider"} {...settings}>
        {data.allMdx.nodes.map(
          ({ frontmatter: { title, featureImage, text, slug } }) => (
            <div>
              <SliderContainer key={title}>
                <Image
                  src={featureImage.childImageSharp.original.src}
                  alt="map"
                />
                <TextWrapper>
                  <ArticleText>{text}</ArticleText>
                  <ArticleBtn to={`/house/${slug}`}>Więcej</ArticleBtn>
                </TextWrapper>
              </SliderContainer>
            </div>
          )
        )}
      </AwesomeSlider>
    </ArticleWrapper>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { filter: { in: "housePage" } } }
      sort: { fields: frontmatter___slug }
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
          slug
        }
      }
    }
  }
`;

export default HouseListArticle;
