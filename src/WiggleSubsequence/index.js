export const wiggleMaxLength = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  const isSame = nums.every((num, idx) => {
    return num === nums[0]
  })
  if (isSame) {
    return 1
  }
  const NumsOfBool = nums
    .filter((num, idx) => {
      return idx === 0 ? num : num !== nums[idx - 1]
    })
    .map((num, idx, arr) => {
      return idx === 0 ? 0 : num - arr[idx - 1] >= 0
    })
  NumsOfBool.shift()
  return Math.max(
    compareNumsOfBool(NumsOfBool, false),
    compareNumsOfBool(NumsOfBool, true)
  )
}

function compareNumsOfBool(nums, boolGuard) {
  const ans = []
  nums.forEach((bool, idx) => {
    if (bool === boolGuard) {
      ans.push(bool)
      boolGuard = !boolGuard
    }
  })
  return ans.length + 1
}
