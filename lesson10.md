<!-- .slide: id="lesson09" -->

# JavaScript

Lesson 10: OOP

---

### Recap: Objects

* What's an `object` in JavaScript?
* What's the difference between object and array?

---

### Arrays vs. Objects

* Arrays store their elements _ordered_
* We access the elements by index (0, 1, 2, ...)
* Objects store their elements _by key-value pairs_
* We access the elements by key (`"name"`, `"address"`)

---

### Example:

```js
let arr = [ 'a', 'b', 'c' ];
let secondElement = arr[1];

let obj = { name: "John", lastName: "Doe" };
let nameElement = obj.name;
```

---

### Quiz - valid or not?

```js
let a1 = [ 'John', 'Frances' ];
let a2 = [];
let a3 = [][];
let a4 = [[]];
```

---

### Quiz - valid or not? Solution

```js
let a1 = [ 'John', 'Frances' ];  // valid
let a2 = [];                     // valid
let a3 = [][];                   // invalid
let a4 = [[]];                   // valid
```

---

### Nesting of arrays

* Remember - an array can contain any datatype
* An array is a datatype
* Thus, an array can contain an array:

```js
let smallBox1 = [ 'Hat', 'Jar' ];
let smallBox2 = [ 'Cup', 'Brush' ]
let movingBox1 = [ smallBox1, smallBox2 ];
// same as:
let movingBox1 = [ [ 'Hat', 'Jar' ], [ 'Cup', 'Brush' ] ];
```

---

### Accessing nested elements

```js
let movingBox1 = [ [ 'Hat', 'Jar' ], [ 'Cup', 'Brush' ] ];
```

* How do we access the `'Jar'` value?

```js
movingBox[0][1];  // second element in first array is "Jar"
```
<!-- .element: class="fragment" -->

---

### Quiz - valid or not?

```js
let o1 = { name = 'John' };
let o2 = {};
let o3 = {{}};
let o4 = { address: {} };
let o5 = { ingredients: [{}] };
let o6 = { a: 'b'; c: 'd' };
```

---

### Quiz - valid or not? Solution

```js
let o1 = { name = 'John' };  // invalid, key-value uses ':'
let o2 = {};                 // valid, zero properties, empty object
let o3 = {{}};               // invalid, objects consist of key-value PAIRS
let o4 = { address: {} };    // valid, one key-value pair
let o5 = { ingredients: [{}] }; // valid, one key-value pair
let o6 = { a: 'b'; c: 'd' }; // invalid, key-value is separated by comma
```

---

### Exercise

Implement the following function:

```js
function isInRange(value, range) { /* YOUR CODE HERE */ }

isInRange(4, { min: 0, max: 5 }) // should return true
isInRange(4, { min: 4, max: 5 }) // should return true
isInRange(4, { min: 6, max: 10 }) // should return false
isInRange(5, { min: 5, max: 5 }) // should return true
```

---

### Solutions

```js
function isInRange(value, range) {
	return value >= range.min && value <= range.max;
}
```

```js
function isInRange(value, range) {
    if (value < range.min) {
        return false;
    }
    if (value > range.max) {
        return false;
    }
    return true;
}
```

---

### Nesting Objects

* The value in the key-value pairs can be any data type
* Object is a data type

```js
let person = {
    name: "John",
    address: {
        street: "Am Nordbahnhof",
        city: "Berlin"
    }
}
```

* Quiz question - how do we access the person's city?
`person.address.city`
<!-- .element: class="fragment" -->

---

### Exercise

* Create an object describing yourself (or someone else)
* Use as many data types as you can
* Try also nesting key-value pairs (e.g. address, array of hobbies)
* Paste the result to the Zoom chat

---

### Objects and Web

* So, how does it all fit together?
* Take a look at any website, open developer tools (F12)
* Go to "Elements", "Properties"
* Looks like all "Elements" in a web page consist of key-value pairs
* Looks familiar? Yes, in JavaScript, all HTML Elements are objects!

---

### Recap

Can you explain the following?

* REST API
* JSON
* `fetch` API
* `async` / `await` keywords

---

### REST APIs

A good resource to find available REST APIs on the web is:

https://www.programmableweb.com/

---

### async / await

* Only `async` functions can `await` on other `async` functions, e.g. waiting for long running operations to complete
* The rest of the JavaScript code continues to execute, JavaScript should never block!
* Once the other `async` function finishes ("resolves"), our function resumes to execute.
* The async/await is newer than the .then()/.catch() syntax. The async/await syntax was introduced in ES8 (ECMAScript 2017), however the .then()/.catch() syntax was introduced with Promises in ES6 (ECMAScript 2015)

---

### async / await

Explain the difference between `func2` and `func3`:

```js
async function func1() {
  await fetch("blah");
}

async function func2() {
  await func1();
  console.log("end of func2");
}

async function func3() {
  func1();
  console.log("end of func3");
}
```

---

### async / await

* `func2` waits for the `fetch` call in `func1` to finish, then prints "end of func2".
* `func3` also calls `func1`, but doesn't wait until the `fetch` in `func1` finishes. It prints "end of func3" immediately, no matter how long `func1` needs to finish/resolve.

---

### async / await

What's the difference between `reply1` and `reply2`?

```js
async function func1() {
    let response = await fetch("blah");
    return response;
}

async function func2() {
    let reply1 = await func1();
    let reply2 = func1();
}
```

---

### async / await

