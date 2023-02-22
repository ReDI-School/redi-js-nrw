let numRandom = Math.floor(Math.random() * 100) + 1;
let pDiv = document.querySelector(".row");
let divAnswer = document.createElement("div");
pDiv.appendChild(divAnswer);
let numOfGuesses = 0;
function checkGuess() {
  console.log("numRandom : " + numRandom);
  let input = document.querySelector("#numberInput");
  divAnswer.textContent = "  ";
  const myOl = document.querySelector("#myOl");
  const newLi = document.createElement("li");
  myOl.appendChild(newLi);
  let inputNumber = parseInt(input.value);
  if (inputNumber >= 1 && inputNumber <= 100) {
    if (inputNumber < numRandom) {
      numOfGuesses++;
      divAnswer.textContent = `You guessed smaller guess again `;
    } else if (inputNumber > numRandom) {
      numOfGuesses++;
      divAnswer.textContent = `You guessed larger guess again `;
    } else {
      numOfGuesses++;
      divAnswer.textContent = `Correct answer you win with `;
    }
  } else {
    numOfGuesses++;
    divAnswer.innerHTML = `<b style ="color : red">Correct answer you win with ${numOfGuesses} tries </b>`;
  }
}
