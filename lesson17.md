<!-- .slide: id="lesson17" -->

# Basic Frontend - Spring 2020

Lesson 17, Tuesday, 2020-05-05

---

### Iterating over object's keys

Sometimes, we get a reply from a REST API like this:

```js
let translations = {
    de: "Apfel",
    fr: "Pomme",
    tr: "Elma",
    // ... and more translations
}
```

We don't know which keys (translations) exist in the REST API response.

---

### for...in loop

A `for...in` loop loops over all keys in an object:

```js
let exampleObject = { a: true, b: true, c: false };
for (let key in exampleObject) {
    console.log(key); // prints "a", "b", "c"
    console.log(exampleObject[key]); // prints "true", "true", "false"
}
```

---

### Alternative: Object.keys

* JavaScript has a built in function called `Object.keys()` that returns all the keys of an object:

```js
let exampleObject = { a: true, b: true, c: false };
let exampleKeys = Object.keys(exampleObject);
// exampleKeys is an array: [ 'a', 'b', 'c' ]
```

---

### Quiz

* What does the following output?

```js
let exampleObject = {
    name: "John",
    address: { 
        city: "Berlin"
    }
}

console.log(Object.keys(exampleObject));
```

`['name', 'address']`
<!-- .element: class="fragment" -->

---

### for...of loop

* Traditionally iterating over an array:

```js
let exampleArray = [ 1, 2, 3 ];
for (let i = 0; i < exampleArray.length; i++) {
    // we have a loop with all the _indexes_ in the array
    // starting at 0, ending at length - 1
    // we access each value of the array using:
    console.log(exampleArray[i]);
}
```

---

### for..of loop

* If we're not interested in the index, just the values of the array:

```js
let exampleArray = [ 1, 2, 3 ];
for (let value of exampleArray) {
    console.log(value); // prints 1 2 3
}
```

* `for...of` only works on arrays (iterables), not on generic objects

---

### Recap: Quiz

1. Quiz sample URL: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
1. Were you able to download that URL from within JavaScript?
1. Were you able to read/explain the response?
1. Were you able to extract the relevant data from the response?
1. Were you able to render that data in HTML?
1. Were you able to add the logic of shuffling / state management?
