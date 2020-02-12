// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i <= arrayOne.length; i++) {
    if(Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      if(!eqArrays(arrayOne[i], arrayTwo[i])){
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;

};

module.exports = eqArrays;


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false