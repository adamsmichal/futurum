import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.article`
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-template-areas: "image text";

    & :nth-child(2n) {
      grid-template-areas: "text image";
    }
  }
`;

const ArticleImage = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 50vw;
    grid-area: image;
  }
`;

const TextWrapper = styled.div`
  padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.xxl};
    grid-area: text;
  }
`;

const ArticleTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.greeyH};
  font-size: 2.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    margin-bottom: ${({ theme }) => theme.space.l};
    font-size: 3.8rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    font-size: 4rem;
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
  }
`;

interface IGeneralArticleProps {
  image: string;
  text: string;
  title: string;
  path?: string;
}

const GeneralArticle: React.FC<IGeneralArticleProps> = ({
  image,
  text,
  title,
}) => {
  return (
    <ArticleWrapper>
      <ArticleImage className="image" src={image} alt="map" />
      <TextWrapper className="text">
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText>{text}</ArticleText>
      </TextWrapper>
    </ArticleWrapper>
  );
};

export default GeneralArticle;
