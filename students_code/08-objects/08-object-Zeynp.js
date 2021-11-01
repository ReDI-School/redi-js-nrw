// Lesson 08 Objets Exercise 3
// https://redi-school.github.io/js-nrw-2021-fall/#/219

// Try it yourself: create a new file named 08-objects-ex3-<your_nickname>.js

// Inside this new file:
//
// Create an object called "me" containing the following information about you:
//
// name
// age
// hair color
// eye color
//
// Log your object to the console

let me = {
  name: 'Zeynep',
  age: 30,
  hairColor: 'Brown',
  eyeColor: 'Brown'
};
console.log(me);
console.log(me.name);
console.log(`hello my name is ${me.name}`);
// console.log("hello my name is " + me.name);
console.log(me.age);
me.age = 19;
console.log(me.age);

// friends is a list and use index not key-value

let friends = [
  { name: 'John Carmack', age: 23 },
  { name: 'Frances Northcutt', age: 25 },
  { name: 'John Nash', age: 66 }
];

console.log(friends[0].name);
