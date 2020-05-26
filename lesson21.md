<!-- .slide: id="lesson21" -->

# Basic Frontend - Spring 2020

Lesson 21, Tuesday, 2020-05-26

---

### Recap

* What did we learn last lesson?

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

### Final Project

* We need some ideas :)
* Should be complex enough to finish in 4 lessons
* You're of course free to invest more time, but we only expect 4 lessons
* Ideally, we'll all work on the same idea in teams of 2-3 people, but we won't force anyone :)

---

### Leaflet

* Let's add some more bling to our leaflet.
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
