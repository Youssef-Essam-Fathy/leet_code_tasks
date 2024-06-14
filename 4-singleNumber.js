/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let unique = 0;
  nums.forEach((num) =>{
    unique ^= num;
    })
  return unique;
};
let nums = [2,2,3,3,4,5,6,5,6];
console.log(singleNumber(nums))