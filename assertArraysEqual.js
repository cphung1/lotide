const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  const result = eqArrays(firstArray, secondArray); 
  if (!result) {
    console.log("🛑🛑🛑 Arrays are not equal ", firstArray, " !== ", secondArray);
  } else {
    console.log("✅✅✅ Arrays are equal. ", firstArray, " === ", secondArray);
  }
};

module.exports = assertArraysEqual;