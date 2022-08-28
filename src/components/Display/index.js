import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore} from "../ScoreCalc";
import './/display.css'
import Players from "../Players";

export default function Display({players, SetPlayers}){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [tripleScore, setTripleScore] = useState(false)
    const [doubleScore, setDoubleScore] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    // const [mode, setMode] = useState(1)
    const [score, SetScore] = useState(0)

    function handleWordCheck(displayWord){
        let mode = 1;
        doubleScore ? mode = 2 : tripleScore ? mode = 3 : mode = 1;
        isChecked ? console.log("check true") : console.log("check false")
        SetScore(calculateScrabbleScore(displayWord) * mode)
    }

    function handleWordSubmit(displayWord){
        let mode = 1;
        doubleScore ? mode = 2 : tripleScore ? mode = 3 : mode = 1;
        SetScore(calculateScrabbleScore(displayWord) * mode)
    }
    // function handleDelete(displayWord){
    //     const word = displayWord
    //     word.pop()
    //     return word
    // }
    
    function deleteLetter (index) {
        SetDisplayWord((word) => word.filter((_, i) => i !== index));
    }

    function handleDoubleWordClick(){
        setDoubleScore(!doubleScore)
        setTripleScore(false)
        // doubleScore ? setMode(2) : setMode(1)
    }

    function handleTripleWordClick(){
        setTripleScore(!tripleScore)
        setDoubleScore(false)
        // tripleScore ? setMode(3) : setMode(1)
    }

   function handleChange(e) {
        setIsChecked(e.target.checked);
        console.log("target", e.target)
      }

      console.log("word", displayWord)

    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div id="display">
        <div id="letter-layout">{displayWord.map((i, index) => { return (<div id="letter-button-layout">
            <button id="display-button" key={i}>{i}</button>
            <div className="checkbox-container">
                <button onClick={() => {deleteLetter(index)}}>remove</button>
            <label for="double" className="checkboxes"><input type="checkbox" name="double" value={i} onChange={(e) => {handleChange(e)}}></input>Double</label>
        <label for="triple" className="checkboxes"><input type="checkbox" name="triple" value={i} onChange={(e) => {handleChange(e)}}></input>Triple</label>
        </div>
        </div>)})}</div>
        <div className="score-mode">{tripleScore ? <h3>Triple Word Score Active</h3> : null}
        {doubleScore ? <h3>Double Word Score Active</h3> : null}</div>
        <button id="double-word-button" onClick={handleDoubleWordClick}>double word</button>
        <button id="triple-word-button" onClick={handleTripleWordClick}>triple word</button>
        {/* <button onClick={() => {SetDisplayWord(handleDelete(displayWord))}}>remove letter</button> */}
        <button onClick = {()=>{handleWordCheck(displayWord)}}>Check</button>
        <button onClick = {()=>{handleWordSubmit(displayWord)}}>Submit</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        <Players playersNames={players} setPlayers = {SetPlayers}/>
        </div>
        </WordContext.Provider>
    )
}