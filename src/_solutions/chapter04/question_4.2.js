import BST from "../../utils/BinarySearchTree";

/**
 * @param {array} array
 * @return {BST}
 */
const createMinimalBST = (array) => {
  return createBST(array, 0, array.length - 1);
};

const createBST = (array, start, end) => {
  if (start > end) {
    return null;
  }

  const mid = Math.ceil((start + end) / 2);
  const node = new BST(array[mid]);
  node.left = createBST(array, start, mid - 1);
  node.right = createBST(array, mid + 1, end);

  return node;
};

export default createMinimalBST;
