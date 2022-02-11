// Вариант для промежутка 1 и 10

// const start = 2;
// const end = 10;

// function getPrimes(start, end) {
// nextPrime: for (let i = start >= 2 ? start : 2; i <= end; i++) {
//     // для всех i ...
//   for (let j = 2; j < i; j++) {
//       // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//  console.log(i) // простое число
//     }
// }

// console.log(getPrimes(2, 10));

// Вариант для промежутка 20 и 100

const start = 20;
const end = 100;

function getPrimes(start, end) {
nextPrime: for (let i = start >= 2 ? start : 2; i <= end; i++) {
    // для всех i ...
  for (let j = 2; j < i; j++) {
      // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

 console.log(i) // простое число
    }
}

console.log(getPrimes(20, 100));