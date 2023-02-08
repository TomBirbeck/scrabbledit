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
    (`When given a score and 'double' scoremodecalc function returns the same score`, (score, mode, expected) =>{
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
    (`When given a score and 'doubleDouble' scoremodecalc function returns the same score`, (score, mode, expected) =>{
        const actual = ScoreModeCalc(score, mode);
       expect(actual).toBe(expected);
   });
})