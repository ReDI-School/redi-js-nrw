let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};

function writeEmail(data) {

  if (data.currency) {
    return `Dear ${data.name}, thanks for your purchase of a ${data.productpurchased} for the price of  ${data.productPrice}${data.currency}   `;
  } else {
    return `Dear ${data.name}, thanks for your purchase of a ${data.productpurchased} for the price of  ${data.productPrice} `;
  }
}

writeEmail(customerData);
console.log(writeEmail(customerData));

let customerData2 = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];

function w_Email(customers) {
  let result = [];
  for (let customer of customers) {
    let customerRes = writeEmail(customer);
    result.push(customerRes);
  }
  return result;
}
console.log(w_Email(customerData2));


let customerData3 = [
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