const fistNum = Number(prompt("fistNum"));
const secondNum = Number(prompt("secondNum"));

const max = Math.max(fistNum, secondNum);
const min = Math.min(fistNum, secondNum);

let sum = 0;
let i = min;

// for (i = min; i <= max; i++) {
//   sum += i;
// }
// console.log("sum :>> ", sum);

do {
  sum += i;
  i++;
} while (i <= max);
console.log("sum :>> ", sum);
