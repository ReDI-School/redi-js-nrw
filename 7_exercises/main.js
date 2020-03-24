/***** Exercise 1 *****/
console.log("Exercise 1:");
let friends = ["Alice", "Bob", "Carol"];

console.log("hello " + friends[0]);
console.log("hello " + friends[1]);
console.log("hello " + friends[2]);

/***** Exercise 2 *****/
console.log("Exercise 2:");
friends = ["Alice", "Bob", "Carol"];

for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log("hello " + friend);
}

/***** Exercise 3 *****/
console.log("Exercise 3:");
let numbers = [3, 2, 9, 5, 6];

// 1. last element
let lastIndex = numbers.length - 1;
let lastNumber = numbers[lastIndex];
console.log("Last element: " + lastNumber);

// 2. sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
}
console.log("Sum of numbers:" + sum);

// 3. largest number
let largestNumber = numbers[0]; // Set the "largest" to the first item

// We can start at index 1 because we already saved index 0
for (let i = 1; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (largestNumber < currentNumber) {
        largestNumber = currentNumber;
    }
}
console.log("Largest number: " + largestNumber)

// 4. average (mean) of all numbers
sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
}
let mean = sum / numbers.length;
console.log("Mean of numbers: " + mean);

/***** Bonus Exercise *****/
console.log("Bonus exercise:");

function smallerThan5(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        if (currentItem < 5) {
            result.push(currentItem);
        }
    }
    return result;
}

console.log("Numbers of input smaller than 5: " + smallerThan5([1, 3, 7, 2, 9, 5]))

function findIndex(itemToFind, input) {
    let foundIndex = -1;
    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        if (currentItem === itemToFind) {
            foundIndex = i;
            // break;
        }
    }
    return foundIndex;
}

console.log("Index of 9 is: " + findIndex(9, [1, 3, 7, 2, 9, 5]));
