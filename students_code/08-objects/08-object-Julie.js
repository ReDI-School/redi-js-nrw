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

const me = {
  name: "Juliet",
  age: 27,
  hairColor: "Black",
  eyeColor: "Brown",
  isMarried: true,
  sayHi: function () {
    return "hi there";
  }

}

console.log(me);
console.log(me.name);
console.log(`hello my name is ${me.name}`);
console.log(sayHi);