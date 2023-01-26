// Async and await are two keywords in JavaScript that are used to handle asynchronous code. Asynchronous code is code that runs in the background while the main program continues to execute.

// Here is an example of using async and await to handle a promise:
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();

// In this example, the function getData() is declared as async. Inside the function, we use the await keyword to wait for the promise returned by the fetch function to resolve. Once the promise resolves, we can then use the json() method to parse the response and access the data.

// If there is an error, it will be caught by the catch block and logged to the console.

// It's important to note that async functions always return a promise, so if we need to access the value returned by an async function, we need to use the .then() method on the returned promise.


// This example is a simple way of handling asynchronous code and preventing callback hell.
