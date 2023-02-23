<!-- .slide: id="lesson3" -->

# JavaScript

Lesson 3: If statement, Loops, Arrays

---

### Homework solution

```js
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);
```

---

## Recap

What did we talk about last lesson?

---

### What does it print?

```js
let name = "Sevtap";
console.log("Hello " + name);
```

Answer: It prints "Hello Sevtap" <!-- .element: class="fragment" -->

---

### What does it print?

```js
let greeting = "Hello";
let name = "Sevtap";
console.log(greeting + " " + firstName);
```

Answer: Error, "firstName" is not a variable <!-- .element: class="fragment" -->

---

### What does it print?

```js
console.log("It is " + temperature + " degrees");
let temperature = 22;
```

Answer: Error, "temperature" is not available <!-- .element: class="fragment" -->

---

## If statement

---

### What is programming?

<!-- .slide: style="font-size:70%" -->

Programming involves knowing and doing the following things:
* input: Get data from the keyboard, a file, a sensor, or some other device.
* output: Display data on the screen, or send data to a file or other device.
* math: Perform basic mathematical operations like addition and division.
* **decisions**: Check for certain conditions and execute the appropriate code.
* repetition: Perform some action repeatedly, usually with some variation.

(Source: http://greenteapress.com/thinkpython/thinkpython.pdf, Page 3)

---

### If statement

* Up until now, we wrote code line by line
* But what if we want to conditionally run some JavaScript code?
* Example: I only want to run code if the user is older than 18

---

### If statement

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

### Conditional Statements: If statement

```js
if (condition) {
}
```

* `condition` must be a boolean
* The code in the block is _only_ executed if the boolean is `true`
* If the boolean is false, the code block is _not_ executed

---

### Conditional Statements - Examples

```js
if (food === 'pizza') {
  console.log('My favorite!');
}
```

```js
if (money < 1000000) {
  console.log('You are not rich :p');
}
```

```js
if (canSpeakGerman === true) {
  console.log("Guten Tag");
}
```

---

### Code Blocks: {}

* Should be indented for better readability:

```js
if (language === "German") {
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
  console.log("Guten Tag!");
}
```

---

### Code Blocks: {}

* All variables created in code blocks will disappear after closing the block (technical term: “block scope”)

```js
let name = "John Doe";

if (name === "John Doe") {
  let greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  let greeting = "Hello my dear";
}

console.log(greeting); // ERROR!!!!
```

---

### Code Blocks: {}

* Correct solution:

```js
let name = "John Doe";

let greeting;
if (name === "John Doe") {
  greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  greeting = "Hello my dear";
}

console.log(greeting); // "Hi dude"
```

---

### Quiz

What does it print?

```js
let food = "broccoli";

if (food === "pizza") {
    console.log("yum yum");
}
```

---

### Quiz

What does it print?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
}
```

---

### Let's code!

Abdullah invented a game where the player with the highest value of his height (in cm) plus five times his age wins

1. Create variables for the heights and ages for you and a person next to you
1. Calculate the score
1. Decide who wins, print the winner and their score to the console. Remember: there can be a draw (both players with the same score).
1. Bonus: Add a third player and write the winner to the console.

---

```js
let myAge = 42;
let myHeight = 160;
let player1Age = 35;
let player1Height = 174;
let myScore = myHeight + (5 * myAge);
let player1Score = player1Height + (5 * player1Age);
if (myScore > player1Score) {
    console.log("I win!");
}
if (myScore === player1Score) {
    console.log("It's a draw!");
}
if (myScore < player1Score) {
    console.log("I lost :(");
}
```

---

### If...Else

![IfElse](images/If-Then-Else-diagram.svg)

```js
if (A) {
  B
} else {
  C
}
```

---

### If...Else example

```js
if (temperature > 25) {
  console.log("Go swimming");
} else {
  console.log("Go biking");
}
```

---

### If...Else-If...Else example

```js
if (day === 'Saturday') {
  console.log('Do all the shopping.');
} else if (day === 'Sunday') {
  console.log('Relax!');
} else {
  console.log('Wake up and go to work!');
}
```

---

### Exercise

<!-- .slide: style="font-size:80%" -->

* Make three if statements
  * Make a "Good day" greeting if the hour is less than 18
  * Make a statement that only says “Hello” to someone with your name.
  * Make a statement that prints "I am younger" if your age is less than your neighbor's
* Describe the weather based on the temperature:
  * Above 30
  * Above 20
  * Above 5
  * Everything else

---

### Is this correct?

```js
let temperature = 7;

