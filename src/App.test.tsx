import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI garden title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hanz Valdez UI Garden/i);
  expect(titleElement).toBeInTheDocument();
});
