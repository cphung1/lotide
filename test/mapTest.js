const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  console.log("The words are: ", words)
  
  it('return "g" for ground', () => assert.strictEqual(map(words, word => word[0])[0], 'g'))

  it('return "c" for control', () => assert.strictEqual(map(words, word => word[0])[1], 'c'))

}); 