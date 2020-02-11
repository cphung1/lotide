const letterPositions = function(string) {
  let sentence = string.split('');
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

module.exports = letterPositions;