var num = prompt("Enter a number: ");

if (num >= 90 && num <= 100) {
    document.write("Your letter grade is A+.<br>");
}
else if (num >= 80 && num < 90) {
    document.write("Your letter grade is A.<br>");
}
else if (num >= 70 && num < 80) {
    document.write("Your letter grade is B.<br>");
}
else if (num >= 60 && num < 70) {

    document.write("Your letter grade is C.<br>");
}
else if (num >= 50 && num < 60) {
    document.write("Your letter grade is D.<br>");
}
else if (num >= 0 && num < 50) {
    document.write("Your letter grade is F.<br>");
}
else {
    document.write("Invalid input. Please enter a number between 0 and 100.<br>");
}
