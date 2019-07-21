/**
 * @param {string} input
 * @return {number[]}
 */

var diffWaysToCompute = function(input) {
  const Nums = input.split(/[-+*]/)
  const signs = input.split(/[0-9]+/)
  signs.shift()
  let dp = new Array(n)
  for (let i = 0; i < Nums.length; i++) {
    dp[i] = new Array(i)
  }
  for (let i = 0; i < Nums.length - 1; i++) {}
}

const res1 = diffWaysToCompute('2-1-1')
const res2 = diffWaysToCompute('2*3-4*5')
console.log('res', res1, res2)
