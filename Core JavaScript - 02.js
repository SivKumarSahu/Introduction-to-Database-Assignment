Q1. Create an arrow function called square that takes a number as an argument and returns its square. 
  Use the arrow function to calculate the square of a given number and display the result.

  Ans. const square = (num) => num * num;

        // Example usage:
        console.log(square(5));  // Output: 25
        console.log(square(10)); // Output: 100
        console.log(square(3));  // Output: 9


Q2. The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24E
* Sort the array and find the min and max age.
* Find the median age(one middle item or two middle items divided by two)
* Find the average age(all items divided by number of items)
* Find the range of the ages(max minus min)
* Compare the value of (min - average) and (max - average), use abs() method.


  Ans.  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

          // Sorting the array
          ages.sort((a, b) => a - b);
          console.log("Sorted ages:", ages);
          
          // Finding min and max age
          const minAge = ages[0];
          const maxAge = ages[ages.length - 1];
          console.log("Min age:", minAge);
          console.log("Max age:", maxAge);
          
          // Finding median age
          const mid = Math.floor(ages.length / 2);
          const median = ages.length % 2 === 0 
              ? (ages[mid - 1] + ages[mid]) / 2 
              : ages[mid];
          console.log("Median age:", median);
          
          // Finding average age
          const sum = ages.reduce((acc, age) => acc + age, 0);
          const average = sum / ages.length;
          console.log("Average age:", average);
          
          // Finding the range
          const range = maxAge - minAge;
          console.log("Age range:", range);
          
          // Comparing min - average and max - average
          const minDiff = Math.abs(minAge - average);
          const maxDiff = Math.abs(maxAge - average);
          console.log("Min - Average:", minDiff);
          console.log("Max - Average:", maxDiff);

    Output :
      Sorted ages: [ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]
            Min age: 19
            Max age: 26
            Median age: 24
            Average age: 22.8
            Age range: 7
            Min - Average: 3.8
            Max - Average: 3.2



Q3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name.

  Ans. // Creating a Map to store contact details
const contacts = new Map();

// Adding contacts
contacts.set("Vishwa", { age: 25, email: "Vishwa@example.com", location: "New Delhi" });
contacts.set("Abhi", { age: 30, email: "Abhi@example.com", location: "Bhubaneswar" });
contacts.set("Ram", { age: 22, email: "Ram@example.com", location: "Lucknow" });

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {               // The .has(name) method in JavaScript is used to check whether a given key (name) exists in a Map.
        const details = contacts.get(name);
        console.log(`Name: ${name}`);
        console.log(`Age: ${details.age}`);
        console.log(`Email: ${details.email}`);
        console.log(`Location: ${details.location}`);
    } else {
        console.log("Contact not found.");
    }
}

// Example usage:
getContactDetails("Vishwa");
getContactDetails("Abhi");
getContactDetails("Shyam");  // Contact not found


  Output :

        Name: Vishwa
        Age: 25
        Email: Vishwa@example.com
        Location: New Delhi
        
        Name: Abhi
        Age: 30
        Email: Abhi@example.com
        Location: Bhubaneswar
        
        Contact not found.


Q4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.

  Ans.  const person1 = {
    name: "Abhi",
    age: 25
};

const person2 = {
    name: "Vishwa",
    age: 30
};

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Calling introduce for person1 normally
introduce.call(person1);  // Output: Hello, I'm Abhi, and I'm 25 years old.

// Using call() to make person2 introduce itself
introduce.call(person2);  // Output: Hello, I'm Vishwa, and I'm 30 years old.


Q5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.

  Ans. let uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3, 6]); // replace with your unique numbers
          let numberSquares = new Map();
          uniqueNumbers.forEach(num => numberSquares.set(num, num * num));
          console.log("Unique Numbers:");
          console.log(Array.from(uniqueNumbers).join(', '));
          numberSquares.forEach((square, num) => {
              console.log(`${num} => ${square}`);
          });

    Output :

    Unique Numbers: [ 1, 2, 3, 4, 5, 6 ]

            Number Squares:
            1 => 1
            2 => 4
            3 => 9
            4 => 16  
            5 => 25
            6 => 36


Q6. Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and
logs a message
  * Use call to invoke the displayInfo function with specific arguments.
  * Use apply to invoke the displayInfo function with arguments passed as an array.
  * Create another function named greet that logs a greeting with this context.
  * Use bind to create a new function boundGreet with a specific context and log the greeting.

Ans. // Function to display information
function displayInfo(name, role) {
    console.log(`Hello, my name is ${name} and I am a ${role}.`);
}

// Using call to invoke displayInfo
displayInfo.call(null, "Abhi", "Developer");

// Using apply to invoke displayInfo with arguments as an array
displayInfo.apply(null, ["Bibek", "Designer"]);

// Function to log a greeting using 'this' context
function greet() {
    console.log(`Hello, I am ${this.name}, and I work as a ${this.role}.`);
}

// Creating an object to use as 'this'
const person = { name: "Champ", role: "Manager" };

// Using bind to create a new function with 'this' bound to 'person'
const boundGreet = greet.bind(person);

// Invoking boundGreet
boundGreet();


  Output:

  Hello, my name is Abhi and I am a Developer.
  Hello, my name is Bibek and I am a Designer.
  Hello, I am Champ, and I work as a Manager.


Q7.  Tasks:

  * Create an object named calculator with methods add, subtract, and multiply.
  * Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or
    'multiply') and two numbers.
  * Use call to perform an addition operation using the calculate method.
  * Use apply to perform a multiplication operation using the calculate method with arguments as an array.
  * Create another object named discountCalculator with a discount percentage property and a method
    applyDiscount.
  * Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
    can be reused.


  Ans .  // Creating the calculator object with methods
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,

    // Calculate method that takes an operation and two numbers
    calculate: function (operation, a, b) {
        if (this[operation]) {
            return this[operation](a, b);
        } else {
            return "Invalid operation!";
        }
    }
};

// Using call() to perform addition
const addResult = calculator.calculate.call(calculator, "add", 5, 3);
console.log("Addition Result:", addResult); // Output: 8

// Using apply() to perform multiplication with arguments as an array
const multiplyResult = calculator.calculate.apply(calculator, ["multiply", 4, 6]);
console.log("Multiplication Result:", multiplyResult); // Output: 24

// Creating discountCalculator object
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function (price) {
        return price - (price * this.discountPercentage) / 100;
    }
};

// Using bind() to create a reusable function
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Using calculateDiscount
console.log("Discounted Price:", calculateDiscount(100)); // Output: 90


  Output :

  Addition Result: 8
  Multiplication Result: 24
  Discounted Price: 90

