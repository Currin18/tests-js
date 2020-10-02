const { assert } = require('chai');

describe('Test Suite 1', () => {
  it('Test 1', () => {
    assert.ok(true, 'This shouldn\'t fail');
  });

  it('Test 2', () => {
    assert.ok(1 === 1, 'This shouldn\'t fail');
    assert.notOk(false, 'This should fail');
  });
});