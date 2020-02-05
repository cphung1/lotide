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

assertArraysEqual(['1', 2, 3], [1, 2, 3]);
assertArraysEqual(['1', 2, 3], []);
assertArraysEqual([], [1, 2, 3]);