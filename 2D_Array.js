// create a function called highestRunScorer that will
// receive a 2D array called playersInfo
// based on highest score, return the name of the player

function highestRunScorer(playersInfo){
    let highestScorer = playersInfo[0][0];
    let highestScore = playersInfo[0][1];

    for(let i=1;i<playersInfo.length;i++){
        if(highestScore < playersInfo[i][1]){
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }
    return highestScorer;
}

let playersInfo_Arr = [
    ["Anis",95],
    ["Sumon",34],
    ["Maria",50],
    ["Jhon",120]
];
var name = highestRunScorer(playersInfo_Arr);
console.log(name);