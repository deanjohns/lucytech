import React from 'react';
import { render } from '@testing-library/react';
import ArticlesList from './ArticlesList';

test('renders the ArticlesList', () => {
  const { getByText } = render(<ArticlesList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
