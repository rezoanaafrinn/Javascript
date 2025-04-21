// This is a simple JavaScript program that prints the name, income, expense, and savings of a person.

const name = "Rezoana Afrin";
let income = 7000;
// multiple expenses
let rent = 1200;
let groceries = 300;
let transportation = 150;
let entertainment = 200;

// calculate total expenses
let totalExpense = rent + groceries + transportation + entertainment;

// Tax deduction (10% of income)
let tax = income * 0.10;

// Net income after tax
let netIncome = income - tax;

// Calculate remaining balance after expenses
let remainingBalance = netIncome - totalExpense;

// Calculate savings (20% of remaining balance)
let savings = remainingBalance * 0.20;

console.log(`Personal Budget Tracker`);
console.log(`User: ${name}`);
console.log(`Total Income: $${income}`);
console.log(`Total Expenses: $${totalExpense}`);
console.log(`Tax Deduction(10%): $${tax}`);
console.log(`Net Income after Tax: $${netIncome}`);
console.log(`Remaining Balance: $${remainingBalance}`);
console.log(`Savings(20% of balance): $${savings}`);