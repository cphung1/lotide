const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
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

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};


// TEST CASES
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["c", "a", "t"], ["c", "a", "t"])); // => []
console.log(without([], ["c", "a", "t"])); // => []
console.log(without(["c", "a", "t"], [])); // => ["c", "a", "t"]
console.log(without(["c", "a", "t"], ["b", "d"])); // => ["c", "a", "t"]


assertArraysEqual([1, 2, 3], without([1, 2, 3], [1])); // => not equal

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, without(["hello", "world", "lighthouse"], ["lighthouse"])); // not equal

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);