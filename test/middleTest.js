const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), middle([1, 2])); // equal: both are empty arrays
assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 4, 6])); // not equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5])); // equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4])); // not equal: not same lengths
assertArraysEqual(middle([1, 2, 'three', 4, 5, 'six']), middle([1, 2, 'three', 4, 5, 'six'])); // equal
assertArraysEqual(middle([1, 2, 'three', 4, 5, 'six']), middle([1, 2, 3, 4, 5, 'six'])); // not equal
assertArraysEqual(middle([1, 2, 3, 4]), middle(['one', 'two', 'three', 'four'])); // not equal