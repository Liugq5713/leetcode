// @leet start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let curChar = ''
  let cnt = 0

  let read = 0
  let write = 0

  for(let i =0;i< chars.length;i++){
    read++

    const c = chars[i]
     if (c === curChar) {
      cnt++
    } else {
      if (cnt > 0) {

        const str = String(cnt +1 ).split('')
        for(let j = 0 ; j< str.length;j++){
          chars[write] = str[j]
          write++
        }
      }
      cnt = 0
      curChar = c
      chars[write] = c
      write++
    }


  }
  if (cnt > 0) {
      const str = String(cnt +1 ).split('')
        for(let j = 0 ; j< str.length;j++){
          chars[write] = str[j]
          write++
        }
  }

  chars = chars.slice(0,write)
  return chars.join('').length
};
// @leet end
