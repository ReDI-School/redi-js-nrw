const myDiv = document.querySelector("#myDiv");
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector("#myButton");

function changeColor() {
  const colorValue = myInput.value;
  myDiv.style.backgroundColor = colorValue;
  myDiv.textContent = `This is the color ${colorValue} you choose!!!`;
  myInput.value = "";

  // we put the tag in the () of createElement
  let itemElement = document.createElement("li");
  itemElement.textContent = "I am new item! " + colorValue;

  let listElement = document.getElementById("colorList");
  //this means add itemElement as a child of listElement
  listElement.appendChild(itemElement);
}