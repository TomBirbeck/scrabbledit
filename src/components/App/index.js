// import Players from '../Players';
import './App.css';
// import {useState} from 'react'
import { WordContext } from '../Context';
import Display from '../Display';

function App() {
// const [players, Setplayers] = useState([{player:"", score: 0}, {player:"", score: 0}, {player:"", score: 0}])

  return (
    <WordContext.Provider>
    <div className="App">
      <div id='title-container'><div id='title-banner'><h1 id='title'> Scrabbledit</h1></div></div>
       <h3 id='motto'>We can't trust Barry with the scores again</h3>
       <Display/>
      {/* <Display playersNames={players} setPlayers = {Setplayers}/> */}
      {/* <Players playersNames={players} setPlayers = {Setplayers}/> */}
    </div>
    </WordContext.Provider>
  );
}

export default App;
