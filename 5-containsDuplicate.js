/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  nums.forEach((num) => set.add(num))
  if (set.size === nums.length) return false
  return true
};

let nums = [1,2,3,5,1];
console.log(containsDuplicate(nums))