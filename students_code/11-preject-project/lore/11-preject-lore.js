// const randomNumber = Math.floor(Math.random() * 100) + 1;
// const form = document.getElementById("form");
// console.log('Random Number', randomNumber)



// function checkGuess(e) {
//   e.preventDefault();
//   let myGuess = guess.value
//   if (myGuess === randomNumber) {
//     feedback.textContent = "You got it right!"
//   } else if (myGuess > randomNumber) {
//     feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
//   } else if (myGuess < randomNumber) {
//     feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
//   }
// }



// form.addEventListener('submit', checkGuess)


// this one global
const meaningOfLife = 42;
console.log(`global value of ${meaningOfLife}`);

{ // start of a scope

  // this one is existing inside of this scope
  let thisOtherMeaning = 0;
  const meaningOfLife = 222;
  console.log(`scope value of ${meaningOfLife}`);

  function doThat(b) {
    // this one shadows the global one
    const meaningOfLife = 36;
    console.log(meaningOfLife);
    let c = 100;
    console.log(a); // runtime error
    let a = 3;
    console.log(a); // ok
    return a + b + c;
  }

  console.log(meaningOfLife);         // 42
  console.log(doThat(2)); // 3 + 2 + 100 = 105
  console.log(meaningOfLife);         // 3
}

console.log(thisOtherMeaning);