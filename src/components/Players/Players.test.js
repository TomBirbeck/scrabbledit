import {render, screen} from '@testing-library/react'
import Players from '.'

describe('player scoreboard tests', () => {
    test('player name input renders', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const input = screen.getByPlaceholderText('Insert player name');
        expect(input).toBeInTheDocument()
    })
    test('player name input buttons render', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const button1 = screen.getByText(/Player 1/);
        expect(button1).toBeInTheDocument()
        const button2 = screen.getByText(/Player 2/);
        expect(button2).toBeInTheDocument()
        const button3 = screen.getByText(/Player 3/);
        expect(button3).toBeInTheDocument()
        const button4 = screen.getByText(/Player 4/);
        expect(button4).toBeInTheDocument()
    })
})