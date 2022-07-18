const letter = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default function ScrabbleButton(){
 
    return (
        letter.map((l) => {
             return <button value={l}>{l}</button>
            })
   
    )
}