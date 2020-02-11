const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]])", () => assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); 

  it("returns ['cat', 'dog', 'cow'] for flatten(['cat', 'dog', 'cow'])", () => assert.deepEqual(flatten(['cat', 'dog', 'cow']), ['cat', 'dog', 'cow']));

  it("returns ['cat', 'dog', 'cow'] for flatten([['cat'], ['dog'], ['cow']])", () => assert.deepEqual(flatten([['cat'], ['dog'], ['cow']]), ['cat', 'dog', 'cow']));

  it("returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]])", () => assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));

});