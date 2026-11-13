// @leet start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

 const stack = []
  let isCollisions = false

  for (let i = 0; i < asteroids.length; i++) {
    const v = asteroids[i]
    isCollisions = true

    if (stack.length === 0) {
      stack.push(v)
      continue
    }


    while (isCollisions && stack.length > 0) {
      const k = stack.pop()

      if((k>0&& v>0) || (k<0&&v>0) || (k<0 && v<0)){
        stack.push(k)
        stack.push(v)
        isCollisions = false
      } else {
        if (Math.abs(k) > Math.abs(v)) {
          stack.push(k)
          isCollisions = false
        } else if (Math.abs(k) === Math.abs(v)) {
          isCollisions = false
        } else {
          if (stack.length === 0) {
            stack.push(v)
            isCollisions = false
          }
        }
      }
    }

    
   }
  return stack
};
// @leet end
