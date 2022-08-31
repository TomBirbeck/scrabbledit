import { useState } from "react"
import "./instructions.css"

export default function Instructions(){
    const [open, setOpen] = useState(false)

    return (
        <div id="instructions"><h2 style={{marginLeft: '1em'}} onClick={ ()=> {setOpen(!open)}}>How to play</h2>
        <h4 style={{fontSize: '.7em', marginLeft: '2.3em'}}>(Click to open and close)</h4>
        {open ? <div id="instructions-container"><ol id="instructions-list">
            <li className="instruction-head">To change a player's name:</li>
            <li>Enter name into text box and then click button of player you wish to assign</li>
            <li className="instruction-head">To select a player's turn:</li>
            <li>Click on their name in the table</li>
            <li className="instruction-head">To play a word:</li>
            <li>Click on the letter tiles to enter each letter.</li>
            <li>Check any boxes for double/triple letters if required.</li>
            <li>Click button for double/triple word if required.</li>
            <li>You can then either click to check the score of the word by clicking the check button, or submit you word by clicking on the submit button</li>
            <li className="instruction-head">To remove letters:</li>
            <li>Click the remove button below the letter you wish to remove.</li>
            <li className="instruction-head">To remove the whole word:</li>
            <li>Click on the clear button.</li>
            <li className="instruction-head">To determine the winner:</li>
            <li>Click on the winner button below the table.</li>
            </ol></div> : null}</div>
        
    )
}