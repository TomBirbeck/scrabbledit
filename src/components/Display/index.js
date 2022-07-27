import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore } from "../ScoreCalc";

export default function Display(){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [score, SetScore] = useState(0)

    function handleWordClick(displayWord){
        SetScore(calculateScrabbleScore(displayWord))
        SetDisplayWord([])
    }
  
    console.log("current", displayWord)
    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <h1>{displayWord}</h1><button onClick = {()=>{handleWordClick(displayWord)}}>Submit</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        </div>
        </WordContext.Provider>
    )
}