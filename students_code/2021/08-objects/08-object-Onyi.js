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
  name: 'Onyinye',
  age: 37,
  hairColor: 'black',
  eyeColor: 'white',
  sayHi: function () {
    return "hi there!";
  }
};

// console.log(me);
console.log(me.name);
console.log(me.age);
// Print on the console: "Hello my name is Onyinye"
console.log("Hello my name is " + me.name);
console.log(me.sayHi());
