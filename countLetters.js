const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const getRidOfSpaces = function(sentence) {
  sentence = sentence.split(" ").join(""); 
  return sentence
}

const changeToLowerCase = function(sentence) {
  sentence = sentence.toLowerCase();
  return sentence
}

const countLetters = function(word) {
  const results = {}
  for (const letter of word) {
    if(results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results
};


let inputPhrase = getRidOfSpaces(changeToLowerCase("lighthouse in the house"))
let actualOutput = countLetters(inputPhrase);

assertEqual(actualOutput['l'], 1);
assertEqual(actualOutput[' '], undefined);
assertEqual(actualOutput['h'], 4);

