const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne === undefined) {
    return false;
  }
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


const changeStrToArray = function(string) {
  string = string.split('');
  return string;
};

const letterPositions = function(sentence) {
  const results = {};
  for (const [index, val] of sentence.entries()) {
    if (val !== ' ') {
      if (results[val]) {
        results[val].push(index);
      } else {
        results[val] = [index];
      }
    }
  }
  
  return results;
};


//Test Cases
let sentence = changeStrToArray("lighthouse in the house");
let actualOutput = letterPositions(sentence);

assertArraysEqual(actualOutput['h'], [ 3, 5, 15, 18 ]);
assertArraysEqual(actualOutput[' '], undefined);
assertArraysEqual(actualOutput['z'], undefined);
assertArraysEqual(actualOutput['n'], [' ']);
assertArraysEqual(actualOutput['n'], [11]);