import { render, screen } from '@testing-library/react';
import Display from '.';

describe('all buttons appear', () => {
    test('double word button renders correctly', () => {
        render(<Display/>);
        const double = screen.getByRole('button', {name: "Double Word"});
        expect(double).toBeInTheDocument()
    })
    test('triple word button renders correctly', () => {
        render(<Display/>);
        const triple = screen.getByRole('button', {name: "Triple Word"});
        expect(triple).toBeInTheDocument()
    })
    test('double X2 and triple X2 word buttons render correctly', () => {
        render(<Display/>);
        const x2 = screen.getAllByRole('button', {name: "X2"});
        expect(x2.length).toBe(2)
    })
    test('triple X3 word button renders correctly', () => {
        render(<Display/>);
        const x3 = screen.getByRole('button', {name: "X3"})
        expect(x3).toBeInTheDocument()
    })
})