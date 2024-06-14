/*
-i and k pointers
-i to iterate through nums array
-k to keep tracking the position
  -if val found skip
  -otherwise nums[k] = nums[i] and k++
-return k
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
    return k
};

let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val));