if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```

Try with a temperature of 35, what does it print? <!-- .element: class="fragment" -->

---

### Correct solution

```js
let temperature = 35;

if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
```

---

<!-- .slide: id="lesson6:loops" -->

## Loops

---

### Loops

![loops](images/loop_js-02-farm.png)

<!-- from: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code -->

---

### While loop

A `while` loop repeats its body while its `condition` is `true`:

```js
while (condition) {
  // body is executed while "condition" is true
  console.log("Hello from while loop");
}
```

Example:

```js
while (isHungry) {
  eat();
}
```

While `isHungry` is `true`, the function `eat` is called.

---

### While loop 2

A while loop might execute zero to unlimited times:

```js
let isHungry = false; // we just ate
while (isHungry) {
  eat(); // this is never reached!
}
```

---

### While loop 3

Always make sure that a `while` loop's condition is eventually set to `false`:

```js
while (true) {
  console.log("Hello");
  // this code will print "Hello" until your laptop
  // runs out of battery, you kill the process
  // by closing the browser, you reboot or the universe ends
}

while (isHungry) {
  goRunning(); // going running makes us more hungry
               // loop won't terminate!!!
}
```

---

### Counting

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

---

### Counting - solution

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

```js
let i = 1;          // initialize i with 1
while (i < 6) {     // repeat this loop until we reach 6
  console.log(i);
  i++;              // increment i at every step
}
```

---

### Quiz

What will this loop output?

```js
let i = 0;
while (i < 2) {
  console.log(i);
}
```

Answer: 0, until you run out of battery<!-- .element: class="fragment" -->

---

### Quiz

* How many times will the loop run?

```js
let i = 10;
while (i < 15) {
  console.log(i);
  i++;
}
```

Answer: 5<!-- .element: class="fragment" -->

---

### Exercises

* Output your name five times
* Output the squares of the first 10 numbers (1, 4, 9, 16, ...)
* Output the sum of the first 10 numbers

---

### For loops - parts

Remember this? Let's divide it in parts

```js
let i = 1;          // part 1 - initialize the counter
while (i < 6) {     // part 2 - the exit condition
  console.log(i);
  i++;              // part 3 - update the counter
}
```

You can see that all three parts are spread around.
If the body of the `while` loop gets more complex, it
might be difficult to figure out how long the while loop
runs.

---

### For loops

How can we express the three parts of our while loop better?

We can use a for loop:

```js
for (init; test; update) {
  // body
}
```

The `for` loop consists of three parts, separated by semicolon (`;`)

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;          // part 1 - initialize the counter
while (i < 6) {     // part 2 - the exit condition
  console.log(i);
  i++;              // part 3 - update the counter
}

// same code with for loop:

for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **init** part, checks the **condition** part
and if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) { console.log(i); }
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (emailIsWrong) { askForEmail(); }
```

---

### Exercises

* Draw a pyramid to console:

```
*
**
***
****
*****
```
* BONUS: Count down from 10 to 0 and output it on console.
* BONUS: Solve chapter 2 of http://roverjs.com/

---

### Remainder Operator

* For the next exercise, we need the [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder): `%`
* It shows you what integer remains when you divide one number by another
* Question: What is left when you divide 6 coins between 3 friends? Answer: 0 coins
* Question: What is left when you divide 8 coins between 3 friends? Answer: 2 coins

---

### Remainder Operator

```js
6 % 3  // 0
7 % 3  // 1
8 % 3  // 2
9 % 3  // 0
10 % 3 // 1
11 % 3 // 2
12 % 3 // 0
```

---

### Homework - Optional

This is a real interview question for a Junior JavaScript developer:

* Print all the numbers from 1 to 100 to console
  * If the number is divisible by 3, print “Fizz” instead
  * If the number is divisible by 5 (and not by 3), print “Buzz” instead
  * If the number is divisible by both 3 and 5, print “FizzBuzz” instead

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

