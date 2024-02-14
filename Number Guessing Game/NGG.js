const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;

while (true) {
  let guess = prompt(`Guess a number between ${minNum} and ${maxNum}:`);

  if (guess === null || guess === "") {
    alert("Please enter a valid number.");
    continue;
  }

  guess = Number(guess);

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    alert("Please enter a valid number within the specified range.");
  } else {
    attempts++;

    if (guess === answer) {
      alert(`Correct! You guessed the number in ${attempts} attempts.`);
      break;
    } else if (guess < answer) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }
}
