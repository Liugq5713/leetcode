// @leet start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = 1
  const answer = new Array(nums.length).fill(1)

  for(let i = 0; i< nums.length;i++ ){
    answer[i] = left
    left = left * nums[i]
  }

  let right = 1

  for(let j = nums.length -1 ; j>=0;j--){
    answer[j] = answer[j] *right
    right = nums[j] *right
  }

  return answer


    
};
// @leet end
