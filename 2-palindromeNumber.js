/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNum = String(x).split("").reverse().join("")
    if (String(x) === reversedNum) return true;
    return false
};
console.log(isPalindrome(-151))