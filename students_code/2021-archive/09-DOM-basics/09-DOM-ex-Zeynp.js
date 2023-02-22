function isInRange(value, range) { /* YOUR CODE HERE */ }

isInRange(4, { min: 0, max: 5 }) // should return true
isInRange(4, { min: 4, max: 5 }) // should return true
isInRange(4, { min: 6, max: 10 }) // should return false
isInRange(5, { min: 5, max: 5 }) // should return true



function isInRange(value, range) {
  if (value < range.min || value > range.max) {
    return false;
  } else {
    return true;
  }
};