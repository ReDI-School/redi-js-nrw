<!-- .slide: id="lesson7" -->

# Basic Frontend - Spring 2020

Lesson 7, Tuesday, 2020-03-24

---

### Refresher: Types

```js
// Strings
let name = "Owen";

// Numbers
let age = 28;

// Booleans
let isProgrammer = true;
```

---

<!-- .slide: id="lesson7:arrays" -->

### Arrays

Array is a container type that holds multiple values:

```js
let cars = ["Saab", "Volvo", "BMW"];

// we create an array using []
let emptyArray = [];

// we put the values we want in square brackets
// separated by commas
let ages = [19, 33, 25, 40];
```

---

Array can hold any type of value:

```js
let prices = [0.99, 1.49];
```

And any quantity:
```js
// I only have one favorite food
let favoriteFoods = ["Pizza"];
// An array holding 26 letters of the alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]; //TODO
```

---

### Analogy: Bookshelf

A bookshelf represents an array of books

![bookshelf](images/bookshelf.jpg)

```js
let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];
```

---

### Accessing elements

We can access elements in the array by number using square brackets "`[]`"

The numbering starts at `0` (think floors of a building):

```js
let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
// QUIZ - how do we access "Game of Thrones" ?
```

```js
console.log(books[2]); // "Game of Thrones"
```
<!-- .element: class="fragment" -->
The order of elements in the array matter!
<!-- .element: class="fragment" -->


---

### Bookshelf array

![bookshelf](images/array_bookshelf_0.png)

---

### Invalid elements

```js
let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
console.log(books[2]); // "Game of Thrones"
console.log(books[3]); // ???
```

```js
console.log(books[3]); // undefined
```
<!-- .element: class="fragment" -->

---

### Quiz

```js
let friends = ["Alice", "Bob", "Carol"];

console.log(friends[1]); // ???
console.log(friends[3]); // ???
```

```js
console.log(friends[1]); // "Bob"
console.log(friends[3]); // undefined
```
<!-- .element: class="fragment" -->

---

### Exercise 1

* Step 1: Create an array with your 3 top friends (or foes)
* Step 2: Say "hello" on console to each friend, e.g.:

```
hello Alice
hello Bob
hello Carol
```

---

### Modifying arrays

We can change any value using brackets:

```js
let friends = ["Alice", "Bob", "Carol"];

friends[1] = "David";

console.log(friends[1]); // "David"
```

---

### Common operations: array length

We can get the length of an array with the `.length` property:

```js
let friends = ["Alice", "Bob", "Carol"];
console.log(friends.length); // 3
```

---

### Iterating through an array

We can use loops to go through elements of an array.

```js
let cars = ["Saab", "Volvo", "BMW"];

for (let i = 0; i < cars.length; i++) {
    let currentCar = cars[i];
    console.log(currentCar);
}
```

---

### Exercise 2

* Step 1: Create an array with your 3 top friends (you can use the same from exercise 1)
* Step 2: Say "hello" on console to each friend, using a `for` loop!

```
hello Alice
hello Bob
hello Carol
```

---

### Appending new values

We can append new values to an array using `.push()`:

```js
let friends = ["Alice", "Bob", "Carol"];
console.log(friends.length); // 3

friends.push("David");

console.log(friends.length); // 4
console.log(friends[3]); // David
```

---

### Exercise 3

Create an array containing a few numbers, ex `[3, 2, 9, 5, 6]`

* Output the last element of your array
* Output the sum of all the numbers in the array
* Output the largest number of the array
* Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

---

### Bonus Exercise

* Create a new array containing only numbers of the original array that are smaller than 5
 * ex: given input `[1, 3, 7, 2, 9, 5]`, return `[1, 3, 2]`
* Write a function that takes a number and an array of numbers as input parameter. Return the index of the number if it is in the array, otherwise return `-1`
 * ex: given inputs `5` and `[2, 1, 5, 6, 3]`, return `2`
