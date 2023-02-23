<!-- .slide: id="lesson6" -->

# JavaScript

Lesson 6: DOM

---

<!-- .slide: id="lesson9:DOM" -->

# DOM

---

### API

* `API` stands for **A**pplication **P**rogramming **I**nterface
* An API is a set of definitions and protocols for building and integrating application software.
* It's a contract between two parties, for example between the developer and the browser

---

### DOM

* `DOM` stands for **D**ocument **O**bject **M**odel
* DOM is a programming API for HTML documents
* It defines the logical structure of documents and the way a document is accessed and manipulated

---

### DOM

* But how do we use DOM?
* `document` is a variable provided by browser for us: https://developer.mozilla.org/en-US/docs/Web/API/Document
* The type of document is `object`.
* `document.body.style.backgroundColor` is a property pointing to the backgroundColor of the style of the body of the document.

---

### DOM - selecting HTML items

Let's create a HTML element:

```html
<input type="text" value="hello" />
```

How can we access that from JavaScript?

---

### DOM - selecting HTML items by ID

Let's give it an `id` attribute:

```html
<input type="text" value="hello" id="myInput" />
```

---

### DOM - selecting HTML items by ID

```html
<input type="text" value="hello" id="myInput" />
```

We can now use `document.getElementById()`:

```js
let input = document.getElementById("myInput");
```

The variable `input` now points to our HTML input!

---

### DOM - manipulating attributes

```js
let input = document.getElementById("myInput");
```

We can access any attributes of our HTML element like a property of an object:

```js
console.log(input.value);  // prints "hello"
```

---

### DOM - manipulating attributes

```js
let input = document.getElementById("myInput");
```

We can also modify the attributes:

```js
input.value = "world"; // changed the value of the input to "world"
```

---

### Exercise - DOM manipulation

* Create an empty HTML file, add an `<input>` element and give it an `id` attribute
* Create a JavaScript file. Use `document.getElementById()` to get your input element
* Look at the properties of the HTML Input: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
* Try to set / get a few

---

### Homework - DOM

* Create an empty HTML file. Add an `<input>`, a `<button>` and a `<div>`
* Add a function to your JavaScript file
* In the `onclick` attribute of your `<button>`, call that function
* Inside your function, get the value attribute from your input
* Set the background color of the `<div>` to the value of your input

---

DOM defines:
* the structure of (HTML) documents
* *the way a document is accessed and manipulated*

---


```html
<input type="text" value="hello" />
```
How can I get this input element in JavaScript?

```html
<input type="text" value="hello" id="myInput" />
```
<!-- .element: class="fragment" -->

```js
let input = document.getElementById("myInput");
input.value = "world";
```
<!-- .element: class="fragment" -->

---

### Homework solution

```html
<body>
  <input type='text' id='colorInput' />
  <button onclick='setBackground()'>Change!</button>
  <div id='myDiv'>Hello!</div>

  <script src='main.js'></script>
</body>
```
```js
function setBackground() {
  let inputElement = document.getElementById("colorInput");
  let color = inputElement.value;
  let divElement = document.getElementById("myDiv");
  divElement.style.backgroundColor = color;
}
```

---

### Exercise

remove the value from the input field after the user presses the button.


---

### solution

```js
function setBackground() {
  let inputElement = document.getElementById("colorInput");
  let color = inputElement.value;
  let divElement = document.getElementById("myDiv");
  divElement.style.backgroundColor = color;
  inputElement.value = ''; // this removes the value
}
```

---

### Setting the text

If we want to add or change any text, we can use [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

Example:

```js
let myElement = document.getElementById("myId");
myElement.textContent = "I changed the text!";
```

---

### Exercise

Change the text content of the div to the color that the user choose!


---

### solution

```js
function setBackground() {
  let inputElement = document.getElementById("colorInput");
  let color = inputElement.value;
  let divElement = document.getElementById("myDiv");
  divElement.style.backgroundColor = color;
  input.value = '';
  divElement.textContent = color; // now we changed the text!
}
```

---

Okay, lets add more stuff to our small page.

We want to show all the colors that the user has chosen.

Lets start be adding an unordered list.

```html
<body>
  <input type='text' id='colorInput' />
  <button onclick='setBackground()'>Change!</button>
  <div id='myDiv'>Hello!</div>
  <ul id='colorList'></ul>

  <script src='main.js'></script>
</body>
```

---


We can create HTML elements using [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).

for this page, we want to create list item or `li`;

```js
// we put the tag in the () of createElement
let itemElement = document.createElement("li");
itemElement.textContent = "I am new item!";
```
Try it!

---

Unfortunately, the element is not on the page.

We have to tell the browser where to put it.

We do that using [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild):

```js
let itemElement = document.createElement("li");
itemElement.textContent = "I am new item!";

let listElement = document.getElementById("colorList");
//this means add itemElement as a child of listElement
listElement.appendChild(itemElement);
```

---


We want to show the color that the user has choose in our item that we created.

What do we have to do?

```js
itemElement.textContent = color;
```
<!-- .element: class="fragment" -->

---

### exercise

Change the background color of the item to the color!

```js
itemElement.style.backgroundColor = color;
```
<!-- .element: class="fragment" -->

---

### exercise

When we click on an item in our list, we want to change the background color of the div to that of the item.


```js
itemElement.onclick = function () {
  divElement.style.backgroundColor = color;
};
```
<!-- .element: class="fragment" -->

---

### Quiz: DOM

What is the output? And why?

```js
typeof document;
```

```js
"object"
```
<!-- .element: class="fragment" -->

---

### Quiz: DOM

How do we change the `value` of an `input` at runtime?

```html
<input id="myInput" value="blah">
```

```js
let inputElement = document.getElementById("myInput");
inputElement.value = "blubb";
```
<!-- .element: class="fragment" -->

---

How do we change the text of a `div` at runtime?

```html
<div id="myDiv">Blah</div>
```

```js
let divElement = document.getElementById("myDiv");
divElement.textContent = "blubb";
```
<!-- .element: class="fragment" -->

---

How do we add a child `li` element?

```html
<ul id="myList"></ul>
```

```js
let listElement = document.getElementById("myList");
let itemElement = document.createElement("li");
itemElement.textContent = "new item";
listElement.appendChild(itemElement);
```
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
