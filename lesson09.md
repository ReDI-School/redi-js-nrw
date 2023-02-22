<!-- .slide: id="lesson9" -->

# Basic Frontend

Lesson 9: OOP

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
* Once the other `async` function finishes ("resolves"), our function resumes to execute

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
