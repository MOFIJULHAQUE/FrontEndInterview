// function normalFn(n){
//   let sum = 0;
//   for(let i = 0;i<n;i++){
//     sum+=i;
//   }
//   return sum;

// }

// const memoize =(func)=>{

//   let cache ={};

//   return function(...args){
//     let n = args[0];

//     if( n in cache){
//       console.log("from cache")
//       return cache[n];
//     }else{
//       console.log("first time ")
//       let result = func(n);

//       cache[n] = result;

//       return result;

//     }
//   }

// }

// console.time()
// const output = memoize(normalFn);
// console.log(output(4))
// console.timeEnd()

// console.time()
// console.log(output(4))
// console.timeEnd()
// ====================================================================================================================================
// function func2(){
//   for(var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i),2000);
//     }
//     }
//     func2(); //3 3 3

// let a = 0; let b = false; console.log((a == b)); console.log((a === b));//true false

//
// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);
//   var x = 2;
//   let y = 12;
// }
// func1(); //2 , 12
