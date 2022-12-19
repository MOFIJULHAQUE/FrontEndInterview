var person1 = { firstName: "Titis", lastName: "Roy" };
var person2 = { firstName: "Java", lastName: "Script " };

function newfunction(para1, para2) {
  console.log(
    para1 + " " + this.firstName + " " + "and" + " " + para2 + this.lastName
  );
}

var forPerson1 = newfunction.bind(person1);
forPerson1("Your First Name is :- ", "Your Last Name is :- ");

var forPerson2 = newfunction.bind(person2);
forPerson2("Your First Name is :- ", "Your Last Name is :- ");
