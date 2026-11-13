// @leet start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    
  const p = piles.sort((a,b)=> a-b)


  let left = 1
  let right = p[p.length-1]
  
  // let k = piles[m]
  while(left <= right){
    let mid = Math.floor((left + right)/2)

    const t = p.reduce((a,c)=>{
      return a + Math.ceil(c/mid) 
    },0)

    console.log('left right', left, right,mid, t, h)
    if(t <= h){
      right = mid-1
    }

    if(t > h ){
      left = mid+1
    }
  }
  return left
};
// @leet end
