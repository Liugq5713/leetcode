/**
 * @param {string} input
 * @return {number[]}
 */

//  https://leetcode.com/problems/different-ways-to-add-parentheses/discuss/200108/JavaScript-DP-beats-100
const operate = (n1, sign, n2) =>
  sign === '+' ? n1 + n2 : sign === '-' ? n1 - n2 : n1 * n2

const calculateNewArr = (dp, i, j, signs) => {
  dp[i][j] = []
  for (let k = i; k < j; k++)
    dp[i][k].forEach(ii =>
      dp[k + 1][j].forEach(jj => dp[i][j].push(operate(ii, signs[k], jj)))
    )
}

var diffWaysToCompute = function(input) {
  const nums = input.split(/[-+*]/).map(num => parseInt(num))
  const signs = input.split(/[0-9]+/)
  signs.shift()
  const n = nums.length
  let dp = new Array(n)
  for (let i = 0; i < n; i++) dp[i] = new Array(n)
  for (let i = 0; i < n; i++) dp[i][i] = [nums[i]]

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      const j = i + len
      calculateNewArr(dp, i, j, signs)
    }
  }
  return dp[0][n - 1]
}

const res1 = diffWaysToCompute('2-1-1')
const res2 = diffWaysToCompute('2*3-4*5')
console.log('res', res1, res2)
