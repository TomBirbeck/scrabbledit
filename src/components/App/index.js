import Players from '../Players';
import './App.css';
import {useState} from 'react'
import { WordContext } from '../Context';
import Display from '../Display';

function App() {
const [players, Setplayers] = useState([{player:"", score: 0}, {player:"", score: 0}, {player:"", score: 0}])
// const [userInput, SetUserInput] = useState("")

  return (
    <WordContext.Provider>
    <div className="App">
       <h1> Scrabbled</h1>
      <Display/>
      <Players playersNames={players}/>
    </div>
    </WordContext.Provider>
  );
}

export default App;
