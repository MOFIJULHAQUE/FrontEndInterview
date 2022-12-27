const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 2, 3, 4, 5, 6, 7];
const array3 = [1, 2, 3, 4, 5, 6, 7];

console.log("First Operation :", array1.splice(0, 2)); //First Operation : [ 1, 2 ]
console.log("First Operation :", array1);//First Operation : [ 3, 4, 5, 6, 7 ]
console.log("Second Operation :", array2.splice(4)); //Second Operation : [ 7 ]
console.log("Second Operation :", array2);//Second Operation : [ 1, 2, 3, 4 ]
console.log("Third Operation :", array3.splice(3,1,'a')); //Third Operation : [ 4 ]
console.log("Third Operation :", array3);//Third Operation : [1, 2, 3, 'a',5, 6, 7]
console.log("Fourth Operation :", array3.splice(3,2,'b','c')); //Third Operation :  [ 'a', 5 ]
console.log("Fourth Operation :", array3);//Third Operation :  [1,2, 3, 'b','c', 6, 7]
