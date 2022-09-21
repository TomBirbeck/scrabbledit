export function calculateScrabbleScore(word, doubles, triples) {
    const words1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
    const words2 = ["D", "G"]
    const words3 = ["B", "C", "M", "P"]
    const words4 = ["F", "H", "V", "W", "Y"]
    const words5 = ["K"]
    const words6 = ["J", "X"]
    const words7 = ["Q", "Z"]
    const words8 = ["_"]

    // const scrabbleWord = word.toUpperCase(); // converts all letters of word entered to uppercase

    let lets = word.join('')
    let dou = doubles.join('')
    let tri = triples.join('')
    let scrabbleWord = lets + dou + tri + tri;
    // console.log("scrab", scrabbleWord)
    const score = [];
    let sum = 0;
    
    if (/^[a-zA-Z_]+$/.test(scrabbleWord) === false) {
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
    if (words8.includes(scrabbleWord.charAt(i))) {
        score.push(0)
    }
    }
 for (let x = 0; x < score.length; x++){
     sum = sum + score[x];
 }
 return sum;
}

export function calculateDoubleScrabbleScore(displayWord){
    return calculateScrabbleScore(displayWord) * 2
}