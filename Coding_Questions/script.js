// obj1 = { a: 10 }
// const obj2 = obj1;
// obj2.a = 20;
// console.log(obj1);
// console.log(obj2);
// let obj1;//ReferenceError: Cannot access 'obj1' before initialization

//========================================================================================
// print mul(4)(5)(2) //40
// function mul(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }
// console.log(mul(4)(5)(2));

//========================================================================================

//Find the number of repeating 1
// let arr =[1,0,0,0,1,1,1,0,1,0,1];
// let ones = arr.filter((value)=>{
//     return value === 1;
// })
// console.log(ones.length);


//========================================================================================
// Find duplicate element in an array
// ------------------------------method1
// function findDuplicates(arr) {
//     console.log(arr.filter((item, index) => arr.indexOf(item) !== index));
// }
// findDuplicates([1, 2, 3, 1, 1, 2, 6, 4, 7])

// ------------------------------method2
// function findDuplicates(arr) {
//     let duplicateElements = [];
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             duplicateElements.push(arr[i]);
//         } else {
//             obj[arr[i]] = true;
//         }
//     }
//     return duplicateElements;
// }
// console.log(
//     findDuplicates([1, 2, 3, 1, 1, 5, 5, 2, 6, 4, 7])

// );

//========================================================================================
//Find the first repeating element in an array.
// function findFirstRepeating(arr) {
    // let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== undefined) {
//             return arr[i];
//         }
//         else {
//             arr[i] = i;
//         }
//     }
// }
// console.log(findFirstRepeating([1, 1, 3, 1, 5, 5, 2, 6, 4, 7]));


// Remove repating elements from array
// let arr = [1,2,4,2,1,4,8,5,4];

// let newArr = new Set(...[arr])
// console.log(newArr);