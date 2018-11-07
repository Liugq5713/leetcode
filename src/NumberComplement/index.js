export const findComplement = function(num) {
  const numString = num.toString(2)
  let Num = []
  for (let i = 0; i < numString.length; i++) {
    Num[i] = numString[i] === '1' ? 0 : 1
  }
  return parseInt(Num.join(''), 2)
}
