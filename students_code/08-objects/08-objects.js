// Lesson 08 - OBJECTS -------------------------


// Recap: Loops

// What are Loops? When do we use them?

// What kind of Loops did we talk about?

// while (condition){
//   // code
// }

// for (init; condition; update) {
//   // code
// }

// How does each loop type look like and work?





// Recap: Arrays

// What are Arrays?

// How do we create an array? Empty?
let emptyArray = [];

// How do we access elements of an array? The first, the last? How many elements are there?
let anArray = [2, 3, 5, 5]; // anArray.length -> 4
let firstElement = anArray[0];
anArray.push(342);
let lastElement1 = anArray[3]; // anArray.length -> 5
let lastElement2 = anArray[anArray.length - 1];
let lastElement1 = anArray[-1]; // anArray.length -> 5

// We can use loops to go through elements of an array.
for (let myNumber of anArray) {
  console.log(myNumber);
}
// we can also change the values in the array.

// and add additional items at the end of the array

// BONUS: for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of




// Homework review -> mob programming

// Recap Loops/Arrays Exercise 1 -> mob programming

// Recap Loops/Arrays Exercise 2 -> mob programming






// Objects

// An object is a group of properties, expressed as key / value pairs, and separated by a comma.

// We put any properties in the {}, these are written as a pair
//
// key: value
//
// If we have more than one property, we need to add a comma after each pair.

// Example
let person = {
  name: 'John Carmack',
  age: 23,
  address: 'karl-marx-str. 100 Berlin'
};

// Can you guess how we can create an object?
const dog = {
  name: 'Snoopy',
  food: 'fries'
};

// How we can create an empty object?
let emptyObject = {};

// Exercise: pair programming (ex3)

// We can also add functions as properties
//
// let mathStuff = {
//   PI: 3.14,
//   square: function(x) {
//     return x * x;
//   },
//   half: function (x) {
//     return x / 2;
//   }
// };


// What can we do with an object?

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






// What would happen here?

const person = {
  name: 'John!',
  age: 25,
  isMarried: false
};

console.log(person.numChildren); // ????
person.lastName = 'Smith'; // ????
person.isMarried(); // ????



// BONUS: high order functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



