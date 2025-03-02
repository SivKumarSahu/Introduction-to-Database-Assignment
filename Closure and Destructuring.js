1. You are building a counter application that tracks the number of times a button is clicked. Implement the
counter using closure.


  Ans.   function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

const counter = createCounter();
counter(); // Button clicked 1 times
counter(); // Button clicked 2 times
counter(); // Button clicked 3 times



2. You have an object representing a customer order with properties orderId, productName, and quantity.
Use destructuring to extract and print these properties.


  Ans.   let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};

// Destructuring the object
const { orderId, productName, quantity } = order;

console.log(`Order ID: ${orderId}`);
console.log(`Product Name: ${productName}`);
console.log(`Quantity: ${quantity}`);


  Output :
  Order ID: 123456
  Product Name: Laptop
  Quantity: 2




3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures
try to create a cart array and return a function to getCartItems.


  Ans.  function shoppingCart() {
    let cart = []; // Private array

    return {
        getCartItems: function() {
            return cart;
        },
        addItem: function(item) {
            cart.push(item);
            console.log(`${item} added to cart`);
        }
    };
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems()); // Output: Cart Items: []
cart.addItem("Laptop");
console.log('Cart Items:', cart.getCartItems()); // Output: Cart Items: ["Laptop"]




4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
javascript closures to achieve the output.


  Ans.   function shoppingCart() {
    let cart = []; // Private cart array

    return {
        getCartItems: function() {
            return cart;
        },
        addItem: function(product) {
            // Check if product already exists in cart
            let existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                // If product exists, increment quantity
                existingProduct.quantity++;
            } else {
                // Otherwise, add new product with quantity 1
                cart.push({ ...product, quantity: 1 });
            }
        }
    };
}

// Create cart instance
const cart = shoppingCart();

console.log('Cart Items:', cart.getCartItems()); // Output: []

const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems());

// Expected Output:
// Cart Items: [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//   { id: 2, name: 'Product 2', price: 20, quantity: 1 }
// ]





5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
calling the remove item closure function, the specified productId item must be removed from cartItems
array.Use javascript closures to achieve the output.


    Ans.  function shoppingCart() {
    let cart = []; // Private cart array

    return {
        getCartItems: function() {
            return cart;
        },
        addItem: function(product) {
            let existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
        },
        removeItem: function(productId) {
            cart = cart.filter(item => item.id !== productId); // Remove item by filtering
        }
    };
}

// Create cart instance
const cart = shoppingCart();

console.log('Cart Items:', cart.getCartItems()); // Output: []

const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems());
// Expected Output:
// Cart Items: [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//   { id: 2, name: 'Product 2', price: 20, quantity: 1 }
// ]

cart.removeItem(2);

console.log('Cart Items:', cart.getCartItems());
// Expected Output:
// Cart Items: [ { id: 1, name: 'Product 1', price: 10, quantity: 2 } ]



6. You are developing a music playlist management system. Implement functions that leverage closures
and higher-order functions to perform common playlist operations.
  
Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
closure should allow adding and listing songs for the given playlist.
  
Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
specified playlist. Use the closure created in TASK 1.

Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
Task 1



    Ans.  // Task 1: Create Playlist
        function createPlaylist(name) {
             let songs = []; // Private array to store songs

        return {
              getName: function() {
              return name;
        },
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },
        listSongs: function() {
            let songList = songs.map(song => `${song.songName} by ${song.artist}`).join(", ");
            console.log(`${name} Playlist: ${songList}`);
        }
    };
}

// Task 2 & 3: Adding songs and listing them
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

function listSongs(playlist) {
    playlist.listSongs();
}

// Example Usage
const myPlaylist = createPlaylist("My Favorites");

addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist);
// Output: My Favorites Playlist: Song1 by Artist1, Song2 by Artist2, Song3 by Artist3

  










