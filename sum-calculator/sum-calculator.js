const fistNum = Number(prompt("fistNum"));
const secondNum = Number(prompt("secondNum"));

const max = Math.max(fistNum, secondNum);
const min = Math.min(fistNum, secondNum);

let sum = 0;

for (let i = min; i <= max; i++) {
  sum += i;
}
console.log("sum :>> ", sum);
