const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let sum_1 = sum(2, 4);
let sum_2 = sum(5, 2);
let product = multiply(sum_1,sum_2);
let subtraction = subtract(product, 2);
let division = divide(subtraction, 5);

console.log(sum_1);
console.log(sum_2);
console.log(product);
console.log(subtraction);
console.log(division);
