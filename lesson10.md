<!-- .slide: id="lesson10" -->

# Basic Frontend - Spring 2020

Lesson 10, Tuesday, 2020-04-07

---

### Recap: DOM?

It defines
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

