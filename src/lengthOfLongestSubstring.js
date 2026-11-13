/**
 * @param {string} s
 * @return {number}
 */
// "abcabcbb" 3 最长无重复子串之一是 "abc"
function lengthOfLongestSubstring(s) {

  if(s.length<=0){
    return 0
  }
  if(s.length === 1){
    return 1
  }

  const arr = Array.from(s)


  let start = 0
  let end = 0

  const res = new Map()

  let longestLen = 0 

  while(end < arr.length){
    const w = arr[end]
    if (res.has(w)) {
      // 左边界只能向右移动
      start = Math.max(start, res.get(w) + 1);
    }


     res.set(w, end)

      const nextLen = end - start +1
      longestLen = Math.max(longestLen,nextLen)

    end ++ 

  }
  return longestLen
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring(''));       // 0
console.log(lengthOfLongestSubstring('abc'));    // 3：没有重复
console.log(lengthOfLongestSubstring('bbbbb'));  // 1：连续重复
console.log(lengthOfLongestSubstring('abba'));   // 2：左边界不能后退
console.log(lengthOfLongestSubstring('pwwkew'));  // 3：答案必须连续
