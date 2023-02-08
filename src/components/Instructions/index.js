import { useState } from 'react';
import './instructions.css';

export default function Instructions() {
  const [open, setOpen] = useState(false);

  return (
    <div id='instructions'>
      <h2
        style={{ marginLeft: '1em' }}
        onMouseOver={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false)
        }}
        onClick={() => {
          setOpen(!open)
        }}
      >
        Instructions for use
      </h2>
      {open ? (
        <div id='instructions-container' data-testid='instructionsModal'>
          <ol id='instructions-list'>
            <li className='instruction-head'>To change a player's name:</li>
            <li>
              Enter name into text box and then click button of player you wish
              to assign (eg.{' '}
              <button className='player-submit'>Player 1</button>)
            </li>
            <li className='instruction-head'>To select a player's turn:</li>
            <li>
              Click on their name in the table (eg.{' '}
              <button id='instruction-player-button'>Tom</button>)
            </li>
            <li className='instruction-head'>To play a word:</li>
            <li>
              Click on the letter tiles to enter each letter (eg.{' '}
              <button className='letter-buttons'>M</button>)
            </li>
            <li>
              Check any boxes for double/triple letters if required (eg.{' '}
              <label htmlFor='instructions' className='checkboxes'>
                <input
                  type='checkbox'
                  name='double-instructions'
                  value={2}
                  style={{ accentColor: 'var(--blue1)' }}
                ></input>{' '}
                Double
              </label>
              )
            </li>
            <li>
              Click button for{' '}
              <button className='double-word-button'>Double Word</button>
              <button className='triple-word-button'>Triple Word</button>
              <button className='all-tiles-button'>All Tiles Used</button> if
              required.
            </li>
            <li>If your word crosses more than 1 double word square, click the <button className='double-word-extra'>X2</button>.
            </li>
            <li>
            If your score crosses more than 1 triple word square, click either the <button className='triple-word-extra'>X2</button> for 2 triple word squares or the <button className='triple-word-extra'>X3</button> if you cross 3.
            </li>
            <li>
              You can then either click to check the score of the word by
              clicking the <button className='check-button'>Check</button>{' '}
              button, or submit you word by clicking on the{' '}
              <button className='submit-button'>Submit</button> button.
            </li>
            <li className='instruction-head'>To remove letters:</li>
            <li>
              Click the<button className='remove-button'>Remove</button> button
              below the letter you wish to remove.
            </li>
            <li className='instruction-head'>To remove the whole word:</li>
            <li>
              Click on the <button className='clear-button'>Clear</button>{' '}
              button.
            </li>
            <li className='instruction-head'>To determine the winner:</li>
            <li>
              Click the <button className='final-score-button'>Final Score Mode</button> button below the table. Then enter the left over tiles of players in order from 1 - 4. You do not need to select turns here.
            </li>
            <li>
              If a player has no tiles left, enter only the <button className='letter-buttons'>_</button> character.
            </li>
            <li>
              Then click on the <button className='winner-button'>Winner</button>{' '}
              button below the table.
            </li>
          </ol>
        </div>
      ) : null}
    </div>
  );
}
