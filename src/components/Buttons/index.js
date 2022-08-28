import { useContext, useEffect} from 'react'
import { WordContext } from "../Context"
const letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]

export default function ScrabbleButton(){
    
    const {displayWord, SetDisplayWord} = useContext(WordContext)

    function handleClick(e){
        SetDisplayWord([...displayWord, e.target.value])
    }


 return (
    <div>
        {letters.map((l) => {
             return( 
             <button key = {l} value = {l} onClick = {handleClick}>{l}</button>
            )
        }
    )}
    </div>)
}