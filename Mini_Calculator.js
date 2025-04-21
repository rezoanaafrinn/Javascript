let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

let sum, sub, mul, div, mod;

sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
mod = num1 % num2;

document.write(num1 + " + " + num2 +"=" + sum + "<br/>");
document.write(num1 + " - " + num2 +"=" + sub + "<br/>");
document.write(num1 + " * " + num2 +"=" + mul + "<br/>");
document.write(num1 + " / " + num2 +"=" + div + "<br/>");
document.write(num1 + " % " + num2 +"=" + mod + "<br/>");