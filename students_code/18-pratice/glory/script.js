let customerData = {
  name: "James",
  productPurchased: "phone",
  productPrice: "€200",
};

const getPara = function (para) {
  let { name, productPurchased, productPrice } = para;
  return `Dear ${name}, thanks for your purchase of a ${productPurchased} for the price of ${productPurchased}`;
};
console.log(getPara(customerData));



// question 2
const arrStrings = function (acc) {
  acc.forEach((element) => {
    console.log(
      `Dear ${element.name}, thanks for your purchase of a ${element.productPurchased} for the ${element.productPrice} of ${element.productPurchased}`
    );
  });
};

arrStrings(customerData2);

// Next
function check(man) {
  let total = 0;
  for (let i = 0; i < man.length; i++) {
    total += man[i];
  }
  return `${man.length} and ${total}`;
}

console.log(check(monthlySalesInEuro));