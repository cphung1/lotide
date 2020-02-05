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

const flatten = function(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if(Array.isArray(inputArray[i]) === true){
      inputArray[i].forEach(function(element) {
        newArray.push(element)
      });
    } else {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}


// TEST CASES
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, ['three', 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // equal
assertArraysEqual(flatten([1, 2, ['three', 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // not
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4]); // not
assertArraysEqual(flatten(['cat', 'dog', 'cow']), ['cat', 'dog', 'cow']); // equal
assertArraysEqual(flatten(['cat', 'dog', 'cow']), []); // not
assertArraysEqual(flatten([['cat'], ['dog'], ['cow']]), ['cat', 'dog', 'cow']); // equal
assertArraysEqual(flatten([]), ['cat', 'dog', 'cow']); // not