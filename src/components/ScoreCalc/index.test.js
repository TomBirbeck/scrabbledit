import { calculateScrabbleScore } from "./index.js";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

// Tests for testing the specific score of individual letters
test(`When the 'calculateScrabbleScore' function runs, we want it to test the score of A which is equal to 1`, () => {
    const expected = 1;
    const actual = calculateScrabbleScore(["A"])
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test one`, () => {
    const expected = 4;
    const actual = calculateScrabbleScore(["F"])
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test two`, () => {
    const expected = 10;
    const actual = calculateScrabbleScore(["Q"])
    expect(actual).toBe(expected);
});

test(`When the 'calculateScrabbleScore' function runs, we want it to test if the score of the letter is correct test three`, () => {
    const expected = 3;
    const actual = calculateScrabbleScore(["P"])
    expect(actual).toBe(expected);
});

// Testing for words

test(`When given an array of multiple letters, calculateScrabbleScore function returns full word score`, () => {
    const expected = 8;
    const actual = calculateScrabbleScore(["F", "I", "R", "S", "T"]);
    expect(actual).toBe(expected);

});
test(`When given an array of multiple letters, calculateScrabbleScore function returns full word score test two`, () => {
    const expected = 8;
    const actual = calculateScrabbleScore(["S", "T", "I", "R", "R", "E", "D"]);
    expect(actual).toBe(expected);

});
test(`When given an array of multiple letters, calculateScrabbleScore function returns full word score test three`, () => {
    const expected = 18;
    const actual = calculateScrabbleScore(["J", "I", "N", "X"]);
    expect(actual).toBe(expected);

});
test(`When given an array of multiple letters, calculateScrabbleScore function returns full word score test four`, () => {
    const expected = 9;
    const actual = calculateScrabbleScore(["G", "H", "O", "S", "T"]);
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
    [["W", "O", "R", "D"], 8],
    [["S", "T", "A", "Y"], 7],
    [["P", "L", "A", "C", "E"], 9],
    [["Z", "O", "N", "E"], 13],
    [["Y", "A", "C", "H", "T"], 13],
    [["P", "O", "S", "T", "E", "R"], 8],
])
(`When given a word checkScrabbleScore function returns the value of that word`, (letter, expected) =>{
    const actual = calculateScrabbleScore(letter);
   expect(actual).toBe(expected);
});

//throws an error when symbols are used

test(`When given a word that contains symbols, function throws new error`, () =>{
const actual = ["W", "O", "R", "D", "!"];
expect(() => {calculateScrabbleScore(actual)}).toThrow(Error);
  });

  test.each([
    [["P", "I", "*"], false],
    [["A", "P", "£", "P", "L", "E"], false],
    [["C", "A", "K", "!", "£"], false],
    [["B", "!", "K", "E"], false],
    [["(", "S", "P", "A", "C", "E", ")"], false],
    [["[", "R", "U", "M", "P", "E", "T"], false],
])
(`When given a word with symbols, checkScrabbleScore throws and error, else it returns the value of that word`, (letter, expected) =>{
    const actual = letter;
    console.log (actual);
    expect(() => {calculateScrabbleScore(actual)}).toThrow(Error);
});

//Tests for double and triple letters

test('testing word with double letters added', () => {
    const expected = 10;
    const actual = calculateScrabbleScore(["G", "H", "O", "S", "T"], ["O"]);
    expect(actual).toBe(expected);
})

test.each([
    [["D", "A", "Y"], ["A"], 8],
    [["P", "A", "Y"], ["P"], 11],
    [["S", "T", "A", "N", "D"], ["S"], 7],
    [["G", "H", "O", "S", "T"], ["G"], 11],
    [["D", "A", "Y"], ["A", "D"], 10],
    [["S", "T", "A", "N", "D"], ["S", "A", "N"], 9],
])
(`When an array of letters and an array of doubles, checkScrabbleScore correctly calculates the sore`, (letters, doubleLetters, expected) =>{
    const actual = calculateScrabbleScore(letters, doubleLetters)
    const expectedAnswer = expected;
    expect(actual).toBe(expectedAnswer);
});

test('testing word with triple letters added', () => {
    const expected = 11;
    const actual = calculateScrabbleScore(["G", "H", "O", "S", "T"], [], ["S"]);
    expect(actual).toBe(expected);
})

test.each([
    [["D", "A", "Y"], [], ["A"], 9],
    [["P", "A", "Y"], [], ["P"], 14],
    [["S", "T", "A", "N", "D"], [], ["S"], 8],
    [["G", "H", "O", "S", "T"], [], ["G"], 13],
    [["D", "A", "Y"], [], ["A", "D"], 13],
    [["G", "H", "O", "S", "T"], [], ["G", "O"], 15],
])
(`When an array of letters and an array of doubles, checkScrabbleScore correctly calculates the sore`, (letters, doubleLetters, tripleLetters, expected) =>{
    const actual = calculateScrabbleScore(letters, doubleLetters, tripleLetters)
    const expectedAnswer = expected;
    expect(actual).toBe(expectedAnswer);
});

test('testing word with double and triple letters added', () => {
    const expected = 12;
    const actual = calculateScrabbleScore(["G", "H", "O", "S", "T"], ["T"], ["S"]);
    expect(actual).toBe(expected);
})

test.each([
    [["D", "A", "Y"], ["Y"], ["A"], 13],
    [["P", "A", "Y"], ["A"], ["P"], 15],
    [["S", "T", "A", "N", "D"], ["D"], ["S"], 10],
    [["G", "H", "O", "S", "T"], ["H"], ["G"], 17],
    [["S", "T", "A", "N", "D"], ["D"], ["S", "T"], 12],
    [["G", "H", "O", "S", "T"], ["H"], ["G", "O"], 19],
])
(`When an array of letters and an array of doubles, checkScrabbleScore correctly calculates the sore`, (letters, doubleLetters, tripleLetters, expected) =>{
    const actual = calculateScrabbleScore(letters, doubleLetters, tripleLetters)
    const expectedAnswer = expected;
    expect(actual).toBe(expectedAnswer);
});