// const input = document.querySelector("#input");
// const add = document.querySelector("#add");
// const dlt = document.querySelector("#delete");

// // input.innerText

// function add(){
// alert("hi");
// }
// function clear(){

// }

// add.addEventListner("click",add);









//promise
// const promise = new Promise();

// promise.then()

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner()
}
console.log(outer());