// EASY

// Write a function that accepts the following sales data and returns number of sales and total revenue

// Data:

let monthlySalesInEuro = [12, 34, 25, 6, 54, 8, 98, 76, 45, 78];

function getMonthlySalesInfo(monthlySalesInEuro) {
  // accept an array of sales,
  // returns number of sales and total revenue
  monthlyInfo = { numberOfSales: 0, totalRevenue: 0 };
  monthlyInfo.numberOfSales = monthlySalesInEuro.length;
  // const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const reducer = (total, value) => total += value;
  monthlyInfo.totalRevenue = monthlySalesInEuro.reduce(reducer, 0);
  return monthlyInfo;
}
console.log(getMonthlySalesInfo(monthlySalesInEuro));

// MEDIUM

// Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month

// Data:

let quarterlySalesInEuro = {
  Jan: [12, 34, 25, 6, 54, 8, 98, 76, 45, 78, 1000],
  Feb: [54, 8, 98, 76, 2000],
  March: [8, 98, 76, 45, 78, 3000],
};

function getMonthlyRevenueInfo(monthlySalesInEuro) {
  let monthlyRevenueInfo = { highestRevenue: 0, averageRevenue: 0 };
  let { numberOfSales, totalRevenue } = getMonthlySalesInfo(monthlySalesInEuro);
  monthlyRevenueInfo.averageRevenue = totalRevenue / numberOfSales;
  monthlyRevenueInfo.highestRevenue = Math.max(...monthlySalesInEuro);
  return monthlyRevenueInfo;
}

console.log(getMonthlyRevenueInfo(monthlySalesInEuro));

function getQuarterlySalesInfo(quarterlySalesInEuro) {

  // accepts quarterly sales data,
  // returns total number of sales, total revenue, 
  // highest revenue in a single month and average revenue per month
  let numberOfSales = 0;
  let totalRevenue = 0;
  for (let monthlySalesInEur in quarterlySalesInEuro) {
    let monthlySalesInfo = getMonthlySalesInfo(monthlySalesInEuro);
    numberOfSales += monthlySalesInfo.numberOfSales;
    totalRevenue += monthlySalesInfo.totalRevenue;
  }

  quarterlySalesInfo = {
    numberOfSales: numberOfSales,
    totalRevenue: totalRevenue,
    Jan: getMonthlyRevenueInfo(quarterlySalesInEuro.Jan),
    Feb: getMonthlyRevenueInfo(quarterlySalesInEuro.Feb),
    March: getMonthlyRevenueInfo(quarterlySalesInEuro.March)
  };

  return quarterlySalesInfo;
}

console.log(getQuarterlySalesInfo(quarterlySalesInEuro));

// DIFFICULT

// Write a function that accepts the following sales data and returns total number of sales, total revenue, highest revenue in a single month and average revenue per month 

// Data:

// let quarterlySalesInEuro = {
//   Jan: [12.01, 34.59, 25.23, 6.42, 54.24, 8.3, 98.01, 76, 45, 78],
//   Feb: [54, 8.3, 98, 76.4],
//   March: [8, 98, 76.32, 45.23, 78],
// };