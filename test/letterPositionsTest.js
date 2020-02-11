const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {

  let input = "lighthouse in the house";
  console.log("The input is: ", input)

  it("returns [3, 5, 15, 18] for letterPositions(input)['h']", () => assert.deepEqual(letterPositions(input)['h'], [3, 5, 15, 18]));

  it("return undefined for letterPositions(input)['']", () => assert.deepEqual(letterPositions(input)[''], undefined));

  it("returns undefined for letterPositions(input)['z']", () => assert.deepEqual(letterPositions(input)['z'], undefined));

  it("return [12] for letterPositions(input)['n']", () => assert.deepEqual(letterPositions(input)['n'], [12]));

});