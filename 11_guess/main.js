let secretNumber = 42;

let inputElement = document.getElementById("guess");
let divElement = document.getElementById("result");

function guessNumber() {
  if (secretNumber > inputElement.value) {
    divElement.textContent = "Secret number is larger";
  } else if (secretNumber < inputElement.value) {
    divElement.textContent = "Secret number is smaller";
  } else {
    divElement.textContent = "YOU WON!!!";
  }
}
