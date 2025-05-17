// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random number; then show message won else lost
// run the guess for 5 times
// show the number of wons and losts

var numberOfWon = 0;
var numberOfLost = 0;
for(i=1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a random number from 1 to 5: "));

    var randomNumber = Math.floor(Math.random()*5)+1;

    if(guessNumber == randomNumber){ 
        console.log("You have won");
        numberOfWon ++;

    }else{
        console.log("You have lost. Random number was " + randomNumber);
        numberOfLost ++;
    }

}
document.write("Number of Won: " +numberOfWon+ "<br>");
document.write("Number of Lost: " +numberOfLost+ "<br>");
