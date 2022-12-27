let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let number = document.querySelector("#number");

let count = 0;
number.innerText = count;

const printNumber = () => {
  number.innerText = count;
};

const incrementCounter = () => {
  count = count + 1;
  printNumber();
};

const decrementCounter = () => {
  count = count - 1;
  printNumber();
};

increment.addEventListener("click", incrementCounter);
decrement.addEventListener("click", decrementCounter);
