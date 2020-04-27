<!-- .slide: id="lesson14" -->

# Basic Frontend - Spring 2020

Lesson 14, Thursday, 2020-04-23

---

### Recap - Datatypes

```js
let a1 = 42;
let a2 = true;
let a3 = "hello";
let a4 = function() {};
let a5;
let a6 = [];
let a7 = {};
```

---

### Solution - Datatypes

```js
let a1 = 42;       // number
let a2 = true;     // boolean
let a3 = "hello";  // string
let a4 = function() {};  // function
let a5;            // undefined
let a6 = [];       // object (array)
let a7 = {};       // object
```

---

### Null

* There's one datatype that we haven't learned about yet: `null`
* `null` is like `undefined`. It indicates the absence of a value.
* `null` can be used to indicate an *intentional* abscence of an object value.
* Example: `document.getElementById("NoExist");` returns `null`

---

### Recap - DOM

* DOM is an API
* It allows us to add/remove/change any element of a web page
* We can make TODO lists, games and cool CSS animations
* But how would we create a web page with "dynamic" data, for example today's weather?

---

<!-- .slide: id="lesson14:WebAPI" -->

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

### Homework

* Use the free API from https://restcountries.eu
* Example API call:
   * https://restcountries.eu/rest/v2/name/germany
* Look at the result
* Use the `fetch` API to fetch the JSON. Can you show the name, capital, population and the flag on your web page?
* BONUS: Add an `<input>` field where the user can enter a country name, then show details about that country
