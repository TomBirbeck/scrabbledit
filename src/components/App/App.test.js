import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/scrabbledit/i);
  expect(title).toBeInTheDocument();
});
