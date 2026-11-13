// @leet start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
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

};


// @leet end
