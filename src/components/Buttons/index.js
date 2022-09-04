import { useContext } from 'react';
import { WordContext } from '../Context';
import './buttons.css';
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '_',
];

export default function ScrabbleButton() {
  const { displayWord, SetDisplayWord } = useContext(WordContext);

  function handleClick(e) {
    SetDisplayWord([...displayWord, e.target.value]);
  }

  return (
    <div id='letter-button-con'>
      {letters.map((l) => {
        return (
          <button
            className='letter-buttons'
            key={l}
            value={l}
            onClick={handleClick}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
