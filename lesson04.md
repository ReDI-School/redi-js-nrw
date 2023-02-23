<!-- .slide: id="lesson4" -->

# JavaScript

Lesson 4: Functions

---

### Recap


```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
} else {
  // when will this execute??
}
```


The `else` block will execute only if condition is `false`.
<!-- .element: class="fragment" -->

---

```js
if (condition) {
  // block of code that will run
  // ONLY if condition is true
} else if (secondCondition) {
  // when will this execute??
} else {
  // ..
}
```

The `else if` block will execute only if all conditions above are `false` and its condition is `true`.
<!-- .element: class="fragment" -->

---

### rules of if, else if, else
```js
if (condition1) {
  // some code ...
} else if (condition2) {
  // some other code ...
} else if (condition3) {
  // code, code, code ...
} else {
  // even more code ...
}
// JavaScript will continue from here.
```
<!-- .element: style="font-size:80%" -->

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3…
- If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE

---

### Exercise

We are implementing a simple program that calculates the bonus an employee will get at the end of the year.

The company will give 1€ bonus for each regular work day, and 3€ for each extra work day.


---


(regular day: 1€, extra: 3€)

The employee gets, depending on the bonus:
* a pay raise, if more than 250€ bonus.
* nothing, if less than 100€.
* a chocolate box, for any other bonus.

What does an employee with 200 regular days and 20 extra get?


---


What do these employees get?
1. 200 regular days and 20 extra
1. 150 regular days
1. 50 regular days and 10 extra

what if we wanted to know all of these values together?

We have to use functions!

---


### functions

A function is a reusable block of code.

A very simple function would be:

```js
function myFunction() {
  console.log("I am in a function!");
}
```

You can call the function like this:
<!-- .element: class="fragment" -->

```js
myFunction();
```
<!-- .element: class="fragment" -->

---

you can write any code you want in the function
```js
function sayHello() {
  console.log("Hello There!");

  console.log("...");

  console.log("General Kenobi!");
}

sayHello();
```

---

functions can also return some value, we can save that value in a variable to use it later!
```js
function giveMe5() {
  return 5;
}

let number = giveMe5();
console.log(number); // 5
```


---

functions can also take values, we call them *parameters*:

```js
function multiplyBy4(x) {
  return x * 4;
}

let number = multiplyBy4(7);
console.log(number); // 28

number = multiplyBy4(number);
console.log(number);
// what is the output here?
```

---

multiple parameters is also possible:
```js
function multiply(x, y) {
  return x * y;
}

let number = multiply(2, 3);
console.log(number); // 6

number = multiply(10, number);
console.log(number);
// what is the output here?
```


---

### How to create a function

We write:
* `function`
* name of the function
* `(param1, param2, ...)`
  * parameters are just like variables!
* `{ ... }` the block where we have our code
  * we might add a `return` at the end, depending on what we need.

---

```js
function nameOfFunction (param1, param2, ...) {
  // any code you want!
  // even if-else statements!
  // anything!

  return value; // return is optional, depends on what you need

  // what happens if we don't have a return??
}
```

---

### calling a function

to execute a function, we write the function name, and then `()`, we pass any parameters we want into the `()`

```js
function sayHello(){
  console.log("Hello!");
}

// the function sayHello
// does not require any parameters
// that is why the parenthesis () are empty.
sayHello();
```

---

### calling a function

```js
function greet(name){
  console.log("Hello " + name + " !");
}

// the function greet takes one parameter: name
// that is why we write "Bob" in the parenthesis.
// we are giving the value "Bob" to the function.
greet("Bob");
// "Hello Bob !"
```

---

### calling a function

```js
function square(x) {
  return x * x;
}

// the function 'square' takes one parameter: x
// we have to give it a value in the parenthesis ()
// in this example, the value is 5
// however, the function 'square' also returns a value
// we save the returned value in a variable to use it later
let numberSquared = square(5);

console.log(numberSquared); // 25
```

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

### Exercise

Write a function called `celsiusToFahrenheit`, which takes the degrees in C, and returns it in F.

test your function with the values 28 and 31.

Remember:

Fahrenheit = Celsius multiplied by 1.8 plus 32

---

### Solution

```js
function celsiusToFahrenheit(degreesCelsius) {
  let degreesFahrenheit = degreesCelsius * 1.8 + 32;
  return degreesFahrenheit;
}

console.log("28 degrees: " + fahrenheitToCelsius(28));
console.log("32 degrees: " + fahrenheitToCelsius(32));
```

---

### Exercise

Write a `min` function that returns the smaller of the two arguments passed to it:

```js
min(1, 2);    // should return 1
min(100, 99); // should return 99
min(-10, 0);  // should return -10
```

---

### Solution

```js
function min(number1, number2) {
  if (number1 <= number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log('min of 1 and 2 is ' + min(1, 2));
console.log('min of 100 and 99 is ' + min(100, 99));
console.log('min of -10 and 0 is ' + min(-10, 0));
```

---

### Quiz

Which of the following will output `42`?

```js
console.log(a);      // [1]
function foo() {
    console.log(a);  // [2]
    let a = 42;
    console.log(a);  // [3]
}
console.log(a);      // [4]
```

---

### Quiz

Which of the following will output `42`?

```js
console.log(a);      // [1] ERROR
function foo() {
    console.log(a);  // [2] ERROR
    let a = 42;
    console.log(a);  // [3] 42
}
console.log(a);      // [4] ERROR
```

---

### Quiz

```js
function fun1() {
    let veryImportantVariable = 42;
}
function fun2() {
    // Question: How do I access veryImportantVariable????
}
```

---

### Quiz

```js
// move the variable outside the function
let veryImportantVariable = 42;
function fun1() {
}
function fun2() {
}
```

---

### Quiz

What's the difference?

```js
let a = 42;
let b = 43;
```

```js
a = 42;
b = 43;
```

---

What's the difference?

```js
let a = 42;
let b = 43;
```

```js
a = 42;
b = 43;
```

The last one creates **global** variables. Those will be visible to everyone, your colleagues, third-party libraries, etc. etc. DO NOT EVER DO THAT. Your colleagues will hate you, your boss will shout at you, your CEO will point at you and your teacher will cry.

---

### Quiz

What's the difference?

```js
function onMyButtonClick() {
    let myElement = document.getElementById("input");
    myElement.value = 42;
}
```

```js
let myElement = document.getElementById("input");
function onMyButtonClick() {
    myElement.value = 42;
}
```

Fist one asks for the `input` element every time the button is clicked, last one only once when the page loads.
<!-- .element: class="fragment" -->

---

<!-- .slide: id="lesson4:homework1" -->

### Further Practice - Part 1/2

Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.

Example:

John, 18, English &#8594; **"Hello! my name is John, I am 18 years old and I speak English."**



---

<!-- .slide: id="lesson4:homework2" -->

### Further Practice - Part 2/2

Change the employee solution from before, and turn it into a function.

The function should accept the number of normal days and number of extra days as parameters!

Here is the code in case you need it:

```js
let numNormalDays = 200;
let numExtraDays = 20;
let normalBonus = 1;
let extraBonus = 3;
let bonus = normalBonus * numNormalDays + extraBonus * numExtraDays;

console.log("Total Bonus: " + bonus);

let gift;
if (bonus > 250){
  gift = "Pay raise";
} else if (bonus < 100){
  gift = "Nothing";
} else {
  gift = "Chocolate Box";
}
console.log("Employee gets " + gift);
```

<!-- .slide: style="font-size:70%;" -->
