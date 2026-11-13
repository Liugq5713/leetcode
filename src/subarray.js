/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const len = nums.length

  let sum =0 

  for(let i =0;i< k;i++){
    sum += nums[i]
  }
  let max = sum
  for (let i = k; i < len; i++) {
    sum  += nums[i]  - nums[i-k]
    max = Math.max(max, sum)
  }
  return max / k
};

// @lc code=end

console.log(findMaxAverage([1,12,-5,-6,50,3],4),12.75000)

