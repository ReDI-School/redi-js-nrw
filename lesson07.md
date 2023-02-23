<!-- .slide: id="lesson7" -->

# JavaScript

Lesson 7: Callbacks

---

### Recap: Types

```js
// Strings
let name = "Owen";

// Numbers
let age = 28;

// Booleans
let isProgrammer = true;
```

---

### Recap - Datatypes

```js
let a1 = 42;
let a2 = true;
let a3 = "hello";
let a4 = function() {};
let a5;
let a6 = [];
let a7 = {};
```

---

### Solution - Datatypes

```js
let a1 = 42;       // number
let a2 = true;     // boolean
let a3 = "hello";  // string
let a4 = function() {};  // function
let a5;            // undefined
let a6 = [];       // object (array)
let a7 = {};       // object
```

---

### Null

* There's one datatype that we haven't learned about yet: `null`
* `null` is like `undefined`. It indicates the absence of a value.
* `null` can be used to indicate an *intentional* abscence of an object value.
* Example: `document.getElementById("NoExist");` returns `null`

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

###  Exercise

Can you make this in HTML and CSS? Don't worry about making it move, just make sure the elements are on top of one another (click on the cover!).
<div style="position: relative;width: 150px;height: 100px">
  <div style="display: flex;justify-content: center;align-items: center;text-align: center;position: absolute;top: 0px;left: 0px;width: 100%;height: 100%; outline: 1px solid black">My Layer</div>
  <div style="display: flex;justify-content: center;align-items: center;text-align: center;position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;background-color:#FFAB40; cursor: pointer" onclick="const str = this.style.left == '100%' ? '0px' : '100%'; this.style.left = str;">My Cover</div>

</div>

---

### solution

```html
<div class="card">
  <div class="fillParent layer">My Layer</div>
  <div class="fillParent cover">My Cover</div>
</div>
```

```css
.card {
  position: relative;
  width: 150px;
  height: 100px;
}

.fillParent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.layer {
  outline: 1px solid black;
}

.cover {
  background-color: #FFAB40;
}
```
<!-- .slide: style="font-size:68%" -->

---

### solution 2
if you want to center the text in the boxes, use this:

```css
.fillParent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
```

---


### Css Classes with JavaScript

Just like we can set the text with JavaScript, we can also change the css classes:

```js
let myDiv = document.createElement('div');
// <div></div>

myDiv.classList.add('firstClass');
// <div class='firstClass'></div>

myDiv.classList.add('secondClass');
// <div class='firstClass secondClass'></div>

myDiv.classList.remove('firstClass');
// <div class='secondClass'></div>
```

---

### Exercise

Can you create this with JavaScript?
create a function called *`createLayerDiv`* that returns the following element:

```html
<div class="fillParent layer">My Layer</div>
```

---

### Solution

```js
function createLayerDiv(){
  let layer = document.createElement('div');
  layer.classList.add('fillParent');
  layer.classList.add('layer');
  layer.textContent = 'My Layer';
  return layer;
}
```

---

### Exercise

Can you create this with JavaScript?
create a function called *`createCoverDiv`* that returns the following element:

```html
<div class="fillParent cover">My Cover</div>
```

---

### Solution

```js
function createCoverDiv(){
  let cover = document.createElement('div');
  cover.classList.add('fillParent');
  cover.classList.add('cover');
  cover.textContent = 'My Cover';
  return cover;
}
```

---

### Exercise

create this card in JavaScript, use the functions you created before!

```html
<div class="card">
  <div class="fillParent layer">My Layer</div>
  <div class="fillParent cover">My Cover</div>
</div>
```

---


### Solution

```js
function createCardDiv() {
  let card = document.createElement('div');
  card.classList.add('card');

  let layer = createLayerDiv();
  card.appendChild(layer);

  let cover = createCoverDiv();
  card.appendChild(cover);
  return card;
}
```

---


### Exercise

Finally! add the following HTML to your page and use the function created before to add a card to this element:

```html
<div id="wordList"><div>
```

---

### solution

```js
let list = document.getElementById('wordList');
let card = createCardDiv();
list.appendChild(card);
```

You should get something like this:
<div style="position: relative;width: 150px;height: 100px">
  <div style="display: flex;justify-content: center;align-items: center;text-align: center;position: absolute;top: 0px;left: 0px;width: 100%;height: 100%; outline: 1px solid black">My Layer</div>
  <div style="display: flex;justify-content: center;align-items: center;text-align: center;position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;background-color:#FFAB40; cursor: pointer" onclick="const str = this.style.left == '100%' ? '0px' : '100%'; this.style.left = str;">My Cover</div>

</div>

---

### Exercise

When we click on the cover, we want it to move to the right, you can use the `left` property to do that:
```js
// this will move the cover to the right
//until it reaches the edge of the card
cover.style.left = '100%';
```

---

### solution

```js
cover.onclick = function() {
  cover.style.left = '100%';
}
```

---

### Exercise

We want the cover to go back to its original position when we click on it again.


---

### solution

```js
cover.onclick = function() {
  if (cover.style.left === '100%'){
    cover.style.left = '0';
  } else {
    cover.style.left = '100%';
  }
}
```

---

### Homework - Part 1

Make the divs customizable, we should be able to call the function like this:

```js
let options = {
  layerText: 'new Layer Text',
  coverText: 'new Cover Text',
  coverBackgroundColor: '#FFAB40'
};
let card = createCardDiv(options);
```
This should change the text in the layer and the cover, as well as the background color of the cover.

---

### Homework - Part 2

Copy this data to your JavaScript file:
```js
let words = [{
  word: 'Little',
  description: 'Small in size.',
  color: '#FF4081'
}, {
  word: 'Simple',
  description: 'Easily understood or done.',
  color: '#FF5252'
}, {
  word: 'Malicious',
  description: 'Intending to do harm.',
  color: '#FF6E40'
}, {
  word: 'Necessary',
  description: 'Needed to be done.',
  color: '#FFAB40'
}, {
  word: 'Standard',
  description: 'Regularly and widely used.',
  color: '#FFD740'
}];
```

---

### Homework - Part 3

Can you use the data you just copied to make a card for each word?

---

### Homework - Part 4

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
