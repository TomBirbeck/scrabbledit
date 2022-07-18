import ScrabbleButton from "../Buttons";
import { LetterInputContext } from "../Context"
import { useState } from "react"

export default function Display(){
    // const userInput = useContext(LetterInputContext)
    const [userInput, SetUserInput] = useState("")
    const [displayWord, SetDisplayWord] = useState([""])
    function handlechange(){
        SetDisplayWord([...displayWord, userInput])
    } 
    console.log("word", displayWord)
    console.log("input", userInput)
    return (
        <LetterInputContext.Provider value = {{displayWord, SetDisplayWord}}>
        <div>
        <h1>hey {userInput}</h1><button>Submit</button>
        <ScrabbleButton/>
        </div>
        </LetterInputContext.Provider>
    )
}