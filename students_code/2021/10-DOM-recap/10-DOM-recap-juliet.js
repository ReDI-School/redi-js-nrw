const myDiv = document.querySelector("#myDiv");
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector("#myButton");

function changeColor() {
  const colorValue = myInput.value;
  myDiv.style.backgroundColor = colorValue;
  myDiv.textContent = "I changed the text!";
}