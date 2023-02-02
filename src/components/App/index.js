import './App.css';
import { WordContext } from '../Context';
import Display from '../Display';
import Instructions from '../Instructions';

function App() {
  return (
    <WordContext.Provider value={WordContext}>
      <div className='App'>
        <Instructions />
        <div id='title-container'>
          <div id='title-banner'>
            <h1 id='title'>Scrabbledit</h1>
          </div>
        </div>
        <h2 id='motto'>We can't trust Barry with the scores again</h2>
        <Display data-testid='appDisplay'/>
      </div>
    </WordContext.Provider>
  );
}

export default App;
