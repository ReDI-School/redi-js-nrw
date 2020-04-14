// this returns a random number between 1 and max (inclusive)
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// we guess numbers from 1..100
let maxRandomNumber = 100;

// the initial secret number our user needs to guess
let secretNumber = getRandomNumber(maxRandomNumber);

// get variables of our HTML Elements
let inputElement = document.getElementById("guess");
let divElement = document.getElementById("result");
let previousElement = document.getElementById("previousGuesses");

// An Array of all the previous guesses
let previousGuesses = [];

// This is really tricky :) Try to figure out what I'm doing here :)
function suggest() {
  let min = 1;
  let max = 100;
  for (let i = 0; i < previousGuesses.length; i++) {
    if (previousGuesses[i] < secretNumber && previousGuesses[i] > min) {
      min = previousGuesses[i];
    }
    if (previousGuesses[i] > secretNumber && previousGuesses[i] < max) {
      max = previousGuesses[i];
    }
  }
  let suggestion = Math.floor((max + min) / 2);
  inputElement.value = suggestion;
}

// Our main "game" function
function guessNumber() {

  if (inputElement.value === "") {
    // ignore empty input
    return;
  }

  let guess = parseInt(inputElement.value)

  // remember the previous guesses
  previousGuesses.push(guess);

  // update our previous guesses list
  let liElement = document.createElement("li");
  liElement.textContent = inputElement.value;
  previousElement.appendChild(liElement);

  // update our <div> element
  if (secretNumber > guess) {
    divElement.textContent = "Secret number is larger";
  } else if (secretNumber < guess) {
    divElement.textContent = "Secret number is smaller";
  } else {
    divElement.textContent = "YOU WON with " + previousGuesses.length + " tries";
  }
}

function newGame() {
  secretNumber = getRandomNumber(maxRandomNumber);
  previousGuesses = [];
  previousElement.innerHTML = "";
  divElement.textContent = "";
}

