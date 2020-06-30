import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

interface ITextSliderProps {
  data: string;
}

const SliderContainer = styled.section<ITextSliderProps>`
  width: 100vw;
  margin-bottom: ${({ theme }) => theme.space.m};
  background-image: url(${props => props.data});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;

  & .slider {
    width: 100vw;
    height: 100%;
    --content-background-color: rgba(04, 04, 04, 0.64);
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    & .slider {
      margin-bottom: ${({ theme }) => theme.space.l};
      font-size: 3rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    & .slider {
      font-size: 4.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 90vh;
  }
`;

const query = graphql`
  {
    file(name: { eq: "main" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;

const TextSlider: React.FC = () => {
  const data = useStaticQuery(query);

  const settings = {
    buttons: false,
    bullets: false,
    organicArrows: false,
    animation: "foldOutAnimation",
    play: true,
    cancelOnInteraction: false,
    interval: 6000,
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <SliderContainer data={data.file.childImageSharp.fluid.src}>
      <AutoplaySlider className={"slider"} {...settings}>
        <div>Energooszczędne domy na sprzedaż</div>
        <div>Wyższy stan niezależności</div>
        <div>Dowód życiowego sukcesu</div>
      </AutoplaySlider>
    </SliderContainer>
  );
};

export default TextSlider;
