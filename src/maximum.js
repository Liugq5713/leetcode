
const getMaximumNumber = (s, k)=>{

  const str = s.slice(0,k);

  const isVowel = (a)=>{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if(vowels.includes(a)){
      return true
    }
    return false
  }

  let vowelCnt = 0
  for(let i =0;i<str.length;i++){
    if(isVowel(str[i])){
      vowelCnt++
    }
  }

  let max = vowelCnt

  if(vowelCnt === k ){
    return k
  }

  for(let i =k; i< s.length; i++){
    const m = s[i]
    const n = s[i-k]

    if(isVowel(m)){
      vowelCnt++
    }
    if(isVowel(n)){
      if(vowelCnt>0){
        vowelCnt--
      }
    }
    max = Math.max(max, vowelCnt)

    if(max ===k){
      return k
    }

  }
  return max
}

console.log('getMaximumNumber',getMaximumNumber('tryhard',4), 1)
