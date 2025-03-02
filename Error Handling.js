1. You are developing the error handling mechanism for an online shopping cart application. The
application allows users to add products to their cart and proceed to checkout. Implement error
handling to address different types of errors that might occur during the shopping process.


  Ans.  // Shopping cart array to store products
        const cart = [];

        // Task 1: Add Product to Cart Function
        function addToCart(name, price, quantity) {
            if (!name) {
                throw new Error("Product name is required.");
          }
    if (typeof price !== "number" || price <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    // Add product to cart
    cart.push({ name, price, quantity });
    console.log(`Added ${name} to cart.`);
}

// Task 2: Checkout Function
function checkout() {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }
    console.log("Checkout successful. Proceeding to payment...");
}

// Testing the functions with error handling
try {
    addToCart("Laptop", 1200, 2);
    addToCart("", 30, 1);  // Should throw: "Product name is required."
    addToCart("Mouse", -15, 3); // Should throw: "Invalid product price."
    addToCart("Keyboard", 50, "abc"); // Should throw: "Invalid quantity."

    checkout();  // Should throw an error if cart is empty
} catch (error) {
    console.error(error.message);
}




2. You are working on a user authentication module for a web application. Implement error handling for the
login process.Create a function login that simulates the user login process. The function should take the
username and password as parameters and throw errors under certain conditions:
-> If the username is not provided, throw an error indicating "Username is required.
-> If the password is not provided, throw an error indicating "Password is required.
-> If the username and password do not match any valid credentials, throw an error indicating "Invalid username or password."



Ans:  
    const validUsers = {
    "user123": "password123",
    "user456": "password456"
};

// Login function with error handling
function login(username, password) {
    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }
    if (!validUsers[username] || validUsers[username] !== password) {
        throw new Error("Invalid username or password.");
    }

    console.log("Login successful!");
}

// Testing the function with error handling
try {
    login("user123", "password123"); // Should log: "Login successful!"
    login("", "password456"); // Should throw: "Username is required."
    login("user456", ""); // Should throw: "Password is required."
    login("invalidUser", "invalidPassword"); // Should throw: "Invalid username or password."
} catch (error) {
    console.error(error.message);
}




3. You are developing a payment processing module for an e-commerce platform. Implement error
handling for the payment transaction process.Create a function processPayment that simulates
processing a payment transaction. The function should take payment details (amount, card number,
expiration date) as parameters and throw errors under certain conditions:

-> If the payment amount is not a positive number, throw an error indicating "Invalid payment amount.
-> If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid
card number.
-> If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."



    Ans.    function processPayment(amount, cardNumber, expirationDate) {
    // Validate payment amount
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    // Validate card number using a simple regex pattern for credit cards
    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardNumber || !cardNumberPattern.test(cardNumber)) {
        throw new Error("Invalid card number.");
    }

    // Validate expiration date (format: MM/YY)
    const currentDate = new Date();
    const [expMonth, expYear] = expirationDate.split("/").map(Number);
    const expDate = new Date(`20${expYear}`, expMonth - 1); // Convert to full year

    if (!expirationDate || isNaN(expMonth) || isNaN(expYear) || expDate < currentDate) {
        throw new Error("Invalid expiration date.");
    }

    console.log("Payment processed successfully!");
}

// Testing the function with different cases
try {
    processPayment(50.25, "1234-5678-9012-3456", "12/25"); // Should log: "Payment processed successfully!"
    processPayment(-10, "invalidCardNumber", "05/22"); // Should throw: "Invalid payment amount." and "Invalid card number."
    processPayment(100.75, "9876-5432-1098-7654", "01/20"); // Should throw: "Invalid expiration date."
} catch (error) {
    console.error(error.message);
}






