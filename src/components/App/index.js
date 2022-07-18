import Players from '../Players';
import './App.css';
import {useState} from 'react'
import { LetterInputContext } from '../Context';
import Display from '../Display';

function App() {
const [players, Setplayers] = useState([{player:"", score: 0}, {player:"", score: 0}, {player:"", score: 0}])
// const [userInput, SetUserInput] = useState("")

  return (
    <div className="App">
      <h1> Scrabbled</h1>
      <LetterInputContext.Provider>
      <Display/>
      <Players playersNames={players}/>
      </LetterInputContext.Provider>
    </div>
  );
}

export default App;
