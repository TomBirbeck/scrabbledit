import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore, calculateDoubleScrabbleScore } from "../ScoreCalc";

export default function Display(){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [tripleScore, setTripleScore] = useState(false)
    const [doubleScore, setDoubleScore] = useState(false)

    const [score, SetScore] = useState(0)

    function handleWordClick(displayWord){
        SetScore(calculateDoubleScrabbleScore(displayWord))
        SetDisplayWord([])
    }
  
    console.log("current", displayWord)
    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <h1>{displayWord}</h1>
        {tripleScore ? <h3>Triple Word Score Active</h3> : null}
        {doubleScore ? <h3>Double Word Score Active</h3> : null}
        <button onClick = {()=>{handleWordClick(displayWord)}}>Submit</button>
        <button>double letter</button>
        <button>triple letter</button>
        <button onClick={() => {setDoubleScore(current => !current)}}>double word</button>
        <button onClick={() => {setTripleScore(current => !current)}}>triple word</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        </div>
        </WordContext.Provider>
    )
}