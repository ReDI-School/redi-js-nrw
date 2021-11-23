let monthlySalesInEuro = [12, 34, 25, 6, 54, 8, 98, 76, 45, 78];

function dataSale(monthlyData) {
  let dataSalesInfo = { numberOfSales: 0, totalRevenue: 0 };
  // dataSalesInf.["numberOfSal "] = monthlyData.length;
  dataSalesInfo.numberOfSales = monthlyData.length;
  let totalRevenue;
  for (sale of monthl.Data) {
    dataSalesInfo[totalRevenue] += sale / dataSalesInfo.numberOfSales;
  }


  return dataSalesInfo;


}
console.log(dataSale(monthlySalesInEuro));