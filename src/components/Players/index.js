import { useState } from 'react';
import './players.css';

export default function Players({
  score,
  setScore,
  turn,
  setTurn,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
  player3,
  setPlayer3,
  player4,
  setPlayer4,
  finalScoreMode,
  setFinalScoreMode,
  finalTiles,
  finalScore,
  setFinalScore,
}) {
  const [player, setPlayer] = useState('');
  //   const [player1, setPlayer1] = useState({ id: 1, name: 'player 1', score: 0 });
  //   const [player2, setPlayer2] = useState({ id: 2, name: 'player 2', score: 0 });
  //   const [player3, setPlayer3] = useState({ id: 3, name: 'player 3', score: 0 });
  //   const [player4, setPlayer4] = useState({ id: 4, name: 'player 4', score: 0 });
  // const [turn, setTurn] = useState({});
  const [winner, setWinner] = useState('');
  const [finalA, setFinalA] = useState(0);
  const [finalB, setFinalB] = useState(0);
  const [finalC, setFinalC] = useState(0);
  const [finalD, setFinalD] = useState(0);

  function handlePlayer(e) {
    e.preventDefault();
    let name = e.target.value;
    setPlayer(name);
  }

  function handleSubmitPlayer1(object) {
    if (object.length > 0) {
      const playerstuff = { ...player1, name: object };
      setPlayer1(playerstuff);
      setPlayer('');
    } else {
      setPlayer1({ ...player1, name: player1.name });
    }
  }
  function handleSubmitPlayer2(object) {
    if (object.length > 0) {
      const playerstuff = { ...player2, name: object };
      setPlayer2(playerstuff);
      setPlayer('');
    } else {
      setPlayer2({ ...player2, name: player2.name });
    }
  }
  function handleSubmitPlayer3(object) {
    if (object.length > 0) {
      const playerstuff = { ...player3, name: object };
      setPlayer3(playerstuff);
      setPlayer('');
    } else {
      setPlayer3({ ...player3, name: player4.name });
    }
  }
  function handleSubmitPlayer4(object) {
    if (object.length > 0) {
      const playerstuff = { ...player4, name: object };
      setPlayer4(playerstuff);
      setPlayer('');
    } else {
      setPlayer4({ ...player4, name: player4.name });
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
    const extra = finalTiles.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log('extra', extra);
    let finalA = 0;
    let finalB = 0;
    let finalC = 0;
    let finalD = 0;
    if (finalTiles[0] === 0) {
      finalA = a.score - finalTiles[0] + extra;
    }
    setFinalA(finalA);
    if (finalTiles[0] !== 0 && finalTiles[0]) {
      finalA = a.score - finalTiles[0];
      if (!Number.isNaN(finalA)) {
        setFinalA(finalA);
      }
      if (Number.isNaN(finalA)) {
        setFinalA(0);
      }
    }
    if (finalTiles[1] === 0) {
      finalB = b.score - finalTiles[1] + extra;
    }
    setFinalB(finalB);
    if (finalTiles[1] !== 0 && finalTiles[1]) {
      finalB = b.score - finalTiles[1];
      if (!Number.isNaN(finalB)) {
        setFinalB(finalB);
      }
      if (Number.isNaN(finalB)) {
        setFinalB(0);
      }
    }
    if (finalTiles[2] === 0) {
      finalC = c.score - finalTiles[2] + extra;
    }
    setFinalC(finalC);
    if (finalTiles[2] !== 0 && finalTiles[2]) {
      finalC = c.score - finalTiles[2];
      if (!Number.isNaN(finalC)) {
        setFinalC(finalC);
      }
      if (Number.isNaN(finalC)) {
        setFinalC(0);
      }
    }
    if (finalTiles[3] === 0) {
      finalD = d.score - finalTiles[3] + extra;
    }
    setFinalD(finalD);
    if (finalTiles[3] !== 0) {
      finalD = d.score - finalTiles[3];
      if (!Number.isNaN(finalD)) {
        setFinalD(finalD);
      }
      if (Number.isNaN(finalD)) {
        setFinalD(0);
      }
    }
    // const finalB = b.score - finalTiles[1];
    // const finalC = c.score - finalTiles[2];
    // const finalD = d.score - finalTiles[3];
    const players = [
      { name: a.name, score: finalA },
      { name: b.name, score: finalB },
      { name: c.name, score: finalC },
      { name: d.name, score: finalD },
    ];
    const winner = players.sort((a, b) => {
      return b.score - a.score;
    })[0];
    setWinner(winner.name);
    // setFinalA(players[0].score);
    // setFinalB(players[1].score);
    // setFinalC(players[2].score);
    // setFinalD(players[3].score);

    console.log('final scores', finalA, finalB, finalC, finalD);
    console.log('winner', winner);
  }

  return (
    <section id='player-section'>
      <div>
        {winner.length > 0 ? (
          <h2 id='winner-text'>{winner} is the winnner. Congratulations!</h2>
        ) : null}
      </div>
      <div style={{ margin: '0' }}>
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
      <section id='table-container'>
        <table>
          <thead>
            <tr>
              <td>Player</td>
              <td>Score</td>
              <td>Spare Tiles</td>
              <td>Final Score</td>
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
              <td>{finalA}</td>
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
              <td>{finalB}</td>
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
              <td>{finalC}</td>
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
              <td>{finalD}</td>
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
      </section>
      <button
        className='final-score-button'
        onClick={() => {
          setFinalScoreMode(!finalScoreMode);
        }}
      >
        Final Score Mode
      </button>
      <button
        className='winner-button'
        onClick={() =>
          handleWinner(player1, player2, player3, player4, finalTiles)
        }
      >
        Winner
      </button>
    </section>
  );
}
