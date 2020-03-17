<!-- .slide: id="lesson5" -->

# Basic Frontend - Spring 2020

Lesson 5, Tuesday, 2020-03-17

---

## Recap

---

### Recap - If statements

```js
if (temperature >= 30) {
    console.log("Go swim");
} else if (temperature >= 20) {
    console.log("Go play soccer");
} else if (temperature < 0) {
    console.log("Go ice skating");
}
```

What does it print when the temperature is 35, 25, 15 and -3?

Quiz: How can we log "Go bike" for any other temperature?<!-- .element: class="fragment" -->

---

### Recap - If statements

```js
if (temperature >= 30) {
    console.log("Go swim");
} else if (temperature >= 20) {
    console.log("Go play soccer");
} else if (temperature < 0) {
    console.log("Go ice skating");
} else {
    console.log("Go bike");
}
```

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3 ...
- If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE

---

### Quiz

* What does the code below do?

```js
let t1 = (12 - 32) * 5/9;
let t2 = (15 - 32) * 5/9;
```

Answer: We don't care. It has no semantics, the developer should be shouted at for writing such bad code.<!-- .element: class="fragment" -->

---

### Quiz - Try 2

* What does the code below do?

```js
function fahrenheitToCelsius(degrees) {
   return (degrees - 32) * 5/9;
}

let t1 = fahrenheitToCelsius(12);
let t2 = fahrenheitToCelsius(15);
```

---

### Quiz

* What does this code output to console when we run it?

```js
function greet() {
    console.log("Hello world!");
}
```

Answer: Nothing. We never call greet.<!-- .element: class="fragment" -->

---

### Quiz

* What does this code output to console when we run it?

```js
function add(a, b) {
    return a + b;
}

let c = add(2, 2);
console.log(c);
console.log(b);
console.log(a);
```

Answer: 4, error, error - a und b only exist inside the function!<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
    let output = "Hello " + name;
}

greeting("World");
console.log(output)
```

Answer: Error. output is only visible inside the function<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
    return "Hello " + name;
}

let output = greeting("World");
console.log(output)
```

Answer: "Hello World"<!-- .element: class="fragment" -->

---

## A glimpse of JavaScript + HTML

---

### My first interactive Webpage!

* Create a new folder
* Create a html file `index.html`:

```html
<html>
<body>
   <script src="main.js"></script>
</body>
</html>
```

* Create a JS file `main.js`:

```js
console.log("Hello from JavaScript");
```

---

### onclick

* HTML elements have an [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) attribute that executes JavaScript code, e.g.:

```html
<button onclick="let x = 1; x++; console.log(x);">
Click me!
</button>
```

---

### onclick

* Writing source code in HTML is not so great.
* What did we learn so far so we can write code in JavaScript, but only execute it when a button is clicked?
* Functions! <!-- .element: class="fragment" -->

---

### onclick

Let's add a new function to our JavaScript file:

```js
function onButtonClick() {
    console.log("Button has been clicked!");
}
```

So how can we call our function every time our button gets clicked?

---

### onclick

JavaScript:

```js
function onButtonClick() {
    console.log("Button has been clicked!");
}
```

HTML:

```html
<button onclick="onButtonClick()">
```

Try it - click your button, does it output something?

---

### onclick

Let's do something with our HTML page when the button is clicked:

```js
function onButtonClick() {
   document.body.style.backgroundColor = 'red';
}
```

* What happens when you click your button?
* What is `document.body.style.backgroundColor`?
* Answer: It's a variable defined by the browser that contains the current background color. <!-- .element: class="fragment" -->

---

### Exercise

<!-- .slide: style="font-size:70%" -->

Let's make a color changing webpage.

* Add three buttons to your HTML
* Set their text to "red", "green" and "blue"
* When a button is clicked, set the background to that color
  * Example: "green" button sets the `backgroundColor` to "green".
* BONUS: When the button is clicked a second time, set the color to its light version.
  * Example: Blue is clicked and the background is blue, set `backgroundColor` to "lightBlue".
* BONUS2: Add a new button with text "dark" that changes the current color to its dark variant.
  * Example: The page is currently `red` or `lightRed`, change it to `darkRed`