* `reply1` contains the the response from the `fetch` call. We can call e.g. `await reply1.json()` to interpret the response as JSON object.
* `reply2` doesn't wait for `func1` to finish/resolve. We can _not_ call `await reply2.json()` on it!
* Rule of thumb: Always call an `async function` with `await`

---

### recap: fetch

* We use the fetch API to download content via http(s) from within JavaScript:

```js
async function fetchMyApi() {
  // "fetch" the URL from the internet in the background
  let response = await fetch("https://my.api/something");
  // once we have a response, interpret it as JSON:
  let result = await response.json();
}
```

---

### innerHTML / textContent

* If you have existing HTML code, you can assign that to a HTML element using innerHTML:

```js
// Adds a "bold" Hello to your div:
myDiv.innerHTML = "<b>Hello</b>";
// Adds the literal text "<b>Hello</b>" to your other div:
myOtherDiv.textContent = "<b>Hello</b>";
```

---

### Introduction to OOP

* Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects".
* Objects can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

---

### Basic Concepts

* Classes and Objects: A class defines the shape of an object. Objects are instances of classes.
* Inheritance: One class can inherit characteristics from another class.
* Encapsulation: Bundling data and methods that operate on that data within a single unit.
* Polymorphism: One interface, many implementations.

---

### JavaScript and Prototypes

* Unlike many OOP languages, JavaScript uses prototypes instead of classes for inheritance.
* Every object has a prototype, and objects can inherit properties and methods from their prototype.

---

### Example: Prototypes

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' says woof');
};

let dog1 = new Dog('Max');
dog1.bark();  // Outputs: Max says woof
```

---

### ES6 Classes

* ES6 introduced a class syntax to create objects and handle inheritance, making it look more like traditional OOP languages.

---

### Example: Classes and Constructors

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name + ' says woof');
  }
}

let dog1 = new Dog('Buddy');
dog1.bark();  // Outputs: Buddy says woof
```

---

### Inheritance in Classes

* Classes can extend other classes, inheriting their properties and methods.

---

### Example: Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' eats');
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + ' says woof');
  }
}

let dog1 = new Dog('Charlie');
dog1.eat();    // Outputs: Charlie eats
dog1.bark();   // Outputs: Charlie says woof
```

---

### Object Classes and Members

* In JavaScript, almost everything is an object.
* Objects can have members: properties (values) and methods (functions).

---

### Example: Object Members

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());  // Outputs: John Doe
```

---

### Recap

* OOP is a powerful paradigm that helps in organizing and structuring code.
* JavaScript offers unique ways to handle OOP concepts with prototypes.
* ES6 classes provide a more traditional OOP approach.

---

### Exercise

* Create a class `Car` with properties `brand` and `year`. Add a method `display` that outputs the brand and year.
* Extend the `Car` class with a new class `ElectricCar` that has an additional property `batteryLife`.
* Create instances of both classes and call their methods.

---

### Exercise Solution

* Create a class `Car` with properties `brand` and `year`. Add a method `display` that outputs the brand and year.

```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  display() {
    console.log(`This car is a ${this.brand} from ${this.year}.`);
  }
}

let myCar = new Car('Toyota', 2019);
myCar.display();  // Outputs: This car is a Toyota from 2019.
```

---

### Exercise Solution

* Extend the `Car` class with a new class `ElectricCar` that has an additional property `batteryLife`.

```js
class ElectricCar extends Car {
  constructor(brand, year, batteryLife) {
    super(brand, year);  // Call the constructor of the parent class
    this.batteryLife = batteryLife;
  }

  displayBatteryLife() {
    console.log(`This electric car has a battery life of ${this.batteryLife} hours.`);
  }
}

let myElectricCar = new ElectricCar('Tesla', 2021, 10);
myElectricCar.display();           // Outputs: This car is a Tesla from 2021.
myElectricCar.displayBatteryLife();  // Outputs: This electric car has a battery life of 10 hours.
```

---

### Exercise Solution

* Create instances of both classes and call their methods.

```js
let car1 = new Car('Ford', 2018);
car1.display();  // Outputs: This car is a Ford from 2018.

let electricCar1 = new ElectricCar('Nissan Leaf', 2020, 8);
electricCar1.display();           // Outputs: This car is a Nissan Leaf from 2020.
electricCar1.displayBatteryLife();  // Outputs: This electric car has a battery life of 8 hours.
```

---

### Quiz time!

* Go to https://opentdb.com/api_config.php
* Select a category, a difficulty, and set "Multiple Choice" as Type
* Click on "Generate API URL"
* Copy the URL that appeared on top of the page, for example:
https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
* Download the URL above.
* Look at the reply, what does it contain? How can you access its elements?

---

### Quiz time!

* Think about your Quiz HTML page. How would you like it structured?
* All 10 questions at once, or question after question?
* Which HTML elements do we need?
* Do we create those in HTML and use `document.getElementById` to access them from JavaScript?
* Do we create them in JavaScript with `document.createElement`?

---

### Quiz time!

* Create your HTML page
* Now, we need the logic. That's where JavaScript comes in :)
* Use `fetch` to fetch your results. Remember to `await` and interpret the response as JSON
* Let's start simple - display only one question of your quiz.
* Tell the user whether the answer was correct or not

---

### Quiz time!

* Now comes the tricky part - once the user chose an answer, we need to display the next question. But since we don't want to write the same code twice, how can we structure the code?
* Try to write a `function` that takes a question and shows it on the screen
* After the user chose his answer, call your function to show the next question
* Bonus: Keep track of the score (how many correct/wrong answers).
* Bonus: Add some CSS to make it pretty
* Bonus: Add a button to restart the game from the beginning
