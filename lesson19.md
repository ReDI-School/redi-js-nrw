<!-- .slide: id="lesson19" -->

# Basic Frontend - Spring 2020

Lesson 19, Thursday, 2020-5-14

---

#### A word from Sevtap

---

### Solutions for previous lesson

---

### The Kitchen Storage Tracker

Imagine you are designing an app to track the storage in your Pizza and Pasta Restaurant.
The function you must write will accept 2 parameters;

1. the new order
2. the current kitchen storage

The output of the function should return the updated kitchen storage.

---

### Starting Data

Here are the starting figures for your kitchen storage:

```js
let initialKitchenStorage = {
  FlourInGrams: 10000,
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
    FlourInGrams: 200,
    tomatoSauceInMl: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 100,
  },
  pasta: {
    FlourInGrams: 100,
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

Write a function to take one a single item order, the outcome I would expect is:

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

Write a function to take on object containing multiple items in the order, the outcome I would expect is:

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
