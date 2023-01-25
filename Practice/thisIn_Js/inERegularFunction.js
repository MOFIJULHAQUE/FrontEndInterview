let obj = {
    name: "John",
    sayName: function() {
        console.log(this.name);
    }
};
obj.sayName(); // Output: "John"

// In JavaScript, when an object method is invoked, the "this" keyword inside the method refers to the object that the method is a property of.
// The sayName method is a property of the obj object, and when it's invoked, this inside the method refers to obj, so this.name evaluates to "John".

// It's important to note that the value of "this" can be reassigned using bind, call, or apply methods or if the method is passed as a callback function and invoked in a different context.

// In addition, when a constructor function is used to create an object, the "this" keyword inside the constructor function refers to the new object that is being created.

// this is a powerful tool in javascript to access the context of the function, but it can be tricky to understand and use it correctly, and it's important to keep in mind the context of the function and how it is invoked to avoid unexpected results.