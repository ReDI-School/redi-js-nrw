<!-- .slide: id="lesson3" -->

# Basic Frontend - Spring 2020

Lesson 3, Tuesday, 2020-03-03

---

## Homework

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

## Pass-by-value

---

## Passing basic data types

* What do you think `x` and `y` are at the end of the program?

```js
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
```

Answer: x is 43, y is 42 <!-- .element: class="fragment" -->

---

<!-- .slide: style="font-size:80%" -->

### Bass-by-value

* All basic data types (number, string, ...) are passed by value.
* If you assign a variable to another variable, its value is _copied_.

---

## Recap: Operator chaining

---

### Operator chaining

We can "chain" operators, for example:

```js
1 + 2 + 3
(1 + 2) + 3  // same as above
(3) + 3      // returns 6
```

---

### Operator chaining

* Is the following code valid?

```js
5 < 6 < 7
```

* Answer: It's valid JavaScript, but pointless  <!-- .element: class="fragment" -->

---

### Operator chaining (cont.)

* Let's break it down:

```js
5 < 6 < 7
```

```js
(5 < 6) < 7   // 5 < 6 is true
```
<!-- .element: class="fragment" -->

```js
true < 7      // pointless comparison!
```
<!-- .element: class="fragment" -->

* comparing a boolean to a number makes no sense. Don't chain comparison operators.
<!-- .element: class="fragment" -->

---

### Quiz

* What does the following return?

```js
5 === 5 === 5
```

```js
(5 === 5) === 5
true === 5         // returns false
```
<!-- .element: class="fragment" -->

---

## Operator precedence

---

### Operator precedence

What do you think is the result?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->

---

### Operator precedence (cont.)

* JavaScript supports precedence (priority) for operators
* Operators with higher precedence are evaluated before operators with lower precedence
* Full List: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* Multiplication (15) has higher precedence than addition (14) - multiplication wins

---

### Operator precedence (cont.)

* Parentheses have the highest precedence (21) and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

* When in doubt, use parentheses!

---

### Quiz

* What does the following return?

```js
false && false || true
```

* Hint: Logical AND (6) has higher precedence than Logical OR (5) <!-- .element: class="fragment" -->

```js
(false && false) || true   // false && false is false
false || true              // returns true
```
<!-- .element: class="fragment" -->

---

### Best practice: Use variables instead of chaining

Which of the two is more readable?

```js
42 > 22 && 42 > 35
```

```js
let myAge = 42;
let leftPersonAge = 22;
let rightPersonAge = 35;

let olderThanLeft = myAge > leftPersonAge;
let olderThanRight = myAge > rightPersonAge;
let isOldest = olderThanLeft && olderThanRight;
```

---

## Combined Operators

---

### Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| **Combined Operators** | `+= -= *= /= ++` | `a *= 2`<br />`count++` |

---

### Combined Operators

```js
let myAge = 42;
myAge = myAge + 1; // how old will I be next year?
```

Is the same as:

```js
let myAge = 42;
myAge += 1;   // same as myAge = myAge + 1
```

---

### Quiz: What's the price?

```js
let price = 10;
// there's a 50 percent sale!
price /= 2;
```

Result: `5` <!-- .element: class="fragment" -->

---

### Operator ++ and --

* Operator `++` and `--` increase (or decrease) the value of a variable by 1

```js
let myAge = 42;
myAge++; // same as myAge = myAge + 1
```

---

## If statement

---

### Recap: What is programming?

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
let player1Score = player1Age + (5 * player1Height);
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
