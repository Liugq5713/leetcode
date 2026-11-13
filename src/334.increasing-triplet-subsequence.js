
// @leet start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

  var increasingTriplet = function (nums) {
    let firstMin = Infinity;
    let secondMin = Infinity;

    for (const t of nums) {
      if (t <= firstMin) {
        // t 作为新的第一候选值更有利
        firstMin = t;
      } else if (t <= thirdMin) {
        // 此处一定有 t > firstMin
        // 因此找到了一个递增对
        secondMin = t;
      } else {
        // 此处 t > secondMin
        // 而 secondMin 前面已经存在更小的第一项
        return true;
      }
    }

    return false;
  };
// @leet end
