import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

interface IHomeArticleWrapperProps {
  isOpen: boolean;
}

const HomeArticleWrapper = styled.article<IHomeArticleWrapperProps>`
  position: relative;
  height: 50vh;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.xs};
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.space.m} 0;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    height: 60vh;
    margin: ${({ theme }) => theme.space.l} 0;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    height: 52vh;
    margin-bottom: ${({ theme }) => theme.space.xxl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 70vh;
    padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  }
`;

interface ITextWrapperProps {
  isOpen: boolean;
}

const TextWrapper = styled(animated.div)<ITextWrapperProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 80%;
  padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.xl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.xxl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    bottom: 0;
  }
`;

const ArticleTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.greeyH};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 3rem;
  }
`;

const ArticleText = styled(animated.p)<ITextWrapperProps>`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.greeyP};
  line-height: 2rem;
  height: 80%;
  overflow: hidden;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    line-height: 3.4rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 2.8rem;
    line-height: 4rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const ArticleBtn = styled.button`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.greeyP};
  float: right;
  background: none;
  border: none;
  outline: none;

  & :hover {
    color: ${({ theme }) => theme.colors.greeyFooter};
    cursor: pointer;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 2.2rem;
  }
`;

interface IHomeArticleProps {
  image: string;
  text: string;
  title: string;
}

const HomeArticle: React.FC<IHomeArticleProps> = ({ image, text, title }) => {
  const [isOpen, setOpen] = useState(false);

  const textWrapperAnimation = useSpring({
    height: isOpen ? "90%" : "40%",
  });

  const textAnimation = useSpring({
    overflow: isOpen ? "visible" : "hidden",
    delay: 100,
  });

  return (
    <HomeArticleWrapper isOpen={isOpen}>
      <img src={image} alt="house" />
      <TextWrapper style={textWrapperAnimation} isOpen={isOpen}>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText style={textAnimation} isOpen={isOpen}>
          {text}
        </ArticleText>
        <ArticleBtn onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Mniej >" : "Więcej >"}
        </ArticleBtn>
      </TextWrapper>
    </HomeArticleWrapper>
  );
};

export default HomeArticle;
