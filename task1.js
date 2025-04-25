let firstName = "Rezoana";
let lastName = "Afrin";
let fullName = firstName + " " + lastName;
let text1 = fullName.toUpperCase();

document.write("Full Name: " + fullName + "<br>");

document.write("number of characters in full name: " + fullName.length + "<br>");
document.write("fullname in uppercase: "+text1+ "<br>");

let num = 0;

if (num > 0) {
    document.write(`The number is positive.<br>`);
}
else if (num < 0) {
    document.write(`The number is negative.<br>`);
}
else {
    document.write(`The number is zero.<br>`);
}