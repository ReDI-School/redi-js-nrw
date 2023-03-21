
// HOMEWORK
//
// This is a real interview question for a Junior JavaScript developer:
//
// Print all the numbers from 1 to 100 to console
// If the number is divisible by 3, print “Fizz” instead
// If the number is divisible by 5 (and not by 3), print “Buzz” instead
// If the number is divisible by both 3 and 5, print “FizzBuzz” instead

// 00. FOR ---------------- draft
// for (let i = 1; i <= 100; i++) {
//   let name = ""
//   console.log(`Number ${i} ${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}`);
// }

// 01. FOR ---------------- Test
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }

  // console.log(`${i % 3 === 0 ? "Fizz" : i % 5 !== 0 ? i : ""}${i % 5 === 0 ? "Buzz" : ""}`);
}
