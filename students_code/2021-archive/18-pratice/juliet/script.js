let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};

function writingEmail(data) {
  return `Dear ${data.name}, thanks for your purchase of a ${data.productPurchased} for the price of ${data.productPrice}`
}

writingEmail(customerData);

console.log(writingEmail(customerData));

let customerDataUpdate = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];

function writeEmail(data) {
  return `Dear ${name}, thanks for your purchase of a ${productPurchased} for the price of ${productPrice}`
}

writeEmail(customerDataUpdate);
