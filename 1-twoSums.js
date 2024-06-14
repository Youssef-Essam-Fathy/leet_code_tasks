/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let num1 = nums[i];
      let num2 = target - num1;
      if (map.has(num2)) return [map.get(num2), i];
      map.set(num1, i);
    }
};

let nums = [3,2,4], target = 6;
console.log(twoSum(nums, target))
