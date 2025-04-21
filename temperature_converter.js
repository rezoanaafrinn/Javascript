let f = parseFloat(prompt("Enter temperature in Fahrenheit: "));
let c = (f - 32) * 5 / 9;
let k = c + 273.15;
document.write(f + "F = " + c + " Celsius<br>");
document.write(f + "F = " + k + " Kelvin<br>");