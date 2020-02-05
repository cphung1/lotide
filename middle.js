const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i <= arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  const result = eqArrays(firstArray, secondArray);
  if (!result) {
    console.log(`🛑🛑🛑 Arrays are not equal.`);
  } else {
    console.log(`✅✅✅ Arrays are equal.`);
  }
};


const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  let results = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      results.push(array[middleIndex - 1]);
    }
    results.push(array[middleIndex]);
  }
  return results;
};


// TEST CODE
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 'three', 4, 5, 'six']));

assertArraysEqual(middle([1]), middle([1, 2])); // equal: both are empty arrays
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 4, 6])); // not equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5])); // equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4])); // not equal: not same lengths
assertArraysEqual(middle([1, 2, 'three', 4, 5, 'six']), middle([1, 2, 'three', 4, 5, 'six'])); // equal
assertArraysEqual(middle([1, 2, 'three', 4, 5, 'six']), middle([1, 2, 3, 4, 5, 'six'])); // not equal
assertArraysEqual(middle([1, 2, 3, 4]), middle(['one', 'two', 'three', 'four'])); // not equal