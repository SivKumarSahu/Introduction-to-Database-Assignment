Q1. Write a program that grades students based on their marks ?

Ans. function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
        return "B Grade";
    } else if (marks >= 50 && marks < 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Example :
let studentMarks = 85;
console.log(`Student scored ${studentMarks}: ${gradeStudent(studentMarks)}`);

Output :
Student scored 85: B Grade


Q2. Generate numbers between any 2 given numbers.

Ans. function generateNumbers(num1, num2) {
    let result = [];
    for (let i = num1 + 1; i <= num2; i++) {
        result.push(i);
    }
    return result.join(",");
}

// Example :
const num1 = 10;
const num2 = 25;
console.log(generateNumbers(num1, num2));

Output :
11,12,13,14,15,16,17,18,19,20,21,22,23,24,25



Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.

Ans. function checkNumber(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

// Example :
console.log(checkNumber(10));  // Output: Positive
console.log(checkNumber(-5));  // Output: Negative
console.log(checkNumber(0));   // Output: Zero



Q4. Describe the usage of the comma operator in JavaScript and provide an example.

Ans. The comma operator (,) in JavaScript allows you to evaluate multiple expressions in a single statement. It returns the value of the last expression while executing all expressions from left to right.
    Usage:
      1.Multiple expressions in a single statement
      2.Used in for loops to execute multiple expressions
      3.Grouping related expressions

  Examples :
        1. let result = (10, 20, 30); 
          console.log(result); // Output: 30 (last value)
          The comma operator evaluates 10, 20, and 30, but only 30 is returned.

        2. Shortening Code in return Statements
          let x = 5, y = 10;
          let sum = (x++, y++, x + y); 
          console.log(sum); // Output: 17 (x becomes 6, y becomes 11, sum = 6 + 11)
          The comma operator allows multiple expressions before returning a value.



Q5. You're creating a basic login system. Make a login function with two things: a username and a
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
successful"; if not, show "Invalid credentials."

Ans. function login(username, password) {
    return (username === "admin" && password === "12345") 
        ? "Login successful" 
        : "Invalid credentials";
}

// Example :
console.log(login("admin", "12345")); // Output: Login successful
console.log(login("user", "12345"));  // Output: Invalid credentials
console.log(login("admin", "wrong")); // Output: Invalid credentials


Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.

Ans.  function getProcessingFee(paymentMethod) {
    switch (paymentMethod.toLowerCase()) {        // .toLowerCase() ensures the input is case-insensitive.
        case "credit":
            console.log("Processing fee: 2%");
            break;
        case "debit":
            console.log("Processing fee: 1.5%");
            break;
        case "paypal":
            console.log("Processing fee: 3%");
            break;
        default:
            console.log("Invalid payment method. Please choose credit, debit, or PayPal.");
    }
}

// Example :
getProcessingFee("credit");  // Output: Processing fee: 2%
getProcessingFee("debit");   // Output: Processing fee: 1.5%
getProcessingFee("paypal");  // Output: Processing fee: 3%
getProcessingFee("cash");    // Output: Invalid payment method. Please choose credit, debit, or PayPal.


Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".

Ans. function getWeatherCondition(temperature) {
    return temperature > 30 ? "Hot" : "Moderate";
}

// Example :
console.log(getWeatherCondition(35)); // Output: Hot
console.log(getWeatherCondition(25)); // Output: Moderate
console.log(getWeatherCondition(30)); // Output: Moderate


Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.

Ans.  function sumUpTo(n) {
    let sum = 0, i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

// Example :
console.log(sumUpTo(5));  // Output: 15 (1+2+3+4+5)
console.log(sumUpTo(10)); // Output: 55 (1+2+...+10)





      


