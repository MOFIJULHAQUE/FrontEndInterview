

// Shallow copy and deep copy are two ways of copying an object in JavaScript.

// Shallow Copy: A shallow copy is a bit-wise copy of an object. It means that any changes made to the original object will be reflected in the shallow copy. For example, if we have an array with two objects, and we make a shallow copy of it, both the original array and the shallow copy will point to the same objects.

let arr1 = [{ a: 1 }, { b: 2 }];
let arr2 = arr1;
arr2[0].a = 3;
console.log(arr1,"shallow copy"); // [{a:3}, {b:2}] 
console.log(arr2,"shallow copy"); // [{a:3}, {b:2}] 


// Deep Copy: A deep copy creates a new instance of the original object and any changes made to it will not affect the original object. For example, if we have an array with two objects, and we make a deep copy of it, both the original array and the deep copy will point to different objects. 

let arr3 = [{ a: 1 }, { b: 2 }];
let arr4 = JSON.parse(JSON.stringify(arr1));
arr4[0].a = 3;
console.log(arr3,"deep copy"); // [{a:1}, {b:2}] 
console.log(arr4,"deep copy"); // [{a:3}, {b:2}]