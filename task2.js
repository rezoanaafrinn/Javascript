// input a letter and check if it is a vowel or consonant
var letter = prompt("Enter a letter (a-z):").toLowerCase();
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(letter + " is a vowel.");
        break;
    default:
        if (letter >= 'a' && letter <= 'z') {
            console.log(letter + " is a consonant.");
        } else {
            console.log("Invalid input. Please enter a letter between a and z.");
        }   
        break;
}