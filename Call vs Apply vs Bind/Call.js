// The call() method in JavaScript is a method of the Function object. It allows you to call a function with a specified 'this' value and arguments provided individually.


var person1 = { firstName: "Titis", lastName: "Roy" };
var person2 = { firstName: "Java", lastName: "Script " };

function newfunction(para1, para2) {
  console.log(
    para1 + " " + this.firstName + " " + "and" + " " + para2 + this.lastName
  );
}
newfunction.call(person1, "Your First Name is :- ", "Your Last Name is :- ");
newfunction.call(person2, "Your First Name is :- ", "Your Last Name is :- ");
