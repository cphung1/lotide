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

//MAP FUNCTION
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}


const results1 = map(words, word => word[0]);

// console.log(results1);

assertArraysEqual(results1[0], 'g'); 
assertArraysEqual(results1[0], ' '); 
assertArraysEqual(results1[1], 'g'); 