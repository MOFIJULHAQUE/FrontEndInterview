// var person1 = { firstName: "Titis", lastName: "Roy" };
// var person2 = { firstName: "Java", lastName: "Script " };

// function newfunction(para1, para2) {
//   console.log(
//     para1 + " " + this.firstName + " " + "and" + " " + para2 + this.lastName
//   );
// }

// var forPerson1 = newfunction.bind(person1);
// forPerson1("Your First Name is :- ", "Your Last Name is :- ");

// var forPerson2 = newfunction.bind(person2);
// forPerson2("Your First Name is :- ", "Your Last Name is :- ");
// console.log(person2);


const firstPerson = {
  firstName: "Mofijul",
  lastName: "Haque",
}
const secondPerson = {
  firstName: "Be a",
  lastName: "Dev.",
}
function helperFunction(para1, para2) {
  console.log(para1 + " " + this.firstName + " " + ",and" + " " + para2 + " " + this.lastName);
}

const forFirstPerson = helperFunction.bind(firstPerson);
forFirstPerson("Your first name is :- ", "Your last name is :- ")


const forSecondPerson = helperFunction.bind(secondPerson);
forSecondPerson("Your first name is :- ", "Your last name is :- ")

