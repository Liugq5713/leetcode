export const findComplement = function(num) {
  console.log('------num.toSting(2)', num.toString(2))
  let Num = []
  let i = 0
  while (num > 0) {
    Num[i] = num % 2 === 1 ? 0 : 1
    num = Math.floor(num / 2)
    i++
    if (num === 0) {
      break
    }
  }
  return parseInt(String(Num.join('')), 2)
  //   let res = 0
  //   for (let i = 0; i < Num.length; i++) {
  //     if (Num[i] === 1) {
  //       res += Math.pow(2, i)
  //     }
  //   }
  //   return res
}
