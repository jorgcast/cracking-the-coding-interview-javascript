import assert from 'assert';

import isPermutation from '../../src/chapter01/question_1.2.js';

describe('#Question 1.2 - Is Permutation', function () {
  it('should return false for strawberry and cheese', function () {
    assert.equal(isPermutation('strawberry', 'cheese'), false);
  });

  it('should return false for banana and split', function () {
    assert.equal(isPermutation('banana', 'split'), false);
  });

  it('should return true for lemon and monle', function () {
    assert.ok(isPermutation('lemon', 'monle'));
  });

  it('should return true for orange and ongear', function () {
    assert.ok(isPermutation('orange', 'ongear'));
  });

  it('should return false when repeating the same string', function () {
    assert.equal(isPermutation('banana', 'banana'), false);
  });

  it('should return false when nothing is sent', function () {
    assert.equal(isPermutation(), false);
  });
});
