import React from 'react';
import {
  Wrapper,
  ArticleWrapper,
  NewsSectionHeader,
  TitleWrapper,
} from './NewsSection.elements';

import { Button } from '../../atoms/Button/Button';

const NewsSection = (props) => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed sections</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>dolor sir amet</p>
        <Button isBig>click me</Button>
      </ArticleWrapper>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>dolor sir amet</p>
        <Button isBig>click me</Button>
      </ArticleWrapper>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>dolor sir amet</p>
        <Button isBig>click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
