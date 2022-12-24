//Call back Function ---- I can't able to answer it

//eg-1
// let x = 2;
// function first(){
//   console.log("a")
// }

// first(function (){
// });
//eg-2
// setTimeout(() => {
//     console.log("Timer");
// }, 2000);
//___________________________________________________________________________________

//Closure---able to answer
//eg-1
// function first(){
//   let element = 20;

//   function second (){
//     console.log(element);
//   }
//   second()
// }
// first();
//___________________________________________________________________________________

//Currying
//wrong example
// function outer(){
//   function inner(x){
//     console.log(x)
//   }
// }
// outer()(2);

//correct example :
// eg-1
// const curryingFunction = (first) => (second) => (third) => {
//   return first + second + third;
// };
// console.log(curryingFunction(20)(30)(40));


// eg-2
const curryingFunction = (first,second,third)=>{
    return first+second+third;
}
console.log(curryingFunction(1,2,30));