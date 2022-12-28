var person1 = { firstName: "Titis", lastName: "Roy" };
var person2 = { firstName: "Java", lastName: "Script " };

function newfunction(para1, para2) {
  console.log(
    para1 + " " + this.firstName + " " + "and" + " " + para2 + this.lastName
  );
}
newfunction.apply(person2, ["Your First Name is :- ", "Your Last Name is :- "]);
newfunction.apply(person1, ["Your First Name is :- ", "Your Last Name is :- "]);