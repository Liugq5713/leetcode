// @leet start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const sortedPotions = potions.sort((a,b)=> a-b)
  const arr = []

  for(let i= 0; i<spells.length ;i++){
      const s = spells[i]

      let left = 0
      let right = sortedPotions.length-1

      while(left <= right){

        let mid = Math.floor((left + right) /2 )
        
        const v  = sortedPotions[mid] * s

        if(v>= success){
          right = mid-1
        }else{
          left = mid+1
        }
      }

      arr.push(sortedPotions.length - left)
  }
  return arr
};
// @leet end
