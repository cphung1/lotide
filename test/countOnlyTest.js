const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  console.log("Our list of first names:\n", firstNames);

  it('returns {"Jason: 1, "Fang": 2} for countOnly(firstNames)', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Fang": true}), {"Jason": 1, "Fang": 2})
  });
  
  it('returns {"Jason": 1} for countOnly(firstNames, {"Jason": true})', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true}), {"Jason": 1});
  });

  it('returns undefined for countOnly(firstNames, {"Karima":  true})', () => {
    assert.deepEqual(countOnly(firstNames, {"Karima": true}), {})
  });

  it('returns {"Fang": 2} for countOnly(firstNames, {"Fang": true})', () => {
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), {"Fang": 2})
  });

    
});