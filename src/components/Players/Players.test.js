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

    test('table headers render', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const playerHeader = screen.getByText('Player');
        expect(playerHeader).toBeInTheDocument();
        const playerScore = screen.getByText('Score');
        expect(playerScore).toBeInTheDocument();
        const playerSpares = screen.getByText('Spare Tiles');
        expect(playerSpares).toBeInTheDocument();
        const playerFinal = screen.getByText('Final Score');
        expect(playerFinal).toBeInTheDocument();
    })
    test('player buttons', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const player1Button = screen.getByRole('button', {name: 'John'});
        expect(player1Button).toBeInTheDocument()
        const player2Button = screen.getByRole('button', {name: 'Simone'});
        expect(player2Button).toBeInTheDocument()
        const player3Button = screen.getByRole('button', {name: 'Claire'});
        expect(player3Button).toBeInTheDocument()
        const player4Button = screen.getByRole('button', {name: 'Greg'});
        expect(player4Button).toBeInTheDocument()
    })

    test('final score mode button renders', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const finalScoreModeButton = screen.getByRole('button', {name: 'Final Score Mode'});
        expect(finalScoreModeButton).toBeInTheDocument()
    })

    test('winner button renders', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 0},
            player2: {name: 'Simone', score: 0},
            player3: {name: 'Claire', score: 0},
            player4: {name: 'Greg', score: 0},
            finalTiles: [0,0,0,0]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const winnerButton = screen.getByRole('button', {name: 'Winner'});
        expect(winnerButton).toBeInTheDocument()
    })

    test('player scores render correctly', () => {
        const props = {
            turn: 'Dave',
            player1: {name: 'John', score: 1},
            player2: {name: 'Simone', score: 2},
            player3: {name: 'Claire', score: 3},
            player4: {name: 'Greg', score: 4},
            finalTiles: [5,6,7,8]
        }
        render(<Players turn={props.turn} player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} finalTiles={props.finalTiles}/>);
        const player1Score = screen.getByText(props.player1.score);
        expect(player1Score).toBeInTheDocument()
        expect(Number(player1Score.textContent)).toBe(1)
        const player2Score = screen.getByText(props.player2.score);
        expect(player2Score).toBeInTheDocument()
        expect(Number(player2Score.textContent)).toBe(2)
        const player3Score = screen.getByText(props.player3.score);
        expect(player3Score).toBeInTheDocument()
        expect(Number(player3Score.textContent)).toBe(3)
        const player4Score = screen.getByText(props.player4.score);
        expect(player4Score).toBeInTheDocument()
        expect(Number(player4Score.textContent)).toBe(4)

    })
})