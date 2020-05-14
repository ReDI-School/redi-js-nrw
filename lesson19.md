<!-- .slide: id="lesson19" -->

# Basic Frontend - Spring 2020

Lesson 19, Thursday, 2020-05-14

---

### Solutions for previous lesson

---

### The Kitchen Storage Tracker

Imagine you are designing an app to track the storage in your Pizza and Pasta Restaurant.
The function you must write will accept 2 inputs;

1. the new order
2. the current kitchen storage

The output of the function should return the updated kitchen storage.

---

### Starting Data

Here are the starting figures for your kitchen storage:

```js
let initialKitchenStorage = {
  flourInGrams: 10000,
  eggs: 48,
  tomatoSauceInMl: 2000,
  beefInGrams: 10000,
  mixedHerbsInGrams: 2000,
  cheeseInGrams: 10000,
};
```

---

### Recipes

Here are the required ingredients for Both Pizza and Pasta:

```js
let recipes = {
  pizza: {
    flourInGrams: 200,
    tomatoSauceInMl: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 100,
  },
  pasta: {
    flourInGrams: 100,
    eggs: 1,
    tomatoSauceInMl: 100,
    beefInGrams: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 25,
  },
};
```

---

### Easy

Write a function to take a single item order, the outcome I would expect is:

```js
// the starting storage and recipes from previous slides

let currentKitchenStorage = initialKitchenStorage;

function itemOrder(order, kitchenStorage) {
  //your code here
}

currentKitchenStorage = itemOrder("pizza", currentKitchenStorage);

console.log(currentKitchenStorage);
```

---

### Medium

Write a function to take one object containing multiple items in the order, the outcome I would expect is:

```js
// the starting storage and recipes from previous slides

let currentKitchenStorage = initialKitchenStorage;

function entireOrder(order, kitchenStorage) {
  //your code here
}

currentKitchenStorage = entireOrder(
  { pizza: 1, pasta: 20 },
  currentKitchenStorage
);

console.log(currentKitchenStorage);
```

---

### Difficult

Complete the medium task but also reject the order if there is not enough kitchen storage

```js
// the starting storage and recipes from previous slides

let currentKitchenStorage = initialKitchenStorage;

function kitchenOrder(order, kitchenStorage) {
  //your code here
}

currentKitchenStorage = kitchenOrder(
  { pizza: 100, pasta: 20 },
  currentKitchenStorage
);

console.log(currentKitchenStorage);

/// currentKitchenStorage === initialKitchenStorage should be true
```

---

### The Clicking Game

For this exercise, we will make a fun clicking game.

The HTML and JS framework is ready for you in a template.

Your task is to write the functions.

---

### Demonstration of Working Game

Don't copy the code from here, this is just to show you how the game should work

https://jsbin.com/sipacorivu/1/edit?output

---

### Instructions

Instead of difficulties, we will all do each step, do what you can in the class and the remainder will be homework

Link to template: https://jsbin.com/mosefizupo/edit?html,js,output

Feel free to either copy this code into your editor, or write it directly in JSBin

---

### Step 1

Update the score and the points when the click me button is clicked

complete the function:

```js
function handleButtonClick() {
  //your code here
}
```

---

### Step 2

Make single clicks worth more each time you upgrade the clicker

complete the function:

```js
function handleUpgradeClick() {
  //your code here
}
```

---

### Step 3

Make the html background black and text white when user purchases dark mode

complete the function:

```js
function handleDarkModeClick() {
  //your code here
}
```

---

### Extended Homework

Make the game your own, add next functions and buttons!
Fun ideas:

1. make upgrade buttons that make your game pretty
1. add a auto click timer
1. add a story like in [James's Career Changer Game](https://codepen.io/crushford/pen/zezrWR)

---
