let counter = 0;

let functionCallingNow;
const myThrottling = (functionCalling, delay) => {
  if (functionCallingNow) return;
  functionCallingNow = true;
  setTimeout(() => {
    functionCalling();
    functionCallingNow = false;
  },delay);
};

const newFunction = () => {
  myThrottling(() => {
    console.log("User click the button" + counter++);
  },5000);
};
