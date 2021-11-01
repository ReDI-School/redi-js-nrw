// ---- EXERCISE 3 ----

// Create an array containing a few numbers, ex [3, 2, 9, 5, 6]
// Output the last element of your array
// Output the sum of all the numbers in the array
// Output the largest number of the array
// Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

// 1. -------------- JULIET
console.log("JULIET's solution ----------");
const array = [3, 2, 9, 5, 6];
// numbers = "hello!";

// Output the last element of your array
console.log(array[4]);

// Output the sum of all the numbers in the array
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// Output the largest number of the array
console.log(Math.max(3, 2, 9, 5, 6));

// Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

let sumOfTheNumbers = 0;
for (let i = 0; i < array.length; i++) {
  sumOfTheNumbers += array[i];
}
let meanAv = sumOfTheNumbers / array.length;
console.log(meanAv);


// 2. -------------- Marwa
console.log("Marwa's solution ----------");

// 3. -------------- GLORY

console.log("GLORY's solution ----------");
const arr = [1, 2, 3, 4];


///Question 1
// let lastElement = arr.pop(); -> arr = [1, 2, 3];
let tryPop = arr[3];
console.log(tryPop);

///Question 2
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
  arrSum += arr[i];
}
console.log(arrSum);

///Question 3
let largestNumber = 0;

// find the largest number
// https://stackoverflow.com/questions/13794225/finding-largest-integer-in-an-array-in-javascript
// have a look at the comments of that answer :)
for (i = 0; i <= arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}

// arr = [1, 2, 3, 4]
// largest = 0
// i = 0
//   arr[0]=1
//   is 1 > 0
// i = 1
// is 1 > 0 ?
//   var largest = 2;

console.log(`The largest is: ${largestNumber}`);

///Question 4
// Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)
let sumz = 0;
for (let i = 0; i < arr.length; i++) {
  sumz += arr[i];
}
let sumAve = sumz / arr.length;
console.log(sumAve);

// 4. -------------- ZEYNEP
console.log("ZEYNEP's solution ----------");
let arry = [3, 2, 9, 5, 6];
arry.push(10);
console.log(arry[arry.length - 1]);



let maks = arry[0];
for (let i = 0; i < arry.length; i++) {
  if (arry[i] > maks) {
    maks = arry[i];
  }
}
console.log(maks);



// average
let sumArray = 0;
for (let i = 0; i < arry.length; i++) {
  sumArray += arry[i];

}
console.log(sumArray / arry.length);


// 5. -------------- MESUT
console.log("MESUT's solution ----------");

// 6. -------------
console.log("?'s solution ----------");

// 7. Onyinye
console.log("Onyinye's solution ----------");
let result = [3, 2, 9, 5, 6];
console.log(result[4]);

// Output the sum of all the numbers in the array
let totalSum = 0;
for (let i in result) { // for..of
  totalSum += result[i];
}
console.log(totalSum);

// Output the largest number of the array
let resultCount = result.length;
let largestNumber = result[0];
for (let i = 0; i < resultCount; i++) {
  if (largestNumber < result[i]) {
    largestNumber = result[i];
  }
}
console.log("Largest Number", largestNumber);
// Print to console: "Result Count is equal to: 5"
// console.log(resultCount);
// console.log("Result Count is equal to: " + resultCount);
console.log(`Result Count is equal to: ${resultCount}`);

let average = totalSum / resultCount;
console.log(average);

// 8. -Abdo
console.log("Abdo's solution ----------");
//1.Output the last element of your array

let ArrayOfNumbers = [3, 2, 9, 5, 6];
let lastNumber = ArrayOfNumbers[ArrayOfNumbers.length - 1];
console.log(lastNumber);
//____________________________________

//2. Output the sum of all the numbers in the array
let mySum = 0;
for (let i = 0; i < ArrayOfNumbers.length; i++) {
  mySum += ArrayOfNumbers[i];
}
console.log("sum = " + mySum);

//____________________________________
//3. Output the largest number of the array

let largest = ArrayOfNumbers[0];

for (let i = 0; i < ArrayOfNumbers.length; i++) {
  if (largest < ArrayOfNumbers[i]) {
    largest = ArrayOfNumbers[i];
  }
}
console.log("largest = " + largest);
//____________________________________
//5.Output the average 
var total = 0;
for (var i = 0; i < ArrayOfNumbers.length; i++) {
  total += ArrayOfNumbers[i];
}
var avg = total / ArrayOfNumbers.length;

console.log("avg = " + avg);

// 9. -------------- Lorenzo
console.log("Lorenzo's solution ----------");
