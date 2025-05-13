// create a function called highestScore that will 
// receive a 1D array called scores
// return the highest score 

function highestScore(scores){
    let max = scores[0];
    for (let x = 1; x < scores.length;x++){
        if(max < scores[x]){
            max = scores[x]
        }
    }
    return max;
}
let Arr_scores = [21,2,34,88,97,56];
var maxScore = highestScore(Arr_scores);

console.log(maxScore);