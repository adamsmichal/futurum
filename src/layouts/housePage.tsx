import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";

interface IHousePageProps {
  pageContext: any;
}

const HousePageWrapper = styled.main`
  font-family: ${({ theme }) => theme.fontFamily.main};

  & .slider {
    height: 100%;
    --content-background-color: ${({ theme }) => theme.colors.white};
    z-index: 0;
    margin-top: ${({ theme }) => theme.space.s};

    & .awssld {
      &__next {
        background-color: rgba(255, 255, 255, 0.6);
      }

      &__prev {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }

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

  & .awssld__content {
    display: block;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    & .slider {
      margin-bottom: ${({ theme }) => theme.space.m};

      & nav {
        bottom: 0;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
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
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title title" "photo description" "list slider1" "slider2 slider2";

    & .description {
      grid-area: description;
    }

    & .slider1 {
      grid-area: slider1;
    }

    & .list {
      grid-area: list;
    }

    & .slider2 {
      grid-area: slider2;
    }

    & .slider {
      text-align: center;
      & nav {
        bottom: -10px;
      }
    }
  }
`;

interface ITitleProps {
  bigger?: boolean;
  desktop?: boolean;
}

const Title = styled.h2<ITitleProps>`
  display: ${props => (props.desktop ? "none" : "block")};
  font-size: ${props => (props.bigger ? "2.3rem" : "1.6rem")};
  text-transform: uppercase;
  text-align: center;
  grid-area: title;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: ${props => (props.bigger ? "3.8rem" : "3rem")};
    margin: ${({ theme }) => theme.space.l};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: ${props => (props.bigger ? "4.2rem" : "3.4rem")};
    margin: ${({ theme }) => theme.space.xxl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: ${props => (props.desktop || !props.bigger ? "block" : "none")};
    font-size: ${props => (props.bigger ? "3.5rem" : "2.5rem")};
    margin: ${({ theme }) => theme.space.xl};
  }
`;

const Image = styled.img`
  grid-area: photo;
`;

const TextWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.space.l};
  margin: ${({ theme }) => theme.space.l} 0;

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
    padding: 0 ${({ theme }) => theme.space.l};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktopHuge}) {
    padding: ${({ theme }) => theme.space.xxxl};
  }
`;

const ArticleText = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.greeyP};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 2rem;
    line-height: 2.8rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 2rem;
    line-height: 3.5rem;
  }
`;

const ArticleList = styled.ul`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.greeyP};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 2.6rem;
    line-height: 3.6rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktopBig}) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const housePage: React.FC<IHousePageProps> = ({ pageContext: { page } }) => {
  console.log(page);

  const settings = {
    buttons: true,
    bullets: true,
    organicArrows: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <SimpleReactLightbox>
        <HousePageWrapper>
          <Title bigger>{page.frontmatter.title}</Title>
          <Image
            className="photo"
            src={page.frontmatter.featureImage.childImageSharp.original.src}
            alt="house"
          />
          <TextWrapper className="description">
            <Title desktop>{page.frontmatter.title}</Title>
            <ArticleText>{page.frontmatter.text}</ArticleText>
          </TextWrapper>
          <div className="slider1">
            <Title>Plany budynku</Title>
            <SRLWrapper>
              <AwesomeSlider className={"slider"} {...settings}>
                <div>
                  <img
                    src={page.frontmatter.Photo7.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo8.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo9.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo10.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo11.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo12.childImageSharp.original.src}
                    alt=""
                  />
                </div>
              </AwesomeSlider>
            </SRLWrapper>
          </div>
          <div className="list">
            <Title>Dane techniczne</Title>
            <TextWrapper>
              <ArticleList>
                {page.frontmatter.DetailsList.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ArticleList>
            </TextWrapper>
          </div>
          <div className="slider2">
            <Title>Wizualizacje</Title>
            <SRLWrapper>
              <AwesomeSlider className={"slider"} {...settings}>
                <div>
                  <img
                    src={page.frontmatter.Photo1.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo2.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo3.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo4.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo5.childImageSharp.original.src}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={page.frontmatter.Photo6.childImageSharp.original.src}
                    alt=""
                  />
                </div>
              </AwesomeSlider>
            </SRLWrapper>
          </div>
        </HousePageWrapper>
      </SimpleReactLightbox>
      <Footer />
    </ThemeProvider>
  );
};

export default housePage;
