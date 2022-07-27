import { calculateScrabbleScore } from "./scrabble-score.js";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

// Tests for testing the specific score of individual letters
test(`When the 'calculateScrabbleScore' function runs, we want it to test the score of A which is equal to 1`, () => {
    const expected = 1;
    const actual = calculateScrabbleScore("A")
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test one`, () => {
    const expected = 4;
    const actual = calculateScrabbleScore("F")
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test two`, () => {
    const expected = 10;
    const actual = calculateScrabbleScore("Q")
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test three`, () => {
    const expected = 3;
    const actual = calculateScrabbleScore("P")
    expect(actual).toBe(expected);
});

// Testing for words

test(`When give a word, calculateScrabbleScore function returns full word score`, () => {
    const expected = 8;
    const actual = calculateScrabbleScore("FIRST");
    expect(actual).toBe(expected);

});
test(`When give a word, calculateScrabbleScore function returns full word score test one`, () => {
    const expected = 58;
    const actual = calculateScrabbleScore("STIRRED");
    expect(actual).toBe(expected);

});
test(`When give a word, calculateScrabbleScore function returns full word score test two`, () => {
    const expected = 18;
    const actual = calculateScrabbleScore("JINX");
    expect(actual).toBe(expected);

});
test(`When give a word, calculateScrabbleScore function returns full word score test three`, () => {
    const expected = 9;
    const actual = calculateScrabbleScore("GHOST");
    expect(actual).toBe(expected);

});

//multiple tests for letters in 1

test.each([
    ["A", 1],
    ["B", 3],
    ["C", 3],
    ["D", 2],
    ["E", 1],
    ["F", 4],
    ["G", 2],
    ["H", 4],
    ["I", 1],
    ["J", 8],
])(`When give a letter checkScrabbleScore function returns the value of that letter`, (letter, expected) =>{
     const actual = calculateScrabbleScore(letter);
    expect(actual).toBe(expected);
});


//multiple tests for words in 1

test.each([
    ["WORD", 8],
    ["STAY", 7],
    ["PLACE", 9],
    ["ZONE", 13],
    ["YACHT", 13],
    ["POSTER", 8],
])
(`When given a word checkScrabbleScore function returns the value of that word`, (letter, expected) =>{
    const actual = calculateScrabbleScore(letter);
   expect(actual).toBe(expected);
});

//throws an error when symbols are used

test(`When given a word that contains symbols, function throws new error`, () =>{
const actual = "WORD!";
expect(() => {calculateScrabbleScore(actual)}).toThrow(Error);
  });

  test.each([
    ["PI*", false],
    ["AP£PLE", false],
    ["CAK!£", false],
    ["B!KE", false],
    ["(SPACE)", false],
    ["[RUMPET", false],
])
(`When given a word with symbols, checkScrabbleScore throws and error, else it returns the value of that word`, (letter, expected) =>{
    const actual = letter;
    console.log (actual);
    expect(() => {calculateScrabbleScore(actual)}).toThrow(Error);
});

//test for bonus score

test(`When given a word length of 7, function returns word score + 50`, () =>{
const actual = calculateScrabbleScore("JAZZING");
const expected = 83;
expect(actual).toBe(expected);
})

test.each([
    ["PEOPLES", 61],
    ["MOUNTED", 60],
    ["GHOSTED", 62],
    ["STRIVES", 60],
    ["ESCAPES", 61],
    ["TRUMPET", 61],
])
(`When given a word length of 7, function returns word score + 50`, (letter, expected) =>{
    const actual = calculateScrabbleScore(letter);
   expect(actual).toBe(expected);
})

test.each([
    ["WorD", 8],
    ["STAy", 7],
    ["pLACE", 9],
    ["zONE", 13],
    ["yacht", 13],
    ["pOSTEr", 8],
])
(`When given a word checkScrabbleScore function returns the value of that word`, (letter, expected) =>{
    const actual = calculateScrabbleScore(letter);
   expect(actual).toBe(expected);
});