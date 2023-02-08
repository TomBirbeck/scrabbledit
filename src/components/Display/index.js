import ScrabbleButton from '../Buttons';
import { WordContext } from '../Context';
import { useEffect, useState } from 'react';
import { calculateScrabbleScore } from '../ScoreCalc';
import './/display.css';
import Players from '../Players';
import { v4 as uuidv4 } from 'uuid';
import ScoreModeCalc from '../ScoreModeCalc';

export default function Display() {
  const [displayWord, SetDisplayWord] = useState([]);
  const [doubleLetters, setDoubleLetters] = useState([]);
  const [tripleLetters, setTripleLetters] = useState([]);
  const [allTiles, setAllTiles] = useState(false);
  const [finalScoreMode, setFinalScoreMode] = useState(false);
  const [score, SetScore] = useState(0);
  const [passScore, setPassScore] = useState(0);
  const [turn, setTurn] = useState({});
  const [player1, setPlayer1] = useState({ id: 1, name: 'player 1', score: 0 });
  const [player2, setPlayer2] = useState({ id: 2, name: 'player 2', score: 0 });
  const [player3, setPlayer3] = useState({ id: 3, name: 'player 3', score: 0 });
  const [player4, setPlayer4] = useState({ id: 4, name: 'player 4', score: 0 });
  const [finalTiles, setFinalTiles] = useState([]);
  const [wordMode, setWordMode] = useState('normal')

  function handleWordCheck(displayWord) {
    let extra = 0
    let score = calculateScrabbleScore(displayWord, doubleLetters, tripleLetters)
    let modeScore = ScoreModeCalc(score, wordMode)
    allTiles ? extra = 50: extra = 0;
    SetScore(modeScore + extra);
  }

  function handleWordSubmit(displayWord) {
    if (finalScoreMode === false) {
      let extra = 0;
      let score = calculateScrabbleScore(displayWord, doubleLetters, tripleLetters)
      let modeScore = ScoreModeCalc(score, wordMode)
      allTiles ? extra = 50: extra = 0;
      SetScore(modeScore + extra);
      setPassScore(modeScore + extra);
    }
    if (finalScoreMode === true) {
      let scores = finalTiles;
      scores.push((calculateScrabbleScore(displayWord, doubleLetters, tripleLetters)))
      setFinalTiles(scores)
    }
      SetDisplayWord([]);
    setDoubleLetters([]);
    setTripleLetters([]);
    SetScore(0);
    setWordMode('normal')
    setAllTiles(false);
  }

  function deleteLetter(index) {
    SetDisplayWord((word) => word.filter((_, i) => i !== index));
  }

  function handleDoubleWordClick() {
    if (wordMode !== 'double'){
      setWordMode('double')
    } else {
      setWordMode('normal')
    }
  }
  function handleDoubleDoubleWordClick() {
    if (wordMode !== 'doubleDouble'){
      setWordMode('doubleDouble')
    } else {
      setWordMode('normal')
    }
  }
  function handleTripleWordClick() {
    if (wordMode !== 'triple'){
      setWordMode('triple')
    } else {
      setWordMode('normal')
    }
  }
  function handleDoubleTripleWordClick() {
    if (wordMode !== 'doubleTriple'){
      setWordMode('doubleTriple')
    } else {
      setWordMode('normal')
    }
  }
  function handleTripleTripleWordClick() {
    if (wordMode !== 'tripleTriple'){
      setWordMode('tripleTriple')
    } else {
      setWordMode('normal')
    }
  }

  function handleChangeDouble(e) {
    let doubles = [];
    e.target.checked === true && e.target.name === 'double'
      ? doubles.push(e.target.value)
      : (doubles = []);
    setDoubleLetters(doubles);
  }
  function handleChangeTriple(e) {
    let triples = [];
    e.target.checked === true && e.target.name === 'triple'
      ? triples.push(e.target.value)
      : (triples = []);
    setTripleLetters(triples);
  }

  function handleClear() {
    SetDisplayWord([]);
    setDoubleLetters([]);
    setTripleLetters([]);
    SetScore(0);
    setPassScore(0);
    setWordMode('normal')
    setAllTiles(false);
  }

  useEffect(()=> {
  function isolate(player, score) {
    const newScore = player.score + score;
    let object = { ...player, score: newScore };
    if (player.id === 1) {
      setPlayer1(object);
    }
    if (player.id === 2) {
      setPlayer2(object);
    }
    if (player.id === 3) {
      setPlayer3(object);
    }
    if (player.id === 4) {
      setPlayer4(object);
    }
}
  isolate(turn, passScore)
  setTurn({})
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [passScore])

  return (
    <WordContext.Provider value={{ displayWord, SetDisplayWord }}>
      <div id='display'>
        <div id='letter-layout'>
          {displayWord.map((i, index) => {
            return (
              <div id='letter-button-layout' key={i + index}>
                <div id='display-button' key={uuidv4()}>
                  <span id='letters' key={uuidv4()}>
                     {i}
                  </span>
                </div>
                <div className='checkbox-container'>
                  <button
                    className='remove-button'
                    onClick={() => {
                      deleteLetter(index);
                    }}
                  >
                    Remove
                  </button>
                  <label htmlFor='double' className='checkboxes'>
                    <input
                      type='checkbox'
                      name='double'
                      value={i}
                      onClick={(e) => {
                        handleChangeDouble(e);
                      }}
                      style={{ accentColor: 'var(--blue1)' }}
                    ></input>
                    Double
                  </label>
                  <label htmlFor='triple' className='checkboxes'>
                    <input
                      type='checkbox'
                      name='triple'
                      value={i}
                      onChange={(e) => {
                        handleChangeTriple(e);
                      }}
                      style={{ accentColor: 'var(--blue2)' }}
                    ></input>
                    Triple
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <div className='score-mode'>
          {finalScoreMode ? <h2>Final Score Mode</h2> : null}
          {wordMode === 'double' ? <h3>Double Word Score Active</h3> :
          wordMode === 'doubleDouble' ? <h3>Double Double Word Score Active</h3> :
          wordMode === 'triple' ? <h3>Triple Word Score Active</h3> : 
          wordMode === 'doubleTriple' ? <h3>Double Triple Word Score Active</h3> :
          wordMode === 'tripleTriple' ? <h3>Triple Triple Word Score Active</h3> : null}
          {allTiles ? <h3>All Tiles Used Mode Active</h3>: null}
        </div>
        <div>
          <button
            className='double-word-button'
            onClick={handleDoubleWordClick}
          >
            Double Word
          </button>
          <button className='double-word-extra' onClick={handleDoubleDoubleWordClick} data-testid='doublex2' >X2</button>
          <button
            className='triple-word-button'
            onClick={handleTripleWordClick}
          >
            Triple Word
          </button>
          <button className='triple-word-extra' onClick={handleDoubleTripleWordClick} data-testid='triplex2' >X2</button>
          <button className='triple-word-extra' onClick={handleTripleTripleWordClick}>X3</button>
          <button
            className='all-tiles-button'
            onClick={() => {
              setAllTiles(!allTiles);
            }}
          >
            All Tiles Used
          </button>
          <button
            className='check-button'
            onClick={() => {
              handleWordCheck(displayWord);
            }}
          >
            Check
          </button>
          <button
            className='submit-button'
            onClick={() => {
              handleWordSubmit(displayWord);
            }}
          >
            Submit
          </button>
          <button
            className='clear-button'
            onClick={() => {
              handleClear();
            }}
          >
            Clear
          </button>
        </div>
        <h3 id='word-score'> Word score: {score} </h3>
        <ScrabbleButton />
        <Players
          turn={turn}
          setTurn={setTurn}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          player3={player3}
          setPlayer3={setPlayer3}
          player4={player4}
          setPlayer4={setPlayer4}
          finalScoreMode = {finalScoreMode}
          setFinalScoreMode = {setFinalScoreMode}
          finalTiles = {finalTiles}
          data-testid='scoreBoard'
        />
      </div>
    </WordContext.Provider>
  );
}
