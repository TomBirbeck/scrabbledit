import ScrabbleButton from '../Buttons';
import { WordContext } from '../Context';
import { useState } from 'react';
import { calculateScrabbleScore } from '../ScoreCalc';
import './/display.css';
import Players from '../Players';
import { v4 as uuidv4 } from 'uuid';

export default function Display() {
  const [displayWord, SetDisplayWord] = useState([]);
  const [doubleLetters, setDoubleLetters] = useState([]);
  const [tripleLetters, setTripleLetters] = useState([]);
  const [tripleScore, setTripleScore] = useState(false);
  const [doubleScore, setDoubleScore] = useState(false);
  // const [isChecked, setIsChecked] = useState(false)
  // const refDouble = useRef()
  // const refTriple = useRef()
  // const [mode, setMode] = useState(1)
  const [score, SetScore] = useState(0);
  const [passScore, setPassScore] = useState(0);
  const [turn, setTurn] = useState({});

  function handleWordCheck(displayWord) {
    let mode = 1;
    doubleScore ? (mode = 2) : tripleScore ? (mode = 3) : (mode = 1);
    SetScore(
      calculateScrabbleScore(displayWord, doubleLetters, tripleLetters) * mode
    );
  }

  function handleWordSubmit(displayWord) {
    let mode = 1;
    doubleScore ? (mode = 2) : tripleScore ? (mode = 3) : (mode = 1);
    SetScore(
      calculateScrabbleScore(displayWord, doubleLetters, tripleLetters) * mode
    );
    setPassScore(
      calculateScrabbleScore(displayWord, doubleLetters, tripleLetters) * mode
    );
    SetDisplayWord([]);
    setDoubleLetters([]);
    setTripleLetters([]);
    SetScore(0);
    // setPassScore(0)
    setDoubleScore(false);
    setTripleScore(false);
  }

  function deleteLetter(index) {
    SetDisplayWord((word) => word.filter((_, i) => i !== index));
  }

  function handleDoubleWordClick() {
    setDoubleScore(!doubleScore);
    setTripleScore(false);
    // doubleScore ? setMode(2) : setMode(1)
  }

  function handleTripleWordClick() {
    setTripleScore(!tripleScore);
    setDoubleScore(false);
    // tripleScore ? setMode(3) : setMode(1)
  }

  function handleChangeDouble(e) {
    let doubles = [];
    // setIsChecked(e.target.checked);
    e.target.checked === true && e.target.name === 'double'
      ? doubles.push(e.target.value)
      : (doubles = []);
    setDoubleLetters(doubles);
  }
  function handleChangeTriple(e) {
    let triples = [];
    // setIsChecked(e.target.checked);
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
    setDoubleScore(false);
    setTripleScore(false);
  }

  //   console.log("word", displayWord)

  // useEffect(() => {
  //     console.log(passScore)

  // }, [passScore])

  return (
    <WordContext.Provider value={{ displayWord, SetDisplayWord }}>
      <div id='display'>
        <div id='letter-layout'>
          {displayWord.map((i, index) => {
            return (
              <div id='letter-button-layout' key={i}>
                <div id='display-button' key={uuidv4()}>
                  <span key={i} style={{ fontSize: '3.2em' }}>
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
          {tripleScore ? <h3>Triple Word Score Active</h3> : null}
          {doubleScore ? <h3>Double Word Score Active</h3> : null}
        </div>
        <div>
          <button
            className='double-word-button'
            onClick={handleDoubleWordClick}
          >
            Double Word
          </button>
          <button
            className='triple-word-button'
            onClick={handleTripleWordClick}
          >
            Triple Word
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
        <h2 id='word-score'> Word score: {score} </h2>
        <ScrabbleButton />
        <Players
          score={passScore}
          setScore={setPassScore}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
    </WordContext.Provider>
  );
}
