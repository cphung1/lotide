const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [2] for middle([1, 2, 3]),', 
    () =>  assert.deepEqual(middle([1, 2, 3]), [2]));
  it('returns [3] for middle([1, 2, 3, 4, 5]),', 
    () =>  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]));
  it('returns [5, 6] for middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),', 
    () =>  assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]));
  it('returns [] for middle([1, 2])', 
    () => assert.deepEqual(middle([1, 2]), []));
});