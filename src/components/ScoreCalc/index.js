export function calculateScrabbleScore({scrabbleWord}) {
    console.log(scrabbleWord)
    const words1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
    const words2 = ["D", "G"]
    const words3 = ["B", "C", "M", "P"]
    const words4 = ["F", "H", "V", "W", "Y"]
    const words5 = ["K"]
    const words6 = ["J", "X"]
    const words7 = ["Q", "Z"]

    // const scrabbleWord = word.toUpperCase(); // converts all letters of word entered to uppercase
    const score = [];
    let sum = 0;
    
    if (/^[a-zA-Z]+$/.test(scrabbleWord) === false) {
        throw new Error(`Error, ${scrabbleWord} contains invalid characters, please use only letters`)
        }
    //for loop comparing letters to arrays
    //push values into score array
    //add the numbers in the array

    for ( let i = 0; i < scrabbleWord.length; i++){
    if (words1.includes(scrabbleWord.charAt(i))) {
        score.push(1);
    }
    if (words2.includes(scrabbleWord.charAt(i))) {
        score.push(2);
    }
    if (words3.includes(scrabbleWord.charAt(i))) {
        score.push(3);
    }
    if (words4.includes(scrabbleWord.charAt(i))) {
        score.push(4);
    }
    if (words5.includes(scrabbleWord.charAt(i))) {
        score.push(5);
    }
    if (words6.includes(scrabbleWord.charAt(i))) {
        score.push(8);
    }
    if (words7.includes(scrabbleWord.charAt(i))) {
        score.push(10);
    }
    }
// adds 50 points to the score if all 7 tiles are used
 for (let x = 0; x < score.length; x++){
     sum = sum + score[x];
 }
 if (scrabbleWord.length === 7){sum = sum + 50};
 return sum;
}