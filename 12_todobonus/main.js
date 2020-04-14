let todoListElement = document.getElementById("todoList");
let todoInputElement = document.getElementById("todoInput");

let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];
for (let i = 0; i < todoItems.length; i++) {
    addTodoItem(todoItems[i]);
}

function addTodoItem(text) {
    let todoElement = document.createElement("li");
    todoElement.textContent = text;
    todoElement.onclick = function() {
        if (todoElement.style.textDecoration === "line-through") {
            todoElement.style.textDecoration = "";
        } else {
            todoElement.style.textDecoration = "line-through";
        }
    }
    todoListElement.appendChild(todoElement);
}

function markAllDone() {
    let items = todoListElement.children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.textDecoration = "line-through";       
    }
}

function newItem() {
    addTodoItem(todoInputElement.value);
}