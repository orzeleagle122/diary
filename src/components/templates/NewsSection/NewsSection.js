import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  ArticleWrapper,
  NewsSectionHeader,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.elements';
import axios from 'axios';
import { Button } from '../../atoms/Button/Button';

const NewsSection = (props) => {
  const [artcles, setArticles] = useState([]);
  const [error, setError] = useState('');

  const REACT_APP_DATOCMS_TOKEN = 'fdf0478b1aa7ceb9fc0572726967e1';

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
                  allArticles {
                    id
                    title
                    category
                    content
                    image{
                      url
                    }
                  }
                }`,
        },
        {
          headers: {
            authorization: `Bearer ${REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { allArticles },
          },
        }) => {
          setArticles(allArticles);
        }
      )
      .catch(() => {
        setError('Sorry, we couldnt load articles for you');
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed sections</NewsSectionHeader>
      {artcles.length > 0 ? (
        artcles.map(({ id, title, content, image: { url }, category }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              <img src={url} alt={title} />
            </ContentWrapper>
            <Button isBig>Read more...</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
