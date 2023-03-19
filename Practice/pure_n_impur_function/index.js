

// Pure Function: 

// A pure function is a function that, given the same input, will always return the same output and does not cause any observable side effects. An example of a pure function in JavaScript is: 

function add(x, y) {
    return x + y;
}
console.table(add(4,7))

// Impure Function: 

// An impure function is a function that, given the same input, may not always return the same output and can cause observable side effects. An example of an impure function in JavaScript is: 

let counter = 0;
function incrementCounter() {
    counter++;
    console.log(counter);
}
console.log(incrementCounter());