const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element in array) {
    if(!callback(array[element])) {
      newArray.push(array[element]); 
    } else {
      return newArray;
    }
  }
}


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Assertion 
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
    console.log(`🛑🛑🛑 Arrays are not equal. [${firstArray}] !== [${secondArray}]`);
  } else {
    console.log(`✅✅✅ Arrays are equal.[${firstArray}] === [${secondArray}]`);
  }
};

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
