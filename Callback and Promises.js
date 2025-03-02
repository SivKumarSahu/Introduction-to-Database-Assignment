Assignment 1 :

Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
a delay of 1 second.

  Ans.  function sumAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}

// Example usage
sumAsync(5, 7, (result) => {
    console.log("Sum:", result); // Output after 1 second: Sum: 12
});


Assignment 2 :

Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
"Data fetched successfully."


  Ans.  function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}

// Example usage
getData().then(message => {
    console.log(message); // Output after 2 seconds: Data fetched successfully.
});



Assignment 3 :

Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.


  Ans.  async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse response as JSON
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log("Fetched Data:", data));


  Output:
  Fetched Data: {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}



Assignment 4:

Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (jsonplaceholder.typicode.com/todos/1) and returns the parsed JSON response.


  Ans.  async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse response as JSON
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log("Fetched Data:", data));


Assignment 5 :

Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
function should multiply each element of the array by 2 and pass the result to the callback.


  Ans.  function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(num => num * 2); // Multiply each element by 2
    callback(result); // Pass the result to the callback function
}

// Example usage
multiplyWithCallback([1, 2, 3, 4, 5], function(result) {
    console.log("Multiplied Array:", result);
});

Output:
Multiplied Array: [2, 4, 6, 8, 10]



Assignment 6 :

Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
fetched. Return an object with user details and posts.


  Ans.   function fetchUserDataAndPosts(userId) {
      const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

      return fetch(userUrl) // Fetch user details first
            .then(response => {
              if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            return response.json();
        })
        .then(user => {
            return fetch(postsUrl) // Fetch posts after user details
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch posts");
                    }
                    return response.json();
                })
                .then(posts => {
                    return { user, posts }; // Return user details and posts
                });
        })
        .catch(error => {
            console.error("Error:", error);
            return null; // Return null in case of an error
        });
}

// Example usage
fetchUserDataAndPosts(1).then(data => console.log(data));


  Output:
  {
  "user": {
    "id": 1,
    "name": "Shiva",
    "username": "Badri",
    "email": "srk@gmail.com",
    ...
  },
  "posts": [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit..."
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae..."
    },
    ...
  ]
}




Assignment 7 :
    
Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the
URLs concurrently. Return an array of responses.


  Ans.  function fetchMultipleData(urls) {
    return Promise.all(urls.map(url => 
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${url}`);
            }
            return response.json();
        })
    ))
    .then(results => results)
    .catch(error => {
        console.error("Error:", error);
        return [];
    });
}

// Example usage
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];

fetchMultipleData(urls).then(data => console.log(data));



    Output:
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
]



Assignment 8 :

Create a function racePromises that takes an array of promises and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this.


  Ans.   function racePromises(promises) {
    return Promise.race(promises)
        .then(result => {
            console.log("First resolved promise:", result);
            return result;
        })
        .catch(error => {
            console.error("First rejected promise:", error);
            throw error;
        });
}

// Example usage
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 3000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 1000));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Promise 3 rejected"), 2000));

racePromises([promise1, promise2, promise3])
    .then(result => console.log("Race result:", result))
    .catch(error => console.log("Race error:", error));


    Output:

    Since promise2 resolves first after 1 second, we get:
    First resolved promise: Promise 2 resolved
    Race result: Promise 2 resolved

    If promise3 were faster, it would log:
    First rejected promise: Promise 3 rejected
    Race error: Promise 3 rejected
















  
