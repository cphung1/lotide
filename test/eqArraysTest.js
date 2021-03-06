const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true for eqArrays([1, 2, 3], [1, 2, 3])', () => assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

  it("returns true for eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true));

  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', 3])", () => assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false));

  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));

  it("returns false for eqArrays(['one', 2, 3], [3, 2, 1])", () => assert.strictEqual(eqArrays(['one', 2, 3], [3, 2, 1]), false));

  it("returns false for eqArrays([1, 2, 3], [1, 2])", () => assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false));

  it("returns false for eqArrays([], [3, 2, 1])", () => assert.strictEqual(eqArrays([], [3, 2, 1]), false));

  it("returns false for eqArrays([1, 2, 3], [])", () => assert.strictEqual(eqArrays([1, 2, 3], []), false));

  it("returns true for eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true));

  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false));

  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], 4])", () => assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false));

});



