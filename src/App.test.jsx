import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Where in the world?/i);
  const filter = screen.getByText(/Filter by Region?/i);
  expect(title).toBeInTheDocument();
  expect(filter).toBeInTheDocument();
});
