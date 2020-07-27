import assert from 'assert';

import isUnique from '../../src/chapter01/question_1.1.js';

describe('#Question 1.1 - Is Unique', function () {
  it('should return false when string is strawberry', function () {
    assert.equal(isUnique('strawberry'), false);
  });

  it('should return false when string is banana', function () {
    assert.equal(isUnique('banana'), false);
  });

  it('should return true when string is lemon', function () {
    assert.ok(isUnique('lemon'));
  });

  it('should return true when string is orange', function () {
    assert.ok(isUnique('orange'));
  });

  it('should return true when nothing is sent', function () {
    assert.ok(isUnique());
  });
});
