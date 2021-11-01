const myDiv = document.querySelector("#myDiv");
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector("#myButton");

function changeColor() {
  const colorValue = myInput.value;
  myDiv.style.backgroundColor = colorValue;
  myDiv.textContent = `This is the color you chose: ${colorValue}!!!`;
  myInput.value = "";
}