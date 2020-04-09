<!-- .slide: id="lesson11" -->

# Basic Frontend - Spring 2020

Lesson 11, Thursday, 2020-04-09

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

### Converting string to number

What is the result?

```js
let a = 1 + 1;
let b = 1 + "1";
```

```js
let a = 1 + 1;    // 2
let b = 1 + "1";  // "11"
```
<!-- .element: class="fragment" -->

---

### Converting string to number

We can turn a string to a number using `parseInt` or `parseFloat`:

```js
let a = parseInt("42");   // a is number: 42
let b = parseInt("-42");  // b is number: -42
let c = parseInt("1.1");  // c is number: 1
let d = parseFloat("1.1") // d is number: 1.1
```

---

# Preject

---

### Preject

* Let's write a number guessing game!
* Choose a secret number between 1 and 100
* Add an `<input>` where the user can enter a number between 1 and 100
* Add a button "guess"
* Output to a `<div>` element whether the guessed number is smaller, larger or equal to the secret number

---

### Bonus

* Already done? Let's add more features until you run out of time :)
    * Add all previous guesses to a `<ol>`
    * When the guessed right, output some statistics (e.g. "you guessed the secret number right with 6 tries")
    * Instead of choosing the secret number, let JavaScript generate one using `Math.random()` (see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random))
    * Add a "new game" button that starts a new game with a new secret number

---

### More Bonus

* Seriously? Still time left?
    * Make the maximum number configurable, e.g. to guess numbers from 1 to 1000
    * SUPER HARD: Add a "suggest" button that suggests the optimal next guess based on the previous guesses. Example: User guessed 50, and the secret number is smaller. The next logical best guess would be 25.

---

### And finally

* Try to get as far as you can
* Give us feedback what went easy, what was hard
* When done, paste your HTML and JavaScript to [jsbin](https://jsbin.com/?html,js,output), click `File -> Save Snapshot` and send the jsbin.com link to Slack