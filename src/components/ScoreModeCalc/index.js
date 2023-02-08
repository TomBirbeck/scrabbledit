export default function ScoreModeCalc(score, mode){
    let total = 0
    if (mode === 'normal'){
        total = score
    } else if (mode === 'double'){
        total = score * 2
    } else if (mode === 'doubleDouble'){
        total = (score * 2) * 2
    } else if (mode === 'triple'){
        total = score * 3
    } else if (mode === 'doubleTriple'){
        total = (score * 3) * 3
    } else if (mode === 'tripleTriple'){
        total = ((score * 3) * 3) * 3
    }
    return total
} 
