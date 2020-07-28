import assert from 'assert';

import urlify from '../../src/chapter01/question_1.3.js';

describe('#Question 1.3 - URLify', function () {
  it('should return John%20Doe for "John Doe"', function () {
    assert.equal(urlify('John Doe', 10), 'John%20Doe');
  });

  it('should return John%20Doe for "John Doe   "', function () {
    assert.equal(urlify('John Doe   ', 10), 'John%20Doe');
  });

  it('should return John%20Doe for "   John Doe   "', function () {
    assert.equal(urlify('   John Doe   ', 10), 'John%20Doe');
  });

  it('should return John%20Doe for "John Doe" when no length is sent', function () {
    assert.equal(urlify('John Doe'), 'John%20Doe');
  });

  it('should return "" when nothing is sent', function () {
    assert.equal(urlify(), '');
  });
});
