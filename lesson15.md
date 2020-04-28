<!-- .slide: id="lesson15" -->

# Basic Frontend - Spring 2020

Lesson 15, Tuesday, 2020-04-28

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
