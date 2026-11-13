// @leet start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = []

  for(let i = 0; i< s.length ;i++){
    if(s[i] !== '*'){
      stack.push(s[i])
    }else{
      if(stack.length>0){
        stack.pop()
      }
    }
  }
  return stack.join('')
};
// @leet end
