function setBackground() {
  let inputElement = document.getElementById("colorInput");
  let color = inputElement.value;
  let divElement = document.getElementById("myDiv");
  divElement.style.backgroundColor = color;

  inputElement.value = '';
  divElement.textContent = color;

  let itemElement = document.createElement('li');
  itemElement.textContent = color;
  itemElement.style.backgroundColor = color;
  itemElement.onclick = function () {
    console.log('clicked on the item');
    divElement.style.backgroundColor = color;
  }

  let listElement = document.getElementById('colorList');
  listElement.appendChild(itemElement);

}
