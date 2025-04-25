let letter = prompt(`Enter a letter: `);

letter = letter.toLowerCase();

if (letter >= 'a' && letter <= 'z') {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        document.write(`The letter is a vowel.<br>`);
    }
    else {
        document.write(`The letter is a consonant.<br>`);
    }   
}
else {
    document.write(`It is not a valid letter.<br>`);
}

