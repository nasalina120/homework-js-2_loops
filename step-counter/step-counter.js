let sum = 0;
let dailySteps = 0;

while (true) {
  let input = prompt("dailySteps: ");

  if (input === null || input === "стоп") {
    alert(` End. Total sumDailySteps ${sum}`);
    break;
  }

  dailySteps = Number(input);
  sum += dailySteps;
  alert(`Total sumDailySteps ${sum}`);
}
