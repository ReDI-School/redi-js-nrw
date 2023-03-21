// EASY

// Write a function that takes customer data and returns a string consisting of:

// "Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"

// Data:

let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};

function eMail(customerData) {
  return `Dear ${customerData.name} ,thanks for your purchase of a ${customerData.productPurchased} for the price of ${customerData.productPrice}`;
};

console.log(eMail(customerData));


