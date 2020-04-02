<!-- .slide: id="lesson8" -->

# Basic Frontend - Spring 2020

Lesson 8, Thursday, 2020-03-26

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

### exercise

You have written a program that tells you how likely it is to rain outside (in percent %).

Unfortunately, it is not very accurate, it sometimes gives you more than 100% or less that 0%.

These are the values you got:
```js
[55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001]
```
Write some code that replaces all values less than 0 with 0, and bigger than 100 with 100.

---

### exercise: part 1

write a function called "introduce" that takes a name and an age.

the function should log to the console: "My name is **{name}**, I am **{age}** years old"


---

### exercise: part 2

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
