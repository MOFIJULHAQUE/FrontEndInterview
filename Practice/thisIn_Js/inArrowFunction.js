// In JavaScript, arrow functions do not have their own "this" value. Instead, they inherit the "this" value from the surrounding scope.

// For example:

let obj = {
    name: 'John',
    sayName: () => {
        console.log(this.name);
    }
};

obj.sayName(); // undefined (instead of "John")

//   In the example above, the arrow function sayName is a method of the obj object. However, because the arrow function does not have its own "this" value, it inherits the "this" value from the global scope, which is undefined instead of the obj object.

// This can be overcome by using the bind() method to explicitly bind the this value to the object

let obj1 = {
    name: 'John',
    sayName: () => {
        console.log(this.name);
    }
};

let arrowSayName = obj1.sayName.bind(obj1);
arrowSayName()// 'John'

//   It's important to understand the behavior of this keyword when it comes to arrow functions because it can lead to unexpected results and bugs in your code if you're not careful.