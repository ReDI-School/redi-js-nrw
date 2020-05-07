<!-- .slide: id="lesson18" -->

# Basic Frontend - Spring 2020

Lesson 18, Thursday, 2020-05-07

---

### Practicing with Functions, Arrays and Objects

For this lesson we will together complete 3 practice tasks. We will be split into small groups so that you can ask questions to the teacher in your class.

Each task will have a 5 min introduction, 20 min to complete the task in the breakout rooms and 10 min for a demonstration of the solutions.

These are meant to be simple use cases for automating manual business activity

---

### Instructions

Feel free to decide your own difficultly level

Copy the data variables into your code editor to get you started, then write your own function. you can set the output by logging the return value to the console.

---

### Writing an email using data (easy)

Write a function that takes customer data and returns a string consisting of:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Data:

```js
let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};
```

---

### Writing an email using data (medium)

Write a function that takes customer data and returns an array of strings each consisting of:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Data:

```js
let customerData = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];
```

---

### Writing an email using data (difficult)

Write a function that takes an array of customer data and returns an array of strings containing:

"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

Price should be shown in local format

Data (see next slide)

---

```js
let customerData = [
  {
    name: "James",
    productPurchased: "phone",
    productPrice: 200,
    locale: "de-DE",
    currency: "EUR",
  },
  {
    name: "Carlos",
    productPurchased: "car",
    productPrice: 20000,
    locale: "de-DE",
    currency: "EUR",
  },
  {
    name: "Sevtap",
    productPurchased: "Xbox",
    productPrice: 400,
    locale: "en-GB",
    currency: "GBP",
  },
];
```

---

### Analyze this sales data (easy)

Write a function that accepts the following sales data and returns number of sales and total revenue

Data:

```js
let monthlySalesInEuro = [12, 34, 25, 6, 54, 8, 98, 76, 45, 78];
```

---

### Analyze this sales data (medium)

Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month

Data:

```js
let quarterlySalesInEuro = {
  Jan: [12, 34, 25, 6, 54, 8, 98, 76, 45, 78],
  Feb: [54, 8, 98, 76],
  March: [8, 98, 76, 45, 78],
};
```

---

### Analyze this sales data (difficult)

Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month

Data:

```js
let quarterlySalesInEuro = {
  Jan: [12.01, 34.59, 25.23, 6.42, 54.24, 8.3, 98.01, 76, 45, 78],
  Feb: [54, 8.3, 98, 76.4],
  March: [8, 98, 76.32, 45.23, 78],
};
```

---

### Publish cinema times (easy)

Write a function that takes cinema times and outputs the day that has the most times available

Data:

```js
let cinemaTimes = {
  monday: [10, 13, 17, 22],
  tuesday: [10, 13, 17, 22],
  wednesday: [13, 17, 22],
  thursday: [10, 17, 22],
  friday: [10, 13, 22],
  saturday: [10, 13, 14, 17, 22],
  sunday: [10, 13, 17, 19, 20, 22],
};
```

---

### Publish cinema times (medium)

Write a function that takes cinema times and a string containing the day of the week that returns the available movies on that day with session times.

Data (see next slide):

---

```js
let movieDisplayNames = {
  theRoom: "The Room",
  starWars: "Star Wars: Revenge of the Sith (Episode III)",
  marvel: "Avengers: Endgame",
};

let cinemaTimes = {
  monday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  tuesday: { starWars: [15], marvel: [20, 23] },
  wednesday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  thursday: { theRoom: [10, 22], starWars: [15, 17] },
  friday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  saturday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  sunday: {
    theRoom: [10, 13, 17],
    starWars: [10, 15, 17, 23],
    marvel: [20, 23],
  },
};
```

---

### Publish cinema times (difficult)

Write a function that takes cinema times, preferred langauge and a string containing the day of the week that returns the available movies on that day with session times in their preferred langauge.

Data (see next slide)

---

```js
let movieTranslations = {
  en: {
    theRoom: "The Room",
    starWars: "Star Wars: Revenge of the Sith (Episode III)",
    marvel: "Avengers: Endgame",
  },
  de: {
    theRoom: "das Zimmer",
    starWars: "Star Wars: Die Rache der Sith (Episode III)",
    marvel: "Avengers: Spiel beenden",
  },
};

let cinemaTimes = {
  monday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  tuesday: { starWars: [15], marvel: [20, 23] },
  wednesday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  thursday: { theRoom: [10, 22], starWars: [15, 17] },
  friday: { theRoom: [10, 13, 17, 22], starWars: [15, 18], marvel: [20, 23] },
  saturday: { theRoom: [10, 13, 17, 22], starWars: [15, 18], marvel: [20, 23] },
  sunday: {
    theRoom: [10, 13, 17],
    starWars: [10, 15, 18, 23],
    marvel: [16, 20, 22],
  },
};
```

### Bonus

Write a function that also accepts the time of day and displays the next movie playing.
