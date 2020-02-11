const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  let results = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      results.push(array[middleIndex - 1]);
    }
    results.push(array[middleIndex]);
  }
  return results;
};

module.exports = middle;

