<!-- .slide: id="lesson5" -->

# JavaScript

Lesson 5: Objects

---

## Recap

---

### Recap - If statements

```js
if (temperature >= 30) {
    console.log("Go swim");
} else if (temperature >= 20) {
    console.log("Go play soccer");
} else if (temperature < 0) {
    console.log("Go ice skating");
}
```

What does it print when the temperature is 35, 25, 15 and -3?

Quiz: How can we log "Go bike" for any other temperature?<!-- .element: class="fragment" -->

---

### Recap - If statements

```js
if (temperature >= 30) {
    console.log("Go swim");
} else if (temperature >= 20) {
    console.log("Go play soccer");
} else if (temperature < 0) {
    console.log("Go ice skating");
} else {
    console.log("Go bike");
}
```

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3 ...
- If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE

---

### Quiz

* What does the code below do?

```js
let t1 = (12 - 32) * 5/9;
let t2 = (15 - 32) * 5/9;
```

Answer: We don't care. It has no semantics, the developer should be shouted at for writing such bad code.<!-- .element: class="fragment" -->

---

### Quiz - Try 2

* What does the code below do?

```js
function fahrenheitToCelsius(degrees) {
   return (degrees - 32) * 5/9;
}

let t1 = fahrenheitToCelsius(12);
let t2 = fahrenheitToCelsius(15);
```

---

### Quiz

* What does this code output to console when we run it?

```js
function greet() {
    console.log("Hello world!");
}
```

Answer: Nothing. We never call greet.<!-- .element: class="fragment" -->

---

### Quiz

* What does this code output to console when we run it?

```js
function add(a, b) {
    return a + b;
}

let c = add(2, 2);
console.log(c);
console.log(b);
console.log(a);
```

Answer: 4, error, error - a und b only exist inside the function!<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
    let output = "Hello " + name;
}

greeting("World");
console.log(output)
```

Answer: Error. output is only visible inside the function<!-- .element: class="fragment" -->

---

### Quiz - what does it print?

```js
function greeting(name) {
    return "Hello " + name;
}

let output = greeting("World");
console.log(output)
```

Answer: "Hello World"<!-- .element: class="fragment" -->

---

<!-- .slide: id="lesson8:objects" -->

### Objects

An object is a group of *key* / *value* pairs.

![Pears](images/pears.png) <!-- .element height="600px" width="600px" style="display: block; margin: 0 auto" -->

---

Example:

```js
let person = {
  name: 'John Carmack',
  age: 23
};
```

Can you guess how we can create an object?

---

To create an object we use curly braces `{}`.
```js
let empty = {};
```

We put any properties in the `{}`, these  are written as a pair

*`key: value`*

```js
let person = {
  name: 'John'
  // the key is 'name', the value is 'John'
};
```

---

If we have more than one property, we need to add a comma after each pair.

```js
let person = {
  name: 'John!', // comma here
  age: 23, // also here
  isMarried: false // this is the last one, no comma
};
```

We can add as many properties as we want.

---

### exercise

Try it yourself:

create an object called "`me`" containing the following information about you:
* name
* age
* hair color
* eye color

Log your object to the console

---

We can also add functions as properties!

```js
let mathStuff = {
  PI: 3.14,
  square: function(x) {
    return x * x;
  },
  half: function (x) {
    return x / 2;
  }
};
```

---

Okay, now we created an object, what can we do with it?

```js
// we can access the value of a property using the . operator
let myName = me.name;

// we can also change the value
me.age = 10;

// we can even set the value of an object's property
me.age = me.age + 30;

// we have used 'console.log' for a while now,
// 'console' is an object that the browser creates for us
// and 'log' is a function defined on that object
console.log(myName);
```

---

what would happen here?

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};

console.log(person.numChildren); // ????
person.lastName = 'Smith'; // ????
person.isMarried(); // ????
```

---

Solutions

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};

console.log(person.numChildren); // undefined

// this is correct, we added a new property: 'lastName'
// with the value of 'Smith' to our person object
person.lastName = 'Smith';

