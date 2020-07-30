import assert from 'assert';

import createMinimalBST from '../../src/chapter04/question_4.2.js';


describe('#Question 4.2 - Minimal Tree', function () {
  it('should return 4 | 2 6 | 1 3 5 |', function () {
    const array1 = [1, 2, 3, 4, 5, 6];
    const tree1 = createMinimalBST(array1);
    assert.equal(tree1.printLevelOrder(), '4 | 2 6 | 1 3 5 |');
  });

  it('should return 4 | 2 6 | 1 3 5 7 |', function () {
    const array2 = [1, 2, 3, 4, 5, 6, 7];
    const tree2 = createMinimalBST(array2);
    assert.equal(tree2.printLevelOrder(), '4 | 2 6 | 1 3 5 7 |');
  });

  it('should return 8 | 4 12 | 2 6 10 14 | 1 3 5 7 9 11 13 15 |', function () {
    const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const tree3 = createMinimalBST(array3);
    assert.equal(tree3.printLevelOrder(), '8 | 4 12 | 2 6 10 14 | 1 3 5 7 9 11 13 15 |');
  });
});
