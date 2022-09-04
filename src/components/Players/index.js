import { useState } from 'react';
import './players.css';

export default function Players({ score, setScore, turn, setTurn, player1, setPlayer1, player2, setPlayer2, player3, setPlayer3, player4, setPlayer4, finalScoreMode, setFinalScoreMode, finalTiles, finalScore, setFinalScore }) {
  const [player, setPlayer] = useState('');
//   const [player1, setPlayer1] = useState({ id: 1, name: 'player 1', score: 0 });
//   const [player2, setPlayer2] = useState({ id: 2, name: 'player 2', score: 0 });
//   const [player3, setPlayer3] = useState({ id: 3, name: 'player 3', score: 0 });
//   const [player4, setPlayer4] = useState({ id: 4, name: 'player 4', score: 0 });
  // const [turn, setTurn] = useState({});
  const [winner, setWinner] = useState('');

  function handlePlayer(e) {
    e.preventDefault();
    let name = e.target.value;
    setPlayer(name);
  }

  function handleSubmitPlayer1(object) {
    if (object.length > 0){
    const playerstuff = { ...player1, name: object };
    setPlayer1(playerstuff);
    setPlayer('');
    } else {
        setPlayer1({...player1, name: player1.name})
    }
  }
  function handleSubmitPlayer2(object) {
    if (object.length > 0){
    const playerstuff = { ...player2, name: object };
    setPlayer2(playerstuff);
    setPlayer('');
    } else {
        setPlayer2({...player2, name: player2.name})
    }
  }
  function handleSubmitPlayer3(object) {
    if (object.length > 0){
    const playerstuff = { ...player3, name: object };
    setPlayer3(playerstuff);
    setPlayer('');
    } else {
        setPlayer3({...player3, name: player4.name})
    }
  }
  function handleSubmitPlayer4(object) {
    if (object.length > 0){
    const playerstuff = { ...player4, name: object };
    setPlayer4(playerstuff);
    setPlayer('');
    } else {
        setPlayer4({...player4, name: player4.name})
    }
  }
  // console.log("players", players)

  // function handleSubmitPlayer(object){
  // const playerstuff = players;
  //  if (object) {playerstuff.push({name: object, score: 0})};
  //   setPlayers(playerstuff);
  //   setPlayer("");
  // }

  function playerTurn(player) {
    setTurn(player);
    // isolate(turn, score);
  }

  // function handleWinner(a, b, c, d) {
  //   // console.log(a, b, c, d);
  //   const players = [a, b, c, d];
  //   // console.log('win players', players);
  //   const winner = players.sort((a, b) => {
  //     return b.score - a.score;
  //   })[0];
  //   // console.log('winner', winner);
  //   finalScores(a, b, c, d, finalTiles)
  //   setWinner(winner.name);
  // }

  function handleWinner(a, b, c, d, finalTiles) {
    const finalA = a.score - finalTiles[0];
    const finalB = b.score - finalTiles[1];
    const finalC = c.score - finalTiles[2];
    const finalD = d.score - finalTiles[3];
    const players = [{name: a.name, score: finalA}, {name: b.name, score: finalB}, {name: c.name, score: finalC}, {name: d.name, score: finalD}];
    const winner = players.sort((a, b) => {
      return b.score - a.score;
    })[0];
    setWinner(winner.name)

    console.log("final scores", finalA, finalB, finalC, finalD);
    console.log("winner", winner);
}

  return (
    <section id='player-section'>
      <div>
        {winner.length > 0 ? (
          <h2 id='winner-text'>{winner} is the winnner. Congratulations!</h2>
        ) : null}
      </div>
      <div>
        {turn.name ? (
          <h2 id='turn-text'> It's {turn.name}'s turn to play</h2>
        ) : null}
      </div>
      <input
        id='player-input-box'
        type='text'
        onChange={(e) => {
          handlePlayer(e);
        }}
        value={player}
        placeholder='Insert player name'
      ></input>
      <button
        className='player-submit'
        onClick={() => {
          handleSubmitPlayer1(player);
        }}
      >
        Player 1
      </button>
      <button
        className='player-submit'
        onClick={() => {
          handleSubmitPlayer2(player);
        }}
      >
        Player 2
      </button>
      <button
        className='player-submit'
        onClick={() => {
          handleSubmitPlayer3(player);
        }}
      >
        Player 3
      </button>
      <button
        className='player-submit'
        onClick={() => {
          handleSubmitPlayer4(player);
        }}
      >
        Player 4
      </button>
      <table>
        <thead>
          <tr>
            <td>Player</td>
            <td>Score</td>
            <td>Spare Tiles</td>
          </tr>
        </thead>
        <tbody>
          <tr key={player1.name}>
            <td>
              <button
                id='player-button'
                onClick={() => {
                  playerTurn(player1);
                }}
              >
                {player1.name}
              </button>
            </td>
            <td>{player1.score}</td>
            <td>{finalTiles[0]}</td>
          </tr>
          <tr key={player2.name}>
            <td>
              <button
                id='player-button'
                onClick={() => {
                  playerTurn(player2);
                }}
              >
                {player2.name}
              </button>
            </td>
            <td>{player2.score}</td>
            <td>{finalTiles[1]}</td>
          </tr>
          <tr key={player3.name}>
            <td>
              <button
                id='player-button'
                onClick={() => {
                  playerTurn(player3);
                }}
              >
                {player3.name}
              </button>
            </td>
            <td>{player3.score}</td>
            <td>{finalTiles[2]}</td>
          </tr>
          <tr key={player4.name}>
            <td>
              <button
                id='player-button'
                onClick={() => {
                  playerTurn(player4);
                }}
              >
                {player4.name}
              </button>
            </td>
            <td>{player4.score}</td>
            <td>{finalTiles[3]}</td>
          </tr>
        </tbody>
        {/* <tbody>
        {players.map((val) => {
            return (<tr key = {players.length++}>
                        <td><button id="player-button" onClick = {() => {playerTurn(val)}}>{val.name}</button></td>
                        <td>{val.score}</td>
                        </tr>
        )})}
                </tbody> */}
      </table>
      <button className='final-score-button' onClick={() => {setFinalScoreMode(!finalScoreMode)}}>Final Score Mode</button>
      <button
        className='winner-button'
        onClick={() => handleWinner(player1, player2, player3, player4, finalTiles)}
      >
        Winner
      </button>
    </section>
  );
}
