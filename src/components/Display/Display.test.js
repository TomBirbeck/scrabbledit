import { fireEvent, render, screen } from '@testing-library/react';
import Display from '.';

describe('all buttons appear', () => {
    test('double word button renders correctly', () => {
        render(<Display/>);
        const double = screen.getByRole('button', {name: "Double Word"});
        expect(double).toBeInTheDocument();
    })
    test('triple word button renders correctly', () => {
        render(<Display/>);
        const triple = screen.getByRole('button', {name: "Triple Word"});
        expect(triple).toBeInTheDocument();
    })
    test('double X2 and triple X2 word buttons render correctly', () => {
        render(<Display/>);
        const x2 = screen.getAllByRole('button', {name: "X2"});
        expect(x2.length).toBe(2);
    })
    test('triple X3 word button renders correctly', () => {
        render(<Display/>);
        const x3 = screen.getByRole('button', {name: "X3"});
        expect(x3).toBeInTheDocument();
    })
    test('all tiles button renders correctly', () => {
        render(<Display/>);
        const allTiles = screen.getByRole('button', {name: 'All Tiles Used'});
        expect(allTiles).toBeInTheDocument();
    })
    test('check word button renders correctly', () => {
        render(<Display/>);
        const checkWord = screen.getByRole('button', {name: 'Check'});
        expect(checkWord).toBeInTheDocument();
    })
    test('submit word button renders correctly', () => {
        render(<Display/>);
        const submitWord = screen.getByRole('button', {name: 'Submit'});
        expect(submitWord).toBeInTheDocument();
    })
    test('clear word button renders correctly', () => {
        render(<Display/>);
        const clearWord = screen.getByRole('button', {name: 'Clear'});
        expect(clearWord).toBeInTheDocument();
    })
    test('renders correct amount of letter buttons', ()=> {
        render(<Display/>);
        const buttonArr = screen.getAllByTestId('letterButtons');
        expect(buttonArr.length).toBe(27);
    })
})

describe('display text elements', () => {
    test('word score element displays correctly', () => {
        render(<Display/>);
        const Score = screen.getByText(/word score/gi);
        expect(Score).toBeInTheDocument();
    })
    test('when double word mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByRole('button', {name: "Double Word"});
        fireEvent.click(button)
        const text = screen.getByText('Double Word Score Active')
        expect(text).toBeInTheDocument()
    })
    test('when double  x2 word mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByTestId('doublex2');
        fireEvent.click(button)
        const text = screen.getByText('Double Double Word Score Active')
        expect(text).toBeInTheDocument()
    })
    test('when triple word mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByRole('button', {name: "Triple Word"});
        fireEvent.click(button)
        const text = screen.getByText('Triple Word Score Active')
        expect(text).toBeInTheDocument()
    })
    test('when triple x2 word mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByTestId('triplex2');
        fireEvent.click(button)
        const text = screen.getByText('Double Triple Word Score Active')
        expect(text).toBeInTheDocument()
    })
    test('when triple x3 word mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByRole('button', {name: "X3"});
        fireEvent.click(button)
        const text = screen.getByText('Triple Triple Word Score Active')
        expect(text).toBeInTheDocument()
    })
    test('when all tiles mode is active, confirmation text displays', () => {
        render(<Display/>);
        const button = screen.getByRole('button', {name: "All Tiles Used"});
        fireEvent.click(button)
        const text = screen.getByText('All Tiles Used Mode Active')
        expect(text).toBeInTheDocument()
    })
})
