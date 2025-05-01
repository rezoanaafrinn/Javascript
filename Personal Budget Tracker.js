// This is a simple JavaScript program that prints the name, income, expense, and savings of a person.

const name = prompt("Enter your name:");
const income = parseFloat(prompt("Enter your monthly income:"));

// Ask how many expenses the user has
const numberOfExpenses = parseInt(prompt("Enter the number of expenses: "));

if (isNaN(income) || isNaN(numberOfExpenses) || numberOfExpenses <= 0 || income < 0) {
    console.log("Invalid input. Please enter a valid income and number of expenses.");
}
else {
    let totalExpense = 0;
}
// multiple expenses
const rent = 1200; 
const groceries = 300;
const transportation = 150;
const entertainment = 200;

// calculate total expenses
const totalExpense = rent + groceries + transportation + entertainment;

// Tax deduction (10% of income)
const tax = income * 0.10;

// Net income after tax
const netIncome = income - tax;

// Calculate remaining balance after expenses
const remainingBalance = netIncome - totalExpense;

// Calculate savings (20% of remaining balance)
const savings = remainingBalance * 0.20;

// financial status based on savings
let financialStatus = '';
if (savings >= 1000){
    financialStatus =`Excellent! You are on track with your savings!`;
}
else if (savings >= 500){
    financialStatus =`Good! You are doing well with your savings!`;
}
else if (savings >= 100){
    financialStatus =`You need to save more!`;
}
else {
    financialStatus =`You need to save a lot more!`;
}

// Check expenses exceeding income
let OverSpendingMessage = '';
if (totalExpense > income) {
    OverSpendingMessage = `Warning: Your expenses exceed your income!`;
}

console.log(`Personal Budget Tracker`);
console.log(`User: ${name}`);
console.log(`Total Income: $${income}`);
console.log(`Total Expenses: $${totalExpense}`);
console.log(`Tax Deduction(10%): $${tax}`);
console.log(`Net Income after Tax: $${netIncome}`);
console.log(`Remaining Balance: $${remainingBalance}`);
console.log(`Savings(20% of balance): $${savings}`);
console.log(`Financial Status: ${financialStatus}`);
if (OverSpendingMessage) {
    console.log(OverSpendingMessage);
} 