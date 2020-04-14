let todoListElement = document.getElementById("todoList");
let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];
for (let i = 0; i < todoItems.length; i++) {
    let todoElement = document.createElement("li");
    todoElement.textContent = todoItems[i];
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