<!-- .slide: id="lesson12" -->

# Basic Frontend - Spring 2020

Lesson 12, Tuesday, 2020-04-14

---

### Recap - Preject

Which of the following will output `42`?

```js
console.log(a);      // [1]
function foo() {
    console.log(a);  // [2]
    let a = 42;
    console.log(a);  // [3]
}
console.log(a);      // [4]
```

---

### Recap - Preject

Which of the following will output `42`?

```js
console.log(a);      // [1] ERROR
function foo() {
    console.log(a);  // [2] ERROR
    let a = 42;
    console.log(a);  // [3] 42
}
console.log(a);      // [4] ERROR
```

---

### Recap - Preject

```js
function fun1() {
    let veryImportantVariable = 42;
}
function fun2() {
    // Question: How do I access veryImportantVariable????
}
```

---

### Recap - Preject

```js
// move the variable outside the function
let veryImportantVariable = 42;
function fun1() {
}
function fun2() {
}
```

---

### Recap - Preject

What's the difference?

```js
let a = 42;
let b = 43;
```

```js
a = 42;
b = 43;
```

---

What's the difference?

```js
let a = 42;
let b = 43;
```

```js
a = 42;
b = 43;
```

The last one creates **global** variables. Those will be visible to everyone, your colleagues, third-party libraries, etc. etc. DO NOT EVER DO THAT. Your colleagues will hate you, your boss will shout at you, your CEO will point at you and your teacher will cry.

---

### Recap - Preject

What's the difference?

```js
function onMyButtonClick() {
    let myElement = document.getElementById("input");
    myElement.value = 42;
}
```

```js
let myElement = document.getElementById("input");
function onMyButtonClick() {
    myElement.value = 42;
}
```

Fist one asks for the `input` element every time the button is clicked, last one only once when the page loads.
<!-- .element: class="fragment" -->

---

### DOM Exercise

1. Create the usual empty HTML and JavaScript file
1. Remember to load your JavaScript file in the body using a `<script src=""></script>` tag
1. Add one `<ul id="todoList"></ul>` to your HTML page
1. In your JavaScript file, add an array of things you need to do, for example: `let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];`
1. Add all the `todoItems` from your JavaScript Array to your `<ul>` using the DOM API

---

### Solution

```js
let todoListElement = document.getElementById("todoList");
let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];
for (let i = 0; i < todoItems.length; i++) {
    let todoElement = document.createElement("li");
    todoElement.textContent = todoItems[i];
    todoListElement.appendChild(todoElement);
}
```

---

### A note about DOM event handlers

* We already learned that HTML Elements have a `onclick` property.
* We know that this property must be a function.
* We know that we can declare functions like:

```js
function foo() {
  console.log("foo was called");
}
```

---

### A note about DOM event handlers

* However, variables can be functions, too:

```js
let foo = function() {
  console.log("foo was called");
}
```

* What this means: Create a new variable called `foo` and initialize it with a function

---

### A note about DOM event handlers

* Variables containing a function can be used exactly like variables containing a `number`, `array` or `object`:

```js
let foo = function() {
  console.log("foo was called");
}
let bar = foo;  // now foo and bar point to the same function
bar();          // prints "foo was called"
```

---

### A note about DOM event handlers

* The function can access all variables visible to it (technical term: "Closure"):

```js
let x = 42;
let foo = function() {
  console.log("foo was called with x: " + x);
}
let bar = foo;  // now foo and bar point to the same function
bar();          // prints "foo was called with x: 42"
```

---

### A note about DOM event handlers

* So if we want to set an `onclick` handler:

```js
let myClickFunction = function() { /* some code */ }
document.body.onclick = myClickFunction;
```

* Or directly:

```js
document.body.onclick = function() { /* some code */ }
```

---

### Exercise

* Can you add a onclick handler to each of your `<li>` elements that changes the text to strike through (e.g. ~wash dishes~)?
* Hint: Use the `textDecoration` property:

```js
todoElement.style.textDecoration = "line-through";
```

---

### Solution

```js
let todoListElement = document.getElementById("todoList");
let todoItems = [ "wash dishes", "learn JavaScript", "do sport" ];
for (let i = 0; i < todoItems.length; i++) {
    let todoElement = document.createElement("li");
    todoElement.textContent = todoItems[i];
    todoElement.onclick = function() {
        todoElement.style.textDecoration = "line-through";
    }
    todoListElement.appendChild(todoElement);
}
```

---

### Exercise

* Can you remove the strike-through if a strike-through item is clicked?

---

### Solution

```js
    todoElement.onclick = function() {
        if (todoElement.style.textDecoration === "line-through") {
            todoElement.style.textDecoration = "";
        } else {
            todoElement.style.textDecoration = "line-through";
        }
    }
```

---

### Getting all the children

* HTML Elements are hierarchical:

```html
<body>
    <ul>
        <li>Wash dishes</li>
    </ul>
</body>
```

* Every HTML Element has zero or more children

---

### Getting all the children

* Every HTML Element has a children property:

```js
let items = todoListElement.children;
```

* The property returns an array of all _direct_ children

---

### Visiting all children

* We can use a `for` loop to go through all children:

```js
let items = todoListElement.children;
for (let i = 0; i < items.length; i++) {
    console.log("item: " + items[i].textContent);
}
```

---

### Exercise

* Can you add a button "Mark all done" that strikes through all your TODO items?
* Hint: Use the `children` property of your `<ul>` element.
* BONUS: Add an `<input>` field and a `<button>` to dynamically add new TODO items to your `<ul>`
