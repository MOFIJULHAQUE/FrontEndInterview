//Memoization is a optimization technique by we can reduce the time consumption calculaation by saving previous input in something called "cache" and returning the result from it.
function normalFn(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
//
const memoIze = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n]; //here we pass the key
    } else {
      console.log("First time");
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const finalResult = memoIze(normalFn);
console.log(finalResult(5));
console.timeEnd();


console.time();
console.log(finalResult(87));
console.timeEnd();

