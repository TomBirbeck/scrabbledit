import { fireEvent, render, screen } from "@testing-library/react";
import Instructions from ".";

describe('tests for instructions', () => {
    test('correct heading shows', ()=> {
        render(<Instructions/>)
        const instruction = screen.getByText('Instructions for use');
        expect(instruction).toBeInTheDocument()
    })
    test('instructiosn display on hover', () => {
        render(<Instructions/>)
        const title = screen.getByText('Instructions for use');
        fireEvent.mouseEnter(title)
        const instructions = screen.getByTestId('instructionsModal')
        expect(instructions).toBeInTheDocument()
    })
})
