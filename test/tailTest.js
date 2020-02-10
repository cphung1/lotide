const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () =>        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));

  it('return 2 for the length of ["Yo Yo", "Lighthouse", "Labs"]', () => assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2));

  it('return 0 for the length of ["Hello"]', () => assert.strictEqual(tail(["Hello"]).length, 0));

  it('return "[]" for the "[]"', () => assert.strictEqual(tail([]).length, 0));
  
});