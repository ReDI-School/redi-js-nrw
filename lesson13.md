<!-- .slide: id="lesson13" -->

# Basic Frontend - Spring 2020

Lesson 13, Thursday, 2020-04-16

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

### Homework

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

### Homework

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

### Homework

Can you use the data you just copied to make a card for each word?
