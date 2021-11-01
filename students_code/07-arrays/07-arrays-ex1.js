
// EXERCISE 1
//
// Step 1: Create an array with your 3 top friends (or foes)
//
// Step 2: Say "hello" on console to each friend, e.g.:

// e.g.
// hello Alice
// hello Bob
// hello Carol


// 1. -------------- JULIET
console.log("JULIET's solution ----------");

let mainFriends = ["Carol", "Mary", "Flo"];

mainFriends.push("Linda");

for (let i = 0; i < mainFriends.length; i++) {
  console.log(`Hello ${mainFriends[i]}`);
}

// D.R.Y.
// Don't Repeat Yourself
// console.log(`Hi ${mainFriends[0]}`);
// console.log(`Hi ${mainFriends[1]}`);
// console.log(`Hi ${mainFriends[2]}`);


// template string go between backtick: `here: ${myVar}`

// 2. -------------- Marwa
console.log("Marwa");
let friends = ["mona", "ali", "ahmed"];
for (let i = 0; i < friends.length; i++) {
  console.log(`Hello ${friends[i]}`);
}


// 3. -------------- GLORY
console.log("GLORY's solution ----------");

const topFriends = ['Papa', 'John', 'Mike'];
function loops() {
  for (let i = 0; i < topFriends.length; i++) {
    console.log(`these are my friends ${topFriends[i]}`);
  }
}
loops();

// 4. -------------- ZEYNEP
console.log("ZEYNEP's solution ----------");

let myFriends = ["Gabi", "ayse", "clara"];
for (let i = 0; i < myFriends.length; i++) {
  console.log(`Hello ${myFriends[i]}`);
  // console.log("Hello " + myFriends[i]);
}

// 5. -------------- MESUT
console.log("MESUT's solution ----------");

let myGuys = ["Ali", "Ahmet", "Ayse"];
for (let i = 0; i < myGuys.length; i++) {
  console.log(`Hello ${myGuys[i]}`);
}

// 6. --------------


// 7. Onyinye
console.log("Onyinye's solution ----------");

let myBestFriends = ["Chuks", "Oge", "Kirstin"];
for (let i = 0; i < myBestFriends.length; i++) {
  console.log(`Hello ${myBestFriends[i]}`);
}

// A. Create an array with your 3 top friends (or foes)
// B. Say "hello" on console to each friend, e.g.:



// 8. -Abdo
// Step 2: Say "hello" on console to each friend, e.g.:
console.log("Abdo's solution ----------");

let myTopFriends = ["Mazen", "Omar", "J"];

for (i = 0; i < myTopFriends.length; i++) {
  console.log("Hello " + myTopFriends[i]);
}



// 9. -------------- Lorenzo
console.log("Lorenzo's solution ----------");

const myBestSuperFriends = ["Dario", "Simone", "Carla"];
// myBestSuperFriends = 123;

const thisIsSomething = "something";
// thisIsSomething = "other";

let myOtherFriends = ["Frank", "Roberto", "Giulia"];

myBestSuperFriends.push("Roberto");
myBestSuperFriends.push("Alessia");
myBestSuperFriends.push(...myOtherFriends); // "Frank,Roberto,Giulia"




// BONUS: for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


myBestSuperFriends[0] = "MisterZero";

// for (i = 0; i < myBestBuddies.length; i++) {
//   myBestBuddies[i] = "**";
//   console.log("Hello " + myBestBuddies[i]);
// }



for (const myFriendsName of myBestSuperFriends) {
  myStartFriendsName = `** ${myFriendsName} **`;
  console.log(`Hello ${myStartFriendsName}`);
}

for (let myFriendsName of myBestSuperFriends) {

  console.log(`Hello ${myFriendsName}`);
}

// for (i = 0; i < myBestBuddies.length; i++) {
//   console.log("Hello " + myBestBuddies[i]);
// }




