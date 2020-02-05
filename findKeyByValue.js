const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const val in object) {
    if (object[val] === value) {
      return val;
    }
  }
  return undefined;
};


//Test Cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Hello"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 5), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "drama"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "the wire"), undefined);