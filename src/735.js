// @leet start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []
  let isCollisions = false

  
     for (let i = 0; i < asteroids.length; i++) {
    const v = asteroids[i]
    isCollisions = true

     if (stack.length === 0) {
      stack.push(v);
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

console.log('asteroidCollision', asteroidCollision([5, 10, -5]))
console.log('asteroidCollision', asteroidCollision([10, 2, -5]))
console.log('asteroidCollision', asteroidCollision([8,-8]))
console.log('asteroidCollision', asteroidCollision([3,5,-6,2,-1,4]),[-6,2,4])
console.log('asteroidCollision', asteroidCollision([-2,-1,1,2]))



