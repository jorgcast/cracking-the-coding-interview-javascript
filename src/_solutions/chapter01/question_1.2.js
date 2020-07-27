/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isPermutation = (str1 = '', str2 = '') => {
  return sortString(str1) === sortString(str2) && str1 !== str2;
};

const sortString = (str) => str.split('').sort().join('');

export default isPermutation;
