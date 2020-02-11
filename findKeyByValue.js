const findKeyByValue = function(object, value) {
  for (const val in object) {
    if (object[val] === value) {
      return val;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

