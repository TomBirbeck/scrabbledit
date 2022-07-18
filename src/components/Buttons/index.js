import { useContext} from 'react'
import { LetterInputContext } from "../Context"
const letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default function ScrabbleButton(){
    const {userInput, SetUserInput} = useContext(LetterInputContext)

function handleClick(e){
    SetUserInput(e.target.value)
}


 return (
        letters.map((l) => {
             return( 
             <button key = {l} value = {l} onClick = {handleClick}>{l}</button>
            )
        }
    ))
}