const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i <= arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const val in object1) {
    if (Array.isArray(object1[val]) && Array.isArray(object2[val])) {
      return eqArrays(object1[val], object2[val]);
    }
    if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const result = eqObjects(actual, expected); 
  const inspect = require('util').inspect;
  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
