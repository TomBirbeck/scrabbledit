import { render, screen } from '@testing-library/react';
import App from '.';

describe('app home screen checks', () => {
  test('renders learn react link', () => {
    render(<App />);
    const title = screen.getByText(/scrabbledit/i);
    expect(title).toBeInTheDocument();
  });

  test('renders motto', () => {
    render(<App/>);
    const motto = screen.getByText("We can't trust Barry with the scores again");
    expect(motto).toBeInTheDocument()
  })

})
