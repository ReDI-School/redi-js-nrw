// EASY

// Write a function that takes customer data and returns a string consisting of:

// "Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

// Data:

let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};

function getEmailText(customerData) {

  let currency = "";
  if (customerData.currency) {
    currency = customerData.currency;
  }
  // listOfKeys = Object.keys(customerData);
  // const found = listOfKeys.find(key => key === "currency");
  // if (found) {
  //   currency = customerData.currency;
  // }
  return `Dear ${customerData.name}, thanks for your purchase of a ${customerData.productPurchased} for the price of ${customerData.productPrice} ${currency}`;
}

let emailText = getEmailText(customerData);
console.log(emailText);
// sendEmail(recipient, emailText);


// MEDIUM

// Write a function that takes customer data and returns an array of strings each consisting of:

// "Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

// Data:

let customerDataArray = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];

function getEmailTexts(customerDataArray) {
  // emailTexts = [];
  // for (customerData of customerDataArray) {
  //   emailTexts.push(getEmailText(customerData));
  // }
  // return emailTexts;

  // return customerDataArray.map(
  //   function (customerData) {
  //     return getEmailText(customerData);
  //   }
  // );

  return customerDataArray.map(customerData => getEmailText(customerData));
}

console.log(getEmailTexts(customerDataArray));

// HARD

// Write a function that takes an array of customer data and returns an array of strings containing:

// "Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

// Price should be shown in local format

// Data:

let customerDataWithCurrencyArray = [
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

console.log(getEmailTexts(customerDataWithCurrencyArray));
