let todoItems = ["wash dishes", "learn JavaScript", "do sport"];
let todoUl = document.querySelector('#todoList');
for (let item of todoItems) {
  let newItem = document.createElement('li');
  todoUl.appendChild(newItem);
  newItem.textContent = item;
}