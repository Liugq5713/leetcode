let num = 5
console.log('num', num.toString(2))
console.log('~num.toString(2)', ~Number(num.toString(2)))
console.log('parseInt(~num.toString(2),2)', parseInt(~num.toString(2), 2))
