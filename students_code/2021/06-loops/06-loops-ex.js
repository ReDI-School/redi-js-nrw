// Draw a pyramid to console

// *
// **
// ***
// ****
// *****

let stars = '';
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
  stars = '';
}

// BONUS: Count down from 10 to 0 and output it on console.

for (let index = 10; index >= 0; index--) {
  console.log(index);
}