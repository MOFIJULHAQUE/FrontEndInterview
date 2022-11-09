//1. map vs forEach

// const array = [1, 2, 3, 4, 5, 6, 8, 1];

// const map = array.map((item) => {
//   return item + 4;
// });
// const forEach = array.forEach((data, i) => {
//   array[i] = data + 10;
// });

// console.log(map, forEach,array);
// ################################################################################################################

//2.null vs undefined

// let a;
// console.log(a);  //undefined

// console.log(b);// b is not defined

// let c = null;
// console.log(c); // null
// ################################################################################################################

//3. Event delegation
//Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

//this code represent if we clik the targeted or untargeted element then it will reflect the whole element
// document.querySelector("#product").addEventListener("click",(event)=>{

//this code represent if we clik the targeted  element then it will reflect that  clicked eleemnt
//     if(event.target.tagName === "li"){
//         window.location.href += "#"+event.target.id;
//     }
// })

//
// ################################################################################################################

//4.Flatten the Array
// let array = [
//   [1, 2],
//   [3, [4, 5, 6, [7, 8]]],
//   [9, 10],
// ];
//this is inbuilt method
// console.log(array.flat(3));

//custom method (not understand this custom method)( if we not put depth > 0 and depth - 1 then also this program work as same why)
// function customFlatten(array, depth = 3) {
//   let result = [];
//   array.forEach((item) => {
//     if (Array.isArray(item) && depth > 0) {
//       result.push(...customFlatten(item, depth - 1));
//     }else{
//         result.push(item);
//     }
//   });
//   return result;
// }
// console.log(customFlatten(array));
// ################################################################################################################
//5. let vs var vs const

//---------------var
// {
//     var a=10;
// }
// console.log(a); //10
// var a =10;
// var a=12;//no error

//-------------let
// {
//     let a=10;
// }
// console.log(a); //a is not defined

// let a =10;
// let a=12;// Identifier 'a' has already been declared

//-------------const
// {
//     const a=10;
// }
// console.log(a); //a is not defined

// const a =10;
// const a =12;//a is not defined
// ################################################################################################################
//6. setTimeOut

// function SetTimeOut() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// SetTimeOut() // print 3 ,three times because of var does't have a block scope it's functional scope (How to print 0,1,2 using var ? ).







// function SetTimeOut() {
//     for (let i = 0; i < 3; i++) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
//   SetTimeOut() // 0,1,2

// ################################################################################################################
//7. call vs apply vs bind
// -------------------------------call
// eg:1
// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };
// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }
// invite.call(employee1, "Hello", "How are you?"); //Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); //Hello Jimmy Baily, How are you?
// eg:2
// var person = {
//   name: "Mofijul",
//   hello: function (thing) {
//     console.log(this.name + " says hello " + thing);
//   },
// };
// var person2 = {
//   name: "Haque",
// };
// person.hello.call(person2, "world");
// -------------------------------apply
// eg:1
// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };
// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }
// invite.apply(employee1, ["Hello", "How are you?"]); //Hello John Rodson, How are you?
// invite.apply(employee2, ["Hello", "How are you?"]); //Hello Jimmy Baily, How are you?
// eg:2
// var person = {
//   name: "Mofijul",
//   hello: function (thing) {
//     console.log(this.name + " says hello " + thing);
//   },
// };
// var person2 = {
//   name: "Haque",
// };
// person.hello.apply(person2,[ "world"]);
// -------------------------------bind
// eg:1
// var person = {
//   name: "Mofijul",
//   hello: function (thing) {
//     console.log(this.name + " says hello " + thing);
//   },
// };
// var person2 = {
//   name: "Haque",
// };
// const bnd = person.hello.bind(person2);
// bnd("world");
// // eg:2
// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };
// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }
// let bnd2 = invite.bind(employee1);
// let bnd3 = invite.bind(employee2);

// bnd2("Hello", "How are you?"); //Hello John Rodson, How are you?
// bnd2("Hello", "How are you?"); //Hello Jimmy Baily, How are you?
