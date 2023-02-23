<!-- .slide: id="lesson8" -->

# JavaScript

Lesson 9: Web APIs

---

### Recap: loops

What are loops?

*repeatedly run a block of code - until a certain condition is met.*
<!-- .element: class="fragment" -->

---

What kind of loops did we talk about?

* while loop
<!-- .element: class="fragment" data-fragment-index="1" -->
* for loop
<!-- .element: class="fragment" data-fragment-index="1" -->

---

How does a while loop look like?

```js
while (condition){
  // code
}
```
<!-- .element: class="fragment"  -->

---


How does a while loop work?
```js
while (condition){
  // code
}
```

1. check `condition`
  * if it is `false`, STOP!
  * if it is `true`:
1. execute the code in the block `{ ... }`
1. go to `1.`

---

How does a for loop look like?

```js
for (init; condition; update) {
  // code
}
```
<!-- .element: class="fragment"  -->


---

How does a for loop work?
```js
for (init; condition; update) {
  // code
}
```

1. execute `init`
2. check `condition`
  * if it is `false`, STOP!
  * if it is `true`:
3. execute the code in the block `{ ... }`
4. execute `update`
5. go to `2.`

---

Loops are very powerful in combination with *Arrays*!

---

### Recap: arrays

Arrays are **ordered** containers that holds multiple values.

How do we create an array?

```js
let cars = ["Saab", "Volvo", "BMW"];

// we create an array using []
let emptyArray = [];

// we put the values we want in square brackets
// separated by commas
let ages = [19, 33, 25, 40];
```
<!-- .element: class="fragment"  -->


---


We can access elements in the array by number using square brackets "`[]`"

The numbering starts at `0`, and the last element always has the number: `(array.length - 1)`.


```js
let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

console.log(books[0]); // "Harry Potter"
console.log(books[books.length - 1]); // "Game of Thrones"
```

---


We can use loops to go through elements of an array.

```js
let cars = ["Saab", "Volvo", "BMW"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// we can also change the values in the array
cars[1] = "Fiat";

// and add additional items at the end of the array
cars.push("Honda");

```

---

### Exercise

You have written a program that tells you how likely it is to rain outside (in percent %).

Unfortunately, it is not very accurate, it sometimes gives you more than 100% or less that 0%.

These are the values you got:
```js
[55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001]
```
Write some code that replaces all values less than 0 with 0, and bigger than 100 with 100.

---

### Exercise: part 1

write a function called "introduce" that takes a name and an age.

the function should log to the console: "My name is **{name}**, I am **{age}** years old"


---

### Exercise: part 2

You have the following information about your friends:

```js
let names = ['John Carmack', 'Frances Northcutt', 'John Nash'];
let ages = [23, 25, 66];
```

write a loop that uses the function from before to output the introduction for everyone of them.

---

The name of a person and the age of a person belong together; it feels very ugly to solve the problem using two separate arrays.

Today we are going to talk about a new type that will solve this exact problem!

---

### Recap - DOM

* DOM is an API
* It allows us to add/remove/change any element of a web page
* We can make TODO lists, games and cool CSS animations
* But how would we create a web page with "dynamic" data, for example today's weather?

---

# Web APIs

---

### Basic building blocks

We need to first learn about a few concepts:

1. JSON - How to exchange data
1. REST API - How to talk with a server
1. `fetch` API - How to connect to a server

---

### Object notation

* In JavaScript, we can put all keys of objects in quotes. This is purely optional:

```js
let me = {
    "name": "John",
    lastName: "Doe",
    "hobbies": [ "Eat", "Sleep" ]
};

console.log(me.name); // "John"
```

---

### JSON

* JSON stands for **J**ava**S**cript **O**bject **N**otation
* It is a string representation of a JavaScript object
* All *keys* in our key value pairs must be in quotes
* Must contain only these types:
   * `string`, `number`, `boolean`, `array`
   * `null`
   * another JSON `object`
* These types are **forbidden**:
   * `function`, `undefined`

---

### Why JSON?

* When we exchange data between a browser and a server, the data can only be text
* JSON is text
* JSON can be easily transferred (and stored)
* The notation is very close to JavaScript objects, easy to handle from JavaScript. No complex parsing required.
* More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

---

### JSON example

```json
{
    "name": "Bob",
    "instructor": true,
    "hobbies": [ "eat", "sleep" ],
    "age": 86,
    "workAddress": {
        "street": "Invalidenstraße",
        "number": 116,
        "city": "Berlin"
    }
}
```

---

### object <-> JSON

JavaScript offers us an API to convert an object to JSON and vice versa:

```js
let obj = {
    name: "Bob",
    instructor: true
};

// turn our object to JSON:
let json = JSON.stringify(obj);

// turn our JSON back to an object:
let jsonAsObj = JSON.parse(json);
```

