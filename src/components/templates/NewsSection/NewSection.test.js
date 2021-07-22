import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from '../../../helpers/renderWithProviders';

const mock = new MockAdapter(axios);

const query = `{
                  allArticles {
                    id
                    title
                    category
                    content
                    image{
                      url
                    }
                  }
                }`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });
  it('It displays error when the article are not loader correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByAltText(/Sorry/);
  });
});
