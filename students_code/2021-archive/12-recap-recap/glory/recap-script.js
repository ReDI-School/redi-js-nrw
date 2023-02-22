const toDoList = document.getElementById('todolist');

let toDoItems = ["wash dishes", "learn JavaScript", "do sport"];
function game() {
  toDoItems.forEach(ele => {
    toDoList.appendChild(document.createTextNode(ele));
  });
}

