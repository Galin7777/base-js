// /**
//  * @function calcSum
//  * @param {number} num1
//  * @param {number} num2
//  * @throws {Error}
//  * @returns {number} 
//  */

// export const calcSum = (num1, num2) => {
//   if (!num1 || !num2) throw new Error('Invalid value');
//   return num1 + num2;
// };

/**
 * @function wordToNumber
 * @param {string} word
 * @returns {number} null
 */

export const wordToNumber = (word) => {
  const numberWords = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
};
return numberWords[word.toLowerCase()] ?? null;
};

/**
 * @function stringToNumber
 * @param {string} str
 * @returns {number} null
 */

export const stringToNumber = str => {
  const trimmedStr = str.trim();
  const num = Number(trimmedStr);
  return isNaN(num) ? null : num;
};
