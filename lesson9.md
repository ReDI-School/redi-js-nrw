<!-- .slide: id="lesson9" -->

# Basic Frontend - Spring 2020

Lesson 9, Thursday, 2020-04-02

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

<!-- .slide: id="lesson9:DOM" -->

# DOM

---

### API

* `API` stands for **A**pplication **P**rogramming **I**nterface
* An API is a set of definitions and protocols for building and integrating application software.
* It's a contract between two parties, for example between the developer and the browser

---

### DOM

* `DOM` stands for **D**ocument **O**bject **M**odel
* DOM is a programming API for HTML documents
* It defines the logical structure of documents and the way a document is accessed and manipulated

---

### DOM

* But how do we use DOM?
* `document` is a variable provided by browser for us: https://developer.mozilla.org/en-US/docs/Web/API/Document
* The type of document is `object`.
* `document.body.style.backgroundColor` is a property pointing to the backgroundColor of the style of the body of the document.

---

### DOM - selecting HTML items

Let's create a HTML element:

```html
<input type="text" value="hello" />
```

How can we access that from JavaScript?

---

### DOM - selecting HTML items by ID

Let's give it an `id` attribute:

```html
<input type="text" value="hello" id="myInput" />
```

---

### DOM - selecting HTML items by ID

```html
<input type="text" value="hello" id="myInput" />
```

We can now use `document.getElementById()`:

```js
let input = document.getElementById("myInput");
```

The variable `input` now points to our HTML input!

---

### DOM - manipulating attributes

```js
let input = document.getElementById("myInput");
```

We can access any attributes of our HTML element like a property of an object:

```js
console.log(input.value);  // prints "hello"
```

---

### DOM - manipulating attributes

```js
let input = document.getElementById("myInput");
```

We can also modify the attributes:

```js
input.value = "world"; // changed the value of the input to "world"
```

---

### Exercise - DOM manipulation

* Create an empty HTML file, add an `<input>` element and give it an `id` attribute
* Create a JavaScript file. Use `document.getElementById()` to get your input element
* Look at the properties of the HTML Input: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
* Try to set / get a few

---

### Homework - DOM

* Create an empty HTML file. Add an `<input>`, a `<button>` and a `<div>`
* Add a function to your JavaScript file
* In the `onclick` attribute of your `<button>`, call that function
* Inside your function, get the value attribute from your input
* Set the background color of the `<div>` to the value of your input
