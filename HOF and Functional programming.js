1. You are building an e-commerce website. Write a function that calculates the total price of a customer's
order. You're given an array of items, each with a price property. Use the forEach method to iterate through
the array and sum up the prices to get the total order amount.

  Ans. const ordersList = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 }
];

function calculateTotalPrice(orders) {
    let total = 0;
    orders.forEach(item => {
        total += item.price;
    });
    return total;
}

const totalPrice = calculateTotalPrice(ordersList);
console.log(`The total price is Rs.${totalPrice}`);

  Output :
  The total price is Rs.202000


2. In this challenge, your task is to create a function that generates a random number and prints it to the
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.

  Ans.  function printRandomNumber() {
    setInterval(() => {
        console.log(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
    }, 2000);
}

printRandomNumber();


3. You are given an array of expense objects representing monthly expenses. Each object has properties,
amount and category. Use the map method to create a new array that includes the calculated tax for each
expense. Assume a tax rate of 10%.


  Ans. let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
];

const taxRate = 0.1;

const expensesWithTax = expenses.map(expense => {
    return {
        amount: expense.amount,
        category: expense.category,
        tax: expense.amount * taxRate
    };
});

console.log(expensesWithTax);

    Output :
    [
      { amount: 100, category: 'Utilities', tax: 10 },
      { amount: 200, category: 'Groceries', tax: 20 },
      { amount: 50, category: 'Entertainment', tax: 5 }
    ]


4. Using the same array of expense objects, use the filter method to create a new array that includes only
the expenses related to the category "Groceries."


  Ans.  let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
    
    ];

    const groceryExpenses = expenses.filter(expense => expense.category === "Groceries");

    console.log(groceryExpenses);


    Output :

    [
        { amount: 200, category: "Groceries" }
    ]


5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
expenses.


  Ans.  let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
];

const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
}, 0); // Initial accumulator value is set to 0

console.log("Total expenses:", totalAmount);


    Output :
    Total expenses: 350


6. You have a list of expenses, each with an amount and a category. Now, create a function named
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
called categorizedExpenses, where each element represents the category for the corresponding expense in
the original list. Finally, print out the categorizedExpenses array.


  Ans.  let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
];

// Function to categorize expenses
function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}

// Mapping expenses to their categories
const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

console.log("Categorized Expenses:", categorizedExpenses);


    Output :

    Categorized Expenses: [ 'Low Expense', 'High Expense', 'Low Expense' ]



7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of
each number. After completing the iteration, display the modified array.


  
  Ans.  let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log("Modified Array:", originalNumbers);


  Output :

  Modified Array: [4, 10, 16, 20, 6]


8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a
new array.

  Ans.  let originalNumbers = [2, 5, 8, 10, 3];
let evenNumbers = [];

originalNumbers.forEach(num => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
});

console.log("Even Numbers:", evenNumbers);


    Output :
    Even Numbers: [2, 8, 10]





