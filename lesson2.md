<!-- .slide: id="lesson2" -->

# Basic Frontend - Spring 2020

Lesson 2, Thursday, 2020-02-27

(Please install Visual Studio Code if you haven't already)

---

# Lets introduce ourselves!

---

### Recap

What did we talk about last lesson?

---

### Recap: data types

Number:
```js
42
-3.1415
```

String:
```js
"John"
'Berlin'
```

Boolean:
```js
true
false
```
Undefined, no value:
```js
undefined
```

---

### Using VSCode

* Create a new folder
* In that folder, create an html file: `index.html`

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

* Also in that folder, create a JS file: `main.js`

```js
console.log("Hello from JavaScript");
```


---

<!-- .slide: id="lesson2:console" -->
### Outputting values

* You can use `console.log` to print values to the console.
* The console will only be visible to developers, _not_ to the visitors of the website.

Example:

```js
console.log("Hello");
console.log(3 * 4 + 5);
```

---


But with all these examples, we are just talking about data.

What if I wanted to save some data and use it later?

we use `Variables`!


---

### Variable

A pointer to some data or value.

```js
let price = 5;
let name = "John";
```

![Variable](images/variables.jpg)
<!-- .element: style="text-align:center" -->

---


### Examples:

```js
let priceCoffee = 2;
let priceCappuccino = 3;
let customer = "John";
let company = undefined;
let greeting = "Hello";
let age = 50;
let hasKids = false;
```

Can you guess how can we create a variable?

---

### How do we create a Variable?
We write:
* `let`
* the variable name
* `=`
* the value we want
* `;`

---

### Quiz Time

What are the types of the following variables?

```js
let temperature = 24;
let name = "John";
let teacherIsNice = true;
let totalPrice = '12.5';
let deliveryDate = undefined;
```

---

### Quiz Time - solution

What are the types of the following variables?

```js
let temperature = 24;           // number
let name = "John";              // string
let teacherIsNice = true;       // boolean
let totalPrice = '12.5';        // string
let deliveryDate = undefined;   // undefined
```

---

### Variables

Variables can also result from other variables!

```js
let firstName = "John";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log("my full name is " + fullName);
// what is the output here?
// try it with your name!
```

---

### Variable names

You can name your variables whatever you want.
- You can use letters, numbers, and underscore _ (spaces are *not* allowed!)
- Variable name cannot start with a number.

Correct variable names:
```js
let element = 3;
let element3 = 5;
```

Wrong variable names:
```js
let 2squared = 4;
let element-1 = 0;
let full name = 'Anakin Skywalker';
```

---

Giving good and descriptive names to your variables is very important!

Good variable names make the code easier to understand by other developers, and even by yourself!

Not wrong but very bad variable names:
```js
let a = 0;
let _12 = 0;
let asldjf = 0;
let thisisareallylongvariablename = 0;

```

---

In this course, and JavaScript in general, we use 'camelCase'
  - `isStudent`
  - `favoriteFood`
  - `likesGermanFood`

Variable names are case sensitive:
```js
let name = 'John';
let Name = 'John';
let NAME = 'John';
```

These are 3 different variables.

---

### naming Boolean variables

When naming boolean variables, it is best to give it a name that describes a yes/no situation:

- isMarried
- hasKids
- canExecute

---

### try it!

create 4 variables:
* one for your full name
* one for your age
* one for the city where you come from
* one for wether you can speak German or not

`console.log()` all these variables!

---

<!-- .slide: id="lesson2:comments" -->

### Comments

You can write additional information in your code using comments.

Comments are completely ignored by JavaScript, they exist only to help developers.

---

### Comment types

```js
// this is a single-line comment
// anything after // is ignored by JavaScript

let firstName = "John";

let age = 24; // I can also write a comment here!

/**
 * this is a multi-line comment
 *
 * I can write however many lines I want!
 */
let lastName = "Smith";
```

---

### Execution

JavaScript executes the code from top to bottom, line by line.

JavaScript will ignore comments.


---

### top to bottom, line by line
Wrong:
```js
console.log(name); // WRONG!! the variable "name" is not created!

let name = "Obi-Wan Kenobi";
```
Correct:
```js
let name = "Obi-Wan Kenobi";

console.log(name); // correct!
```


---

### Recap: arithmetic Operators

```js
3 + 4    // 7

3 - 4    // -1

3 * 4    // 12

3 / 4    // 0.75

"I live in" + " " + "Berlin"
// "I live in Berlin"
```

These and other operators also work on variables!

---

### Exercise

Convert Celsius to Fahrenheit.

```js
let degreesInCelsius = 28;

// Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = ???;

// output to the console to see the final result
console.log(degreesInFahrenheit);

```

---

### Solution

Convert Celsius to Fahrenheit.

```js
let degreesInCelsius = 28;

// Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = degreesInCelsius * 1.8 + 32;

// output to the console to see the final result
console.log(degreesInFahrenheit); // 82.4‬

```

---

### what we learned

* Variables are pointers to values:
  * We can use operators with variables just like with values!

* Use `<script>` to add a JavaScript file to your HTML webpage.

* Use `//` to write comments.

* Use `console.log(...)` to output stuff to the console.

---


<!-- .slide: id="lesson2:homework" -->

### HomeWork

You have an online shop, which sells hats and t-shirts. One of the customers wants to buy 2 hats and 3 t-shirts.

A hat costs 3.99€ and a t-shirt costs 9.99€. What is the total cost?

Create all the variables needed, and output the final result to the console.