//ERROR! isMarried is a boolean, it is not a function!
person.isMarried();
```

---

### exercise

Solve the friends introduction exercise again, but this time use objects for the friends instead of arrays.

```js
// use objects instead of these arrays
// ['John Carmack', 'Frances Northcutt', 'John Nash'];
// [23, 25, 66];

// don't forget to loop over the objects and introduce everyone.
```

---

### Recap Objects

```js
let obj = {
    a: 42,
    b: true,
    c: "c",
    d: null
}

let value = obj.c; // value is now "c"
```

---

### Recap Objects

* A key-value pair can point to any type, including function:

```js
let obj = {
    a: function() { return 42; },
    b: function() { return true; },
    c: function() { return "c"; },
    d: function() { return null; }
}

let value = obj.c(); // value is now "c"
```

---

### Recap Objects

* A function can return another object:

```js
let obj = {
    a: function() { return { name: "John" }; }
}

let value = obj.a(); // value is now { name: "John" }
let innerValue = value.name // innerValue is now "John"
```

---

### Recap Objects

* A lot of APIs and external libraries use this pattern
* You call a function and it returns an object
* Example: `document.getElementById('id')`
* Example in Leaflet:

```js
let marker = L.marker([52.531587, 13.384742]);
marker.addTo(map);
```

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

### Recap Copy-by-value

* What's the value of `b`?

```js
let a = 42;
let b = a;
a = 43;
console.log(b);
```

* b is still 42. Primitive values are copied by value!
<!-- .element: class="fragment" -->

---

### Copy-by-reference

* Complex types (Array, Object, Function, ...) are copied by reference:

```js
let person1 = { name: "John" };
let person2 = person1;
person1.name = "Johnny"
console.log(person2.name) // "Johnny"
```

* Both `person1` and `person2` point to the same object. Objects are not copied, but referenced.

---

### Things we did _not_ teach

We did leave out a couple of statements and keywords that you might see in other JavaScript beginners courses:

1. template strings
1. `break`
1. `continue`
1. `switch` statement
1. various operators

---

### Template strings

Template strings start and end with a backtick and can contain JavaScript expressions in a `${}` block:

```js
let name = "John";
let s1 = "Hi, my name is " + name;
let s2 = `Hi, my name is ${name}`;
```

Both s1 and s2 are identical.

---

### `break`

* `break` instantly exits the closest `for` or `while` loop:

```js
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;
    }
    console.log(i);
}
```

* Often considered to be "dirty" as it's confusing to exit a loop at arbitrary places

---

### `continue`

* `continue` instantly continues with the next iteration of the loop:

```js
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        continue;
    }
    console.log(i);
}
```

* Often considered to be "dirty" as breaks the established flow of a loop

---

### `switch`

* Switch is a "glorified" `if` statement:

```js
switch (dayOfWeek) {
    case "Monday":
        console.log("today just sucks");
        break;
    case "Friday":
        console.log("almost there!!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("party!!!");
        break;
    default:
        console.log("go to work");
        break;
}
```

---

### Advanced operators

* Arithmetic ( `+ - * / % ++ --` )
* Combined (`+=`, `-=`, etc.)
* Logical (`&& || !`)
* Comparison (`=== !== > < <= >=`)

We did _not_ learn the following:

* Ternary (`?`)
* Bitwise (`& | ~ ^ << >> >>>`)


---


### Practicing with Functions, Arrays and Objects

For this lesson we will together complete 3 practice tasks. We will be split into small groups so that you can ask questions to the teacher in your class.

Each task will have a 5 min introduction, 20 min to complete the task in the breakout rooms and 10 min for a demonstration of the solutions.

These are meant to be simple use cases for automating manual business activity

---

### Instructions

Feel free to decide your own difficultly level

Copy the data variables into your code editor to get you started, then write your own function. you can set the output by logging the return value to the console.

---

### Writing an email using data (easy)

Write a function that takes customer data and returns a string consisting of:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Data:

```js
let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};
```

---

### Writing an email using data (medium)

Write a function that takes customer data and returns an array of strings each consisting of:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Data:

```js
let customerData = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];
```

---

### Writing an email using data (difficult)

Write a function that takes an array of customer data and returns an array of strings containing:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Price should be shown in local format

Data (see next slide)

---

```js
let customerData = [
  {
    name: "James",
    productPurchased: "phone",
    productPrice: 200,
    locale: "de-DE",
    currency: "EUR",
  },
  {
    name: "Carlos",
    productPurchased: "car",
    productPrice: 20000,
    locale: "de-DE",
    currency: "EUR",
  },
  {
    name: "Sevtap",
    productPurchased: "Xbox",
    productPrice: 400,
    locale: "en-GB",
    currency: "GBP",
  },
];
```

---

### Analyze this sales data (easy)

Write a function that accepts the following sales data and returns number of sales and total revenue

Data:

```js
let monthlySalesInEuro = [12, 34, 25, 6, 54, 8, 98, 76, 45, 78];
```

---

### Analyze this sales data (medium)

Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month

Data:

```js
let quarterlySalesInEuro = {
  Jan: [12, 34, 25, 6, 54, 8, 98, 76, 45, 78],
  Feb: [54, 8, 98, 76],
  March: [8, 98, 76, 45, 78],
};
```

---

### Analyze this sales data (difficult)

Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month

Data:

```js
let quarterlySalesInEuro = {
  Jan: [12.01, 34.59, 25.23, 6.42, 54.24, 8.3, 98.01, 76, 45, 78],
  Feb: [54, 8.3, 98, 76.4],
  March: [8, 98, 76.32, 45.23, 78],
};
```

---

### Publish cinema times (easy)

Write a function that takes cinema times and outputs the day that has the most times available

Data:

```js
let cinemaTimes = {
  monday: [10, 13, 17, 22],
  tuesday: [10, 13, 17, 22],
  wednesday: [13, 17, 22],
  thursday: [10, 17, 22],
  friday: [10, 13, 22],
  saturday: [10, 13, 14, 17, 22],
  sunday: [10, 13, 17, 19, 20, 22],
};
```

---

### Publish cinema times (medium)

Write a function that takes cinema times and a string containing the day of the week that returns the available movies on that day with session times.

Data (see next slide):

---

```js
let movieDisplayNames = {
  theRoom: "The Room",
  starWars: "Star Wars: Revenge of the Sith (Episode III)",
  marvel: "Avengers: Endgame",
};

