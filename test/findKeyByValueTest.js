const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {

  let bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  console.log("The list of shows by their genre are: \n", bestTVShowsByGenre)

  it('returns "drama" for list of shows when given the value "The Wire" ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"))

  it('returns "comedy" for list of shows when given the value "Brooklyn Nine-Nine" ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"))

  it('returns undefined for list of shows when given the value "That \'70s Show" ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined))

  it('returns undefined for list of shows when given the value " " ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined))

  it('returns undefined for list of shows when given the value "5" ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 5), undefined))

  it('returns undefined for list of shows when given the value "drama" ', () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "drama"), undefined))

});