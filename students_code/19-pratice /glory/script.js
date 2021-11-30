let score = 0;
let points = 0;
let multiplier = 1;
let upgradeCost = 50;

function handleButtonClick() {}

function handleUpgradeClick() {}

function handleDarkModeClick() {}

function updateScores() {
  let scoreDisplay = document.getElementById("scoreCount");
  scoreDisplay.textContent = "score: " + score;
  let pointsDisplay = document.getElementById("pointsCount");
  pointsDisplay.textContent = "points: " + points;
  let multiplierDisplay = document.getElementById("multiplierCount");
  multiplierDisplay.textContent = "multiplier: " + multiplier;
  let upgradeButton = document.getElementById("upgradeClicker");
  upgradeButton.textContent = "upgrade cost is " + upgradeCost;
}

function itemOrder(order, kitchenStorage) {
  //your code here
  const { pizza, pasta } = recipes;
  if ((order = pizza)) {
    return initialKitchenStorage.flourInGrams - +pizza.flourInGrams;
  }
}
console.log(itemOrder("pizza", currentKitchenStorage));