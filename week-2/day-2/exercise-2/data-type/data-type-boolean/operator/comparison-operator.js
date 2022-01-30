// ==, !=, ===, !==, <, >, <=, >=

var equalOperator1 =  (5 == 5);
var equalOperator2 = (5 == 1);

console.log(equalOperator1);
console.log(equalOperator2);

let notEqualOperator1 = (10 != 9);
let notEqualOperator2 = (10 != 10)

console.log(notEqualOperator1);
console.log(notEqualOperator2);

const strictEqualOperator = 10;

console.log(strictEqualOperator == 10);
console.log(strictEqualOperator === 10);
console.log(strictEqualOperator === "10");

var strictNotEqualOperator = "8";

console.log(strictNotEqualOperator != 7);
console.log(strictNotEqualOperator !== 7);
console.log(strictNotEqualOperator !== 8);
console.log(strictNotEqualOperator !== "8");