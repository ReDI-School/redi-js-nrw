
// 4. In your JavaScript file, add an array of things you need to do, for example: let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];
let todoItems = ["wash dishes", "learn JavaScript", "do sport", "eat cake!"];

// 5. Add all the todoItems from your JavaScript Array to your <ul> using the DOM API -->
//Add all the todoItems from your JavaScript Array to your <ul> using the DOM API
let todoListElement = document.getElementById("todoList");
for (let i = 0; i < todoItems.length; i++) {
  let todoElement = document.createElement("li");
  todoElement.textContent = todoItems[i];
  todoListElement.appendChild(todoElement)
};