let cinemaTimes = {
  monday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  tuesday: { starWars: [15], marvel: [20, 23] },
  wednesday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  thursday: { theRoom: [10, 22], starWars: [15, 17] },
  friday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  saturday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  sunday: {
    theRoom: [10, 13, 17],
    starWars: [10, 15, 17, 23],
    marvel: [20, 23],
  },
};
```

---

### Publish cinema times (difficult)

Write a function that takes cinema times, preferred langauge and a string containing the day of the week that returns the available movies on that day with session times in their preferred langauge.

Data (see next slide)

---

```js
let movieTranslations = {
  en: {
    theRoom: "The Room",
    starWars: "Star Wars: Revenge of the Sith (Episode III)",
    marvel: "Avengers: Endgame",
  },
  de: {
    theRoom: "das Zimmer",
    starWars: "Star Wars: Die Rache der Sith (Episode III)",
    marvel: "Avengers: Spiel beenden",
  },
};

let cinemaTimes = {
  monday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  tuesday: { starWars: [15], marvel: [20, 23] },
  wednesday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  thursday: { theRoom: [10, 22], starWars: [15, 17] },
  friday: { theRoom: [10, 13, 17, 22], starWars: [15, 18], marvel: [20, 23] },
  saturday: { theRoom: [10, 13, 17, 22], starWars: [15, 18], marvel: [20, 23] },
  sunday: {
    theRoom: [10, 13, 17],
    starWars: [10, 15, 18, 23],
    marvel: [16, 20, 22],
  },
};
```

### Bonus

Write a function that also accepts the time of day and displays the next movie playing.

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
