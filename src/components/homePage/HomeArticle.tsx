import React, { useState } from "react";
import styled from "styled-components";

interface IHomeArticleWrapperProps {
  isOpen: boolean;
}

const HomeArticleWrapper = styled.article<IHomeArticleWrapperProps>`
  position: relative;
  height: ${props => (props.isOpen ? "70vh" : "45vh")};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.xs};
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    height: ${props => (props.isOpen ? "65vh" : "60vh")};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    height: 52vh;
    margin-bottom: 80px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 80vh;
    padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  }
`;

interface ITextWrapperProps {
  isOpen: boolean;
}

const TextWrapper = styled.div<ITextWrapperProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 80%;
  height: ${props => (props.isOpen ? "80%" : "40%")};
  padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    height: ${props => (props.isOpen ? "60%" : "40%")};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    height: ${props => (props.isOpen ? "60%" : "40%")};
    padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.xl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: ${props => (props.isOpen ? "90%" : "50%")};
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
    font-size: 2rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 3rem;
  }
`;

const ArticleText = styled.p<ITextWrapperProps>`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.greeyP};
  line-height: 2rem;
  height: 80%;
  overflow: ${props => (props.isOpen ? "visible" : "hidden")};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 2.2rem;
    line-height: 3.4rem;
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

  return (
    <HomeArticleWrapper isOpen={isOpen}>
      <img src={image} alt="house" />
      <TextWrapper isOpen={isOpen}>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText isOpen={isOpen}>{text}</ArticleText>
        <ArticleBtn onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Mniej >" : "Więcej >"}
        </ArticleBtn>
      </TextWrapper>
    </HomeArticleWrapper>
  );
};

export default HomeArticle;
