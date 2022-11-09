let counter = 0;
function getData() {
  console.log("fetching" + counter++);
}
function myDebouncing(functionCall, delay) {
  let timer;
  return function (...argument) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      functionCall();
    }, delay);
  };
}

const newFunction = myDebouncing(getData,2000);
