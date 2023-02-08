import ScoreModeCalc from ".";

describe('tests for score mode calc function in normal mode', () => {
    test.each([
        [10, 'normal', 10],
        [15, 'normal', 15],
        [20, 'normal', 20],
        [30, 'normal', 30],
        [40, 'normal', 40],
        [55, 'normal', 55],
        [8, 'normal', 8],
        [3, 'normal', 3],
        [5, 'normal', 5],
        [9, 'normal', 9],
    ])
    (`When given a score and 'normal' scoremodecalc function returns the same score`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
})

describe('tests for score mode calc function in double mode', () => {
    test.each([
        [10, 'double', 20],
        [15, 'double', 30],
        [20, 'double', 40],
        [30, 'double', 60],
        [40, 'double', 80],
        [55, 'double', 110],
        [8, 'double', 16],
        [3, 'double', 6],
        [5, 'double', 10],
        [9, 'double', 18],
    ])
    (`When given a score and 'double' scoremodecalc function returns the score doubled`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
})

describe('tests for score mode calc function in doubleDouble mode', () => {
    test.each([
        [10, 'doubleDouble', 40],
        [15, 'doubleDouble', 60],
        [20, 'doubleDouble', 80],
        [30, 'doubleDouble', 120],
        [40, 'doubleDouble', 160],
        [55, 'doubleDouble', 220],
        [8, 'doubleDouble', 32],
        [3, 'doubleDouble', 12],
        [5, 'doubleDouble', 20],
        [9, 'doubleDouble', 36],
    ])
    (`When given a score and 'doubleDouble' scoremodecalc function returns the score doubled twice`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
})

describe('tests for score mode calc function in triple mode', () => {
    test.each([
        [10, 'triple', 30],
        [15, 'triple', 45],
        [20, 'triple', 60],
        [30, 'triple', 90],
        [40, 'triple', 120],
        [55, 'triple', 165],
        [8, 'triple', 24],
        [3, 'triple', 9],
        [5, 'triple', 15],
        [9, 'triple', 27],
    ])
    (`When given a score and 'triple' scoremodecalc function returns the score tripled`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
}
)
describe('tests for score mode calc function in doubleTriple mode', () => {
    test.each([
        [10, 'doubleTriple', 90],
        [15, 'doubleTriple', 135],
        [20, 'doubleTriple', 180],
        [30, 'doubleTriple', 270],
        [40, 'doubleTriple', 360],
        [55, 'doubleTriple', 495],
        [8, 'doubleTriple', 72],
        [3, 'doubleTriple', 27],
        [5, 'doubleTriple', 45],
        [9, 'doubleTriple', 81],
    ])
    (`When given a score and 'triple' scoremodecalc function returns the score tripled twice`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
}
)

describe('tests for score mode calc function in tripleTriple mode', () => {
    test.each([
        [10, 'tripleTriple', 270],
        [15, 'tripleTriple', 405],
        [20, 'tripleTriple', 540],
        [30, 'tripleTriple', 810],
        [40, 'tripleTriple', 1080],
        [55, 'tripleTriple', 1485],
        [8, 'tripleTriple', 216],
        [3, 'tripleTriple', 81],
        [5, 'tripleTriple', 135],
        [9, 'tripleTriple', 243],
    ])
    (`When given a score and 'tripleTriple' scoremodecalc function returns the same score`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
})