/**
* @param {string} str
* @return {boolean}
*/
const isUniqueAdditionalDataStructure = (str = '') => {
  // Additional data structure
  const characters = [];

  for (let i = 0; i < str.length; i++) {
    if (characters.includes(str[i])) {
      return false;
    } else {
      characters.push(str[i]);
    }
  }

  return true;
  // O(n) time
  // O(n) space
};

/**
 * @param {string} str
 * @return {boolean}
 */
const isUnique = (str = '') => {
  // Without additional data structures
  str = str.split('').sort().join('');

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }

  return true;
  // O(n) time
  // O(1) space
};

export default isUnique;
