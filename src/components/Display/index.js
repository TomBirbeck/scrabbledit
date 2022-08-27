import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore} from "../ScoreCalc";
import './/display.css'

export default function Display(){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [tripleScore, setTripleScore] = useState(false)
    const [doubleScore, setDoubleScore] = useState(false)
    const [mode, setMode] = useState(1)
    const [score, SetScore] = useState(0)

    function handleWordCheck(displayWord){
        let mode = 1;
        doubleScore ? mode = 2 : tripleScore ? mode = 3 : mode = 1;
        SetScore(calculateScrabbleScore(displayWord) * mode)
    }

    function handleWordSubmit(displayWord){
        let mode = 1;
        doubleScore ? mode = 2 : tripleScore ? mode = 3 : mode = 1;
        SetScore(calculateScrabbleScore(displayWord) * mode)
    }

    function handleDelete(displayWord){
        const word = displayWord
        word.pop()
        return word
    }
    
    function handleDoubleWordClick(){
        setDoubleScore(!doubleScore)
        setTripleScore(false)
        doubleScore ? setMode(2) : setMode(1)
    }

    function handleTripleWordClick(){
        setTripleScore(!tripleScore)
        setDoubleScore(false)
        tripleScore ? setMode(3) : setMode(1)
    }
    
    console.log("mode", mode)

   function handleChange(e) {
        let isChecked = e.target.checked;
        console.log(isChecked)
      }

    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <div id="letter-layout">{displayWord.map((i) => { return (<div id="letter-button-layout">
            <button id="display-button">{i}</button>
            <div className="checkbox-container">
            <label for="double" className="checkboxes"><input type="checkbox" name="double" value="yes" onChange={(e) => {handleChange(e)}}></input>Double</label>
        <label for="triple" className="checkboxes"><input type="checkbox" name="triple" value="yes" onChange={(e) => {handleChange(e)}}></input>Triple</label>
        </div>
        </div>)})}</div>
        <div className="score-mode">{tripleScore ? <h3>Triple Word Score Active</h3> : null}
        {doubleScore ? <h3>Double Word Score Active</h3> : null}</div>
        <button onClick={handleDoubleWordClick}>double word</button>
        <button onClick={handleTripleWordClick}>triple word</button>
        <button onClick={() => {SetDisplayWord(handleDelete(displayWord))}}>remove letter</button>
        <button onClick = {()=>{handleWordCheck(displayWord)}}>Check</button>
        <button onClick = {()=>{handleWordSubmit(displayWord)}}>Submit</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        </div>
        </WordContext.Provider>
    )
}