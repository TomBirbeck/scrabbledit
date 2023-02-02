import { render, screen } from '@testing-library/react';
import ScrabbleButton from '.';

test('renders buttons correctly', () => {
  render(<ScrabbleButton />);
  const button = screen.getByText(/A/);
  expect(button).toBeInTheDocument();
});

test('renders correct amount of buttons', ()=> {
    render(<ScrabbleButton/>);
    const buttonArr = screen.getAllByTestId('letterButtons')
    expect(buttonArr.length).toBe(27)
})