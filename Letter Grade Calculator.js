var marks = prompt("Enter Your Marks: ");

if (marks > 0 || marks > 100) {
    document.write("Invalid input. Please enter a number between 0 and 100.<br>");
}

else if (marks >= 90 && marks <= 100) {
    document.write("Your letter grade is A+.<br>");
}
else if (marks >= 80 && marks < 90) {
    document.write("Your letter grade is A.<br>");
}
else if (marks >= 70 && marks < 80) {
    document.write("Your letter grade is B.<br>");
}
else if (marks >= 60 && marks < 70) {

    document.write("Your letter grade is C.<br>");
}
else if (marks >= 50 && marks < 60) {
    document.write("Your letter grade is D.<br>");
}

else {
    document.write("Your letter grade is F.<br>");
    
}
