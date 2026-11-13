// @leet start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []

  let current = ''
  let num = 0

  for(let i =0 ; i<s.length;i++){
    const v = s[i]

    if( v >= '0' && v<= '9'){
      num =Number( num * 10 +Number(v) )
    }else if( v === '['){
      stack.push([current,num])
      current = ''
      num = 0
    }else if(v ===']'){
      const [previous,count] = stack.pop()
      current = previous + current.repeat(count)
    }else{
      current += v
    }
  }
  return current
};
// @leet end
