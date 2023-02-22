let rememberingList = ["go to sleep early!", "wash Clothes", "closed the Door", "give the Key"];
(function recap() {
  let toDoListElement = document.getElementById("toDo");

  for (let index = 0; index < rememberingList.length; index++) {
    let liElement = document.createElement('li');
    liElement.textContent = rememberingList[index];
    toDoListElement.appendChild(liElement);
  }
})();