const randomNumber = Math.floor(Math.random() * 100) + 1;
const form = document.getElementById("form");
console.log('Random Number', randomNumber)
const previousGuesses = document.getElementById('previousGuesses');

function addGuess(myGuess) {
  let entry = document.createElement('li');
  entry.textContent = `Guess: ${myGuess}`;
  previousGuesses.appendChild(entry);
  entry.textContent = entry.textContent + "!!!";
}


function checkGuess(e) {
  e.preventDefault();
  let myGuess = guess.value;

  addGuess(myGuess);

  if (myGuess === randomNumber) {
    feedback.textContent = "You got it right!"
  } else if (myGuess > randomNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
  } else if (myGuess < randomNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
  }
}



form.addEventListener('submit', checkGuess)

