// // Rest -------------------

// let p1 = { name: "John Carmack", age: 23 };
// let p2 = { name: "Frances Northcutt", age: 25 };
// let p3 = { name: "John Nash", age: 66 };

// // rest operator ...
// function getFriends(...parameters) {
//   // parameters = [p1, p2, p3, p1, p2, p2];

//   for (const param of parameters) {
//     // console.log(`Hello! My name is: ${param.name} My age is: ${param.age}`);
//     console.log('Hello! My name is: ' + param.name + "My age is: " + param.age);
//   }
// }

// getFriends(p1, p2, p3, p1, p2, p2);


// // Spread -------------------------------


// let listOfFriends = ["Lorenzo", "Glory", "Marwa"];

// // without the spread operator you will have a list inside a list
// let listOfMoreFriendsNoSpread = ["Giovanni", "Pedro", listOfFriends];
// // ["Giovanni", "Pedro", ["Lorenzo", "Glory", "Marwa"] ];

// // spread
// let listOfMoreFriendsSpread = ["Giovanni", "Pedro", ...listOfFriends];
// // ["Giovanni", "Pedro", "Lorenzo", "Glory", "Marwa"];



// // Nested Arrays

// let movingBox = [['Hat', 'Jar'], ['Cup', 'Brush']];
// console.log(movingBox[0][1]);  // second element in first array is "Jar"

// console.log(movingBox[1][0]);  // first element in second array is "Cup"

// let secondArray = movingBox[1];
// let firstElement = secondArray[0];

// let movingBoxExtended = [['Hat', 'Jar'], ['Cup', 'Brush'], ['Soap', 'Mug']];

// movingBox.push(['Book', 'Pan']);
// console.log("what is movingBox?", movingBox);

let input = document.getElementById("apple");
console.log(`This is the value: ${input.value}`);

function changeValue(value) {
  let input = document.getElementById("apple");
  input.value = value;
}