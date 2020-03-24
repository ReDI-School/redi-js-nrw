// There are many ways to implement FizzBuzz,
// with pros/cons to each way.

/*
  Print all the numbers from 1 to 100 to console:
    If the number is divisible by 3, print “Fizz” instead
    If the number is divisible by 5 (and not by 3), print “Buzz” instead
    If the number is divisible by both 3 and 5, print “FizzBuzz” instead
 */

function fizzBuzz1() {
    for (let i = 1; i < 100; i++) {
        let result = "";
        if (i % 3 === 0) {
            result += "Fizz";
        }
        if (i % 5 === 0) {
            result += "Buzz";
        }

        if (result === "") {
            console.log(i);
        } else {
            console.log(result);
        }
    }

}

function fizzBuzz2() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log("Solution 1:");
fizzBuzz1();

console.log("Solution 2:");
fizzBuzz2();