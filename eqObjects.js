const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

module.exports = eqObjects;
