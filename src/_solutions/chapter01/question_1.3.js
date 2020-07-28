/**
 * @param {string} str
 * @param {number} finalLength
 * @return {string}
 */
const urlifyForLoop = (str = '', finalLength = 0) => {
  // Brute force
  const formattedStr = str.trim().split('');

  for (let i = 0; i < formattedStr.length; i++) {
    if (formattedStr[i] === ' ') {
      formattedStr[i] = '%20';
    }
  }

  return formattedStr.join('');
};

/**
 * @param {string} str
 * @param {number} finalLength
 * @return {string}
 */
const urlify = (str = '', finalLength = 0) => {
  // Replace with RegEx for global replace
  const formattedStr = str.trim().replace(/ /g, '%20');

  return formattedStr;
};

export default urlify;
