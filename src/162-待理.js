
// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   let left = 0 
   let right = nums.length-1
    let mid

   // 先定义搜索区间和结束状态，最后再写 while 条件。
   while(left < right){
    mid = Math.floor((left + right )/2)

    if(nums[mid] < nums[mid+1]){
      left = mid+ 1
    }else{
      right = mid
    }


  }
  return  left
};
// @leet end
