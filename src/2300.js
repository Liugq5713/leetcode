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

      let max =0 
      let lastMax = -1
      // 这个判断条件怎么写? 
      // 把不符合的给选出来 
      while(left <= right){
        let mid = Math.floor((left + right) /2 )
        
        const v  = sortedPotions[mid] * s

        if(v>= success){
          right = mid-1
        }else{
          left = mid+1
        }
        
      lastMax = max
       
        max = right - left 

      }

      let t =  sortedPotions.length -   left 

      arr.push(t)
  }
  return arr
};
// @leet end

console.log(successfulPairs([5,1,3], [1,2,3,4,5],7), [4,0,3])
