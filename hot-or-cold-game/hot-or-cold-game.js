//  Програма випадковим чином загадує число від 1 до 20 (Math.floor(Math.random() * 20) + 1).
// Користувач через prompt намагається його вгадати у вічному циклі.
// Цикл працює доти, доки користувач не вгадає число АБО поки не натисне кнопку «Скасувати» у вікні prompt.

const NUMBER_PROG = Math.floor(Math.random() * 20) + 1;
let numberUser = null;
let iscorect = false;

while (!iscorect) {
  alert(`numberRandom: ${NUMBER_PROG}`);

  const userInput = prompt("Number");

  if (userInput === null) {
    alert(`End`);
    break;
  }

  numberUser = Number(userInput);
  iscorect = NUMBER_PROG === numberUser;
}

console.log(" Goood result");
