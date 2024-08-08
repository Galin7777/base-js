import { wordToNumber } from './utils.js';
import {stringToNumber } from './utils.js';

console.log(wordToNumber('Five')) // 5
console.log(wordToNumber('FIVE')); // 5
console.log(wordToNumber('Twenty')); // null
console.log(stringToNumber('42')); // 42
console.log(stringToNumber('-7')); // -7
console.log(stringToNumber('abc')); // null

