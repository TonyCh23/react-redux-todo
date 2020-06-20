import React from 'react';
import { render } from '@testing-library/react';
import {App} from './App';

test(`renders Todo's`, () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todo's/i);
  expect(linkElement).toBeInTheDocument();
});
