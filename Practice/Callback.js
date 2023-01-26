// A callback in JavaScript is a function that is passed as an argument to another function and is executed after the outer function has completed its task.

// For example, let's say we have a function called "getData" that retrieves data from a server. We want to display this data on the page after it is retrieved, so we pass a callback function as an argument to "getData" that will handle the display of the data.




// function getData(callback) {
//     // code to retrieve data from server
//     let data = "Retrieved Data";

//     // execute callback function with data as the argument
//     callback(data);
//   }

//   function displayData(data) {
//     console.log(data);
//   }

//   getData(displayData); // logs "Retrieved Data" to the console



//   In this example, the "displayData" function is passed as a callback to the "getData" function. When "getData" retrieves the data from the server, it executes the "displayData" function, passing the retrieved data as an argument. This allows us to separate the logic of retrieving the data from the logic of displaying the data, making the code more modular and easier to maintain.











function getData(parameter) {
    let data = "mango";
    parameter(data);

}

function newFunction(data) {
    console.log(data,"<------come from getData function");
}

getData(newFunction);