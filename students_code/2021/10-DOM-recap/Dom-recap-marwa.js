
function changeColor() {
  let input = document.querySelector('#colorInput');
  let div = document.querySelector('#changedArea');
  let color = input.value;
  div.style.backgroundColor = color;
  input.value = '';
  div.textContent = `This is your color: ${color}!!!`;

}