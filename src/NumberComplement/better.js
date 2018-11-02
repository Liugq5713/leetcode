var findComplement = function(num) {
  let ans = 0
  let shift = 0
  while (num > 0) {
    const bit = num & 1
    num = num >> 1
    ans = ans | (!bit << shift++)
  }
  return ans
}

findComplement(33)
