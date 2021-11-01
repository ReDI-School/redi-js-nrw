
const me = {
  name: "Abdo",
  age: 27,
  haircolor: 'black',
  eyecolor: 'black'
}
console.log(me);
console.log("hello" + me.name);
me.age = 33;
console.log(me.age);

let friends = [
  { name: 'John Carmack', age: 23 },
  { name: 'Frances Northcutt', age: 25 },
  { name: 'John Nash', age: 66 }
];

for (var i = 0; i < friends.length; i++) {
  // console.log(friends[i].name)
  ;
  console.log(`Hi! This is ${friends[i].name}!`);
}

for (let friend of friends) {
  // console.log(friends[i].name);
  console.log(`Hi! This is ${friend.name}!`);
}

// Lets goooooooo
function isInRange(value, range) {
  if (value >= range.min && value <= range.max) {
    return true;
  } else {
    return false;
  }






  (isInRange4, { min: 0, max: 5 }); // should return true
  isInRange(4, { min: 4, max: 5 }) // should return true
  isInRange(4, { min: 6, max: 10 }) // should return false
  isInRange(5, { min: 5, max: 5 }) // should return true




