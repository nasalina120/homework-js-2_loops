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
  const DIFFERENCE = Math.abs(NUMBER_PROG - numberUser);

  if (DIFFERENCE === 0) {
    alert(`Goood result`);
  } else if (DIFFERENCE <= 3) {
    alert(`Hot`);
  } else {
    alert(`Cold`);
  }
}
