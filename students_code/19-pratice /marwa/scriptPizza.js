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
};

// the starting storage and recipes from previous slides

let currentKitchenStorage = initialKitchenStorage;

function itemOrder(order, oldPantry) {
  const newPantry = { ... oldPantry};
  let recipe = recipes[order];
  for (let comp in recipe) {
    newPantry[comp] -= recipe[comp];
  }
  if (newPantry contains expired ingredients) {
    return oldPantry;
  }
  return newPantry;
}


function compelteOrder(orders, kitchenStorage) {
  for (let recipe, quantity in orders) {
    for (let comp in recipe) {
      initialKitchenStorage[comp] -= recipe[comp] * quantity;
    }
  }
  // if (aningredient is less 0) {
  //   reject the order!
  // }
}

currentKitchenStorage = itemOrder("pizza", currentKitchenStorage);

console.log(currentKitchenStorage) ;