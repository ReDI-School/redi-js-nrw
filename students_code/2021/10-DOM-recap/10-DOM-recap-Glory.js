// const changeColor = document.querySelector(".change");
// const wordy = document.querySelector(".word");
// console.log(wordy);
// changeColor.addEventListener("click", function (e) {
//   e.preventDefault();
//   const use = wordy.value;
//   //   console.log(use);
//   document.body.style.backgroundColor = use;
//   //   wordy.onfocus = ''
//   wordy.value = "";
// });
const myDiv = document.querySelector("#myDiv");
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector("#myButton");

function changeColor() {
  const colorValue = myInput.value;
  myDiv.style.backgroundColor = colorValue;
  myDiv.textContent = `${colorValue}!!!`;
  myInput.value = "";
}