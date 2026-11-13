const pick = 1240808008

function guess(num) {
  if (num > pick) return -1
  if (num < pick) return 1
  return 0
}

var guessNumber = function (n) {
  let left = 1
  let right = n
  let t = Math.floor(n / 2)
  while (left <= right) {
    const guessRes = guess(t)
    if (guessRes === 1) {
      left = t +1
      t = Math.floor(((t + 1) + right) / 2)
    }
    if (guessRes === -1) {
      right = t -1
      t = Math.floor((t - 1 + left) / 2)
    }

    if (guessRes === 0) {
      return t
    }
  }
  return t
}

console.log(guessNumber(1792997410)) // 应该输出 6
