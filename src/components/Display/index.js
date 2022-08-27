import ScrabbleButton from "../Buttons";
import { WordContext } from "../Context"
import { useState } from "react"
import { calculateScrabbleScore} from "../ScoreCalc";
import './/display.css'

export default function Display(){
    
    const [displayWord, SetDisplayWord] = useState([])
    const [tripleScore, setTripleScore] = useState(false)
    const [doubleScore, setDoubleScore] = useState(false)
    const [doubleLetter, setDoubleLetter] = useState(false)
    const [tripleLetter, setTripleLetter] = useState(false)
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

    console.log("double", doubleLetter)
    console.log("triple", tripleLetter)
    return (
        <WordContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <h1 id="letter-layout">{displayWord.map((i) => { return <div id="letter-button-layout"><button id="display-button">{i}</button><button onClick={()=>{setDoubleLetter(!doubleLetter)}}>Double</button><button onClick={()=>{setTripleLetter(!tripleLetter)}}>Triple</button></div>})}</h1>
        {tripleScore ? <h3>Triple Word Score Active</h3> : null}
        {doubleScore ? <h3>Double Word Score Active</h3> : null}
        <button onClick = {()=>{handleWordClick(displayWord, mode)}}>Submit</button>
        <button onClick={() => {SetDisplayWord(handleDelete(displayWord))}}>remove letter</button>
        {/* <button>double letter</button> */}
        {/* <button>triple letter</button> */}
        <button onClick={handleDoubleWordClick}>double word</button>
        <button onClick={handleTripleWordClick}>triple word</button>
        <h2> Word score {score} </h2>
        <ScrabbleButton/>
        </div>
        </WordContext.Provider>
    )
}