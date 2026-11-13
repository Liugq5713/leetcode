// @leet start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
   const isOne = (p) => {
    return p === 1
  }

  let usage = k
  let zeorPos = []
  let start = -1
  let output = 0

  for (let i = 0; i < nums.length; i++) {
    if (isOne(nums[i])) {
      output = Math.max(output, i - start)
      continue
    }

    if (usage > 0 && !isOne(nums[i])) {
      zeorPos.push(i)
      usage--
      output = Math.max(output, i - start)
      continue
    }

    if (usage === 0 && !isOne(nums[i])) {
      if (zeorPos.length > 0) {
        start = zeorPos.shift()
        zeorPos.push(i)
        output = Math.max(output, i - start)

      } else {
        start = i
      }
    }
  }
  return output

};
// @leet end
