import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore} from "../ScoreCalc";

export default function Display(){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [tripleScore, setTripleScore] = useState(false)
    const [doubleScore, setDoubleScore] = useState(false)
    const [mode, setMode] = useState(1)
    const [score, SetScore] = useState(0)

    function handleWordClick(displayWord, mode){
        SetScore(calculateScrabbleScore(displayWord) * mode)
        SetDisplayWord([])
        setMode(1)
        setDoubleScore(false)
        setTripleScore(false)
    }

    function handleDelete(displayWord){
        const word = displayWord
        // console.log('word1', word)
        word.pop()
        // console.log('word2', word)
        return word
    }
    
    function handleDoubleWordClick(){
        setDoubleScore(true)
        setTripleScore(false)
        setMode(2)
    }

    function handleTripleWordClick(){
        setTripleScore(true)
        setDoubleScore(false)
        setMode(3)
    }

    console.log("current", displayWord)
    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <h1>{displayWord.map((i) => { return <button>{i}</button>})}</h1>
        {tripleScore ? <h3>Triple Word Score Active</h3> : null}
        {doubleScore ? <h3>Double Word Score Active</h3> : null}
        <button onClick = {()=>{handleWordClick(displayWord, mode)}}>Submit</button>
        <button onClick={() => {SetDisplayWord(handleDelete(displayWord))}}>remove letter</button>
        <button>double letter</button>
        <button>triple letter</button>
        <button onClick={handleDoubleWordClick}>double word</button>
        <button onClick={handleTripleWordClick}>triple word</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        </div>
        </WordContext.Provider>
    )
}