---

### Quiz

* What does the following output?

```js
typeof JSON.stringify({ name: "Bob" });
typeof JSON.parse('{"city":"Berlin"}');
```

---

### Quiz - answer

```js
typeof JSON.stringify({ name: "Bob" }); // "string"
typeof JSON.parse('{"city":"Berlin"}'); // "object"
```

---

### Recap - API

* API stands for **A**pplication **P**rogramming **I**nterface
* It is the *contract* between your application and the server

![API](images/API.png) <!-- .element height="400px" width="400px" -->

---

### REST API

* REST stands for **Re**presentational **S**tate **T**ransfer
* REST APIs work via http(s), the same protocol we use to connect to any website
* REST APIs commonly use JSON to exchange data
* Example for a REST API call: https://restcountries.eu/rest/v2/lang/de
* More info: https://developer.mozilla.org/en-US/docs/Glossary/REST

---

### What is missing?

* Now we know how to **talk** to a server: REST API
* Now we know how to **exchange** data with a server: JSON
* But how do we **connect** to the server from within JavaScript?

---

### The dark past: XMLHttpRequest

```js
let url = 'https://something.com/';

function load(url, callback) {
 let xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
     callback(xhr.response);
   }
 }

 xhr.open('GET', url, true);
 xhr.send(null);
}
```

---

### fetch - Promises

```js
fetch("http://something.com").then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log("got json: " + json);
  });
```

---

### fetch - async/await

```js
async function fetchMyApi() {
  let response = await fetch("http://something.com");
  let result = await response.json();
  console.log(result);
}
```

---

### async/await

* Fetching data from the internet might take a lot of time
* We must not block our browser while waiting for the reply!
* `XMLHttpRequest` was working with callbacks. The API is ugly, error-prone and difficult to use
* `fetch` with promises is a bit better, but still complex to use
* `fetch` with `await/async` is the cleanest, easiest

---

### async/await

* JavaScript introduced two new keywords: `async` and `await`
* We can use the `await` keyword only in `async` functions!
* `await` executes the call, continues executing the code which comes after the `async` function
* once the result of the `await` is available, the code in the `async` function resumes
* This allows us to execute long-running functions without blocking the browser

---

### Full fetch example

```js
async function fetchMyApi() {
  // connects to something.com
  let response = await fetch("http://something.com");
  // "downloads" the resource, converts the JSON for us.
  // We don't need to call JSON.parse()!
  let result = await response.json();
  console.log(result);
}

fetchMyApi();
console.log("after calling fetchMyApi()");
```

---

### Recap: Quiz

1. Quiz sample URL: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
1. Were you able to download that URL from within JavaScript?
1. Were you able to read/explain the response?
1. Were you able to extract the relevant data from the response?
1. Were you able to render that data in HTML?
1. Were you able to add the logic of shuffling / state management?

---

### Let's play

* Open the following URL in your browser:
* https://dog.ceo/api/breeds/image/random
* Describe the output

---

### Now, from JavaScript

```js
async function fetchDog() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let result = await response.json();
  console.log(result);
}
fetchDog();
```

* Create a `<img>` element, set its `src` attribute to the message you got from `dog.ceo` and append it to `document.body`!  

---

### Solution

```js
async function fetchDog() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let result = await response.json();
  let image = document.createElement("img");
  image.src = result.message;
  document.body.appendChild(image);
}
fetchDog();
```

---

### Leaflet

* Can you `fetch` the URL below and check the output?

```js
    let apiKey = 'XXX'; // check slack channel
    let url = "https://places.ls.hereapi.com/places/v1/autosuggest?at=52.531587,13.384742&q=cafe&apiKey=" + apiKey;
```

---

### Search reply

* We're getting a JSON object with one property called `result`
* The type of `result` is an array.

```js
    let response = await fetch(url);
    let reply = await response.json();
    for (let result of reply.resulsts) {
        // ...
    }
```

---

### Result

* Every result has a couple of properties
* `position` looks interesting - it has the lat/lon coordinate
* `title` contains the name of the place
* Can you create one marker on our map for every result?

---

### Bonus

* Add a button called "search" that searches around the currently visible area for cafes
* Add an input field that lets the user specify other search terms than "cafe"
* Note - Use `encodeURIComponent` to escape the user input

---

### Further Practices

* Use the free API from https://restcountries.eu
* Example API call:
   * https://restcountries.eu/rest/v2/name/germany
* Look at the result
* Use the `fetch` API to fetch the JSON. Can you show the name, capital, population and the flag on your web page?
* BONUS: Add an `<input>` field where the user can enter a country name, then show details about that country