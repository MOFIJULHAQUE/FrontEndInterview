let display = document.querySelector(".display");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

let count = 0;
let interval;

const handleStart = () => {
  interval = setInterval(() => {
    count += 1;
    display.innerText = count;
  }, 1000);
};

const handleStop = () => {
  clearInterval(interval);
};

start.addEventListener("click", handleStart);
stop.addEventListener("click", handleStop);

