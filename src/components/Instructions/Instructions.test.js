import { render, screen } from "@testing-library/react";
import Instructions from ".";

describe('tests for instructions header and click text', () => {
    test('correct heading shows', ()=> {
        render(<Instructions/>)
        const instruction = screen.getByText('Instructions for use');
        expect(instruction).toBeInTheDocument()
    })
    test('lick to open shows', ()=> {
        render(<Instructions/>)
        const clickText = screen.getByText(/(Click to open)/);
        expect(clickText).toBeInTheDocument()
    })
})
