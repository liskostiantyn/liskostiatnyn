// Варіант 1

// function calculate(a, b = 2) {
//     return a ** b;
// }

// const res = calculate(2, 4);
// console.log('res', res);

// Варіант 2

// const calculate = (a, b = 2) => {
//     return a ** b;
// }

// const res = calculate(2, 3);
// console.log('res', res);

// Варіант 3

const calculate = (a, b = 2) => a ** b;
const res = calculate(3, 3);
console.log('res', res);