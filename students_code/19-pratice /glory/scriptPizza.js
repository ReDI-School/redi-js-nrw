let initialKitchenStorage = {
  flourInGrams: 10000,
  eggs: 48,
  tomatoSauceInMl: 2000,
  beefInGrams: 10000,
  mixedHerbsInGrams: 2000,
  cheeseInGrams: 10000,
};

let recipes = {
  pizza: {
    flourInGrams: 200,
    tomatoSauceInMl: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 100,
  },
  pasta: {
    flourInGrams: 100,
    eggs: 1,
    tomatoSauceInMl: 100,
    beefInGrams: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 25,
  },
  lasagna: {

  }
};

// the starting storage and recipes from previous slides

let currentKitchenStorage = initialKitchenStorage;

function itemOrder(order, kitchenStorage) {
  //your code here
}

currentKitchenStorage = itemOrder("pizza", currentKitchenStorage);
//
// console.log(currentKitchenStorage)
//
// function itemOrder(order, kitchenStorage) {
//   //your code here
//   const { pizza, pasta, lasagna } = recipes;
//   if ((order === pizza)) {
//     return initialKitchenStorage.flourInGrams - +pizza.flourInGrams;
  }
}
console.log(itemOrder("pizza", currentKitchenStorage));