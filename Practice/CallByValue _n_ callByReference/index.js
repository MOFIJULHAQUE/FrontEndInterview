// Call by Value:

//It's only used with primitive datatype like string ,number,boolean etc. 
// In call by value, the value of the argument is copied to the parameter of the function. Any changes made to the parameter inside the function does not affect the argument outside the function.

// Example 1: 
// let x = 10;

// function change(x) {
//    return x = 20;
// }

// console.log(change(x));  // calling change function 
// console.log(x); // Output: 10 (unchanged)

// Example 2:
// let x =10;
// let y =x;
// y = 30;
// console.log(x);//10
// console.log(y);//30

// ===================================================================================

// Call by Reference: 

//it's only used with non-primitive datatype array,object.
// In call by reference, a reference to an argument (not the value of the argument) is passed to a parameter of a function. Any changes made to the parameter inside a function affects the argument outside of it. 
// Example 1: 

// let y = { a: 10 };  // object x with property a and value 10  

// function change(x) {  // passing object x as an argument  
//     y.a = 20;        // changing property a of object x to 20  
// }
// change(y);        // calling change function  

// console.log(y);     // Output: {a : 20} (changed)

//Example 2 :


// let obj = {
//     name: "mango",
//     age: 12,
// }

// let obj2 = obj;
// obj2.age = 15;
// console.log(obj);
// console.log(obj2);