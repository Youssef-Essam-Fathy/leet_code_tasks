/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let result = '';
  let isNegative = (num < 0);
  if (num === 0) return '0'
  if (isNegative) num = -num;
  while (num !== 0) {
    const remainder = num % 7;
    result = remainder.toString() + result;
    num = (num - remainder) / 7;
  }
    return isNegative ? '-' + result : result;
};

let num = -7;
console.log(convertToBase7(num))