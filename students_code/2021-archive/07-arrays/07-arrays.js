// BASIC FRONTEND - FALL 2021    -    Lesson 7, Thursday, 2021-10-07

// ---- REFRESHER: TYPES ---- 

// Strings
let name = "Marwa";

// Numbers
let thisYear = 2021;

// Booleans
let didIforgetToEat = true; // true or false



//  ---- ARRAYS ---- 

// Array is a container type that holds multiple values.

// what if you want to have a list of groceries?
let groceries = ["banane", "sugar", "salt"];

// how can we create an empty array?
let emptyArray = [];

// we put the numerical values in square brackets
// separated by commas, without quotes (of course)
let ages = [23, 12, 99, 18, 45, 100];





// Arrays can hold any type of value:
let prices = [12.92121212, 29.1232, 100.0, 1.2, 3.14];

// And any quantity:

// I only have one favorite flower
let favoriteFlower = ["rose"];

// An array holding 26 letters of the alphabet

//TODO: finish the letters
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];







// ANALOGY: BOOKSHELF  --> ACCESSING ELEMENTS

// A bookshelf represents an array of books

let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

// We can access an element in the array by its index

// Worth noting: indexes in JS start from 0 (think floors of a building):

// How can I console log: "The Hobbit"
console.log(books[1]);

// How can I console log: "Harry Potter"
console.log(books[0]);

// QUIZ - How can I console log: "Game of Thrones" ?
console.log(books[2]); // "Game of Thrones"

// The order of elements in the array matter!




//---- INVALID ELEMENTS ----

let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
console.log(books[2]); // "Game of Thrones"
console.log(books[3]); // ???


let friends = ["Alice", "Bob", "Carol"];

console.log(friends[1]); // ???
console.log(friends[3]); // ???






// EXERCISE 1: mob programming with arrays!!









//  ---- MODIFYING ARRAYS

let friends = ["Alice", "Bob", "Carol"];

friends[1] = "David";

console.log(friends[1]); // "David"









//  ---- COMMON OPERATIONS: ARRAY LENGTH

// We can get the length of an array with the .length property:
// typeof -> Array
let friends = ["Alice", "Bob", "Carol"];
console.log(friends.length); // -> 3


// EXERCISE 2: mob programming with arrays!!






// BONUS: for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// BONUS: high order functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach