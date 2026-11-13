// let str=['A-A-B', 'A-A-C', 'B-A-C'];

// // 得到： obj 
// let obj = {
//     A: {
//         A: {
//             B: {},
//             C: {}
//         }
//     },
//     B: {
//         A: {
//             C: {}
//         }
//     }
// }
const gen = (strs)=>{
    const arrs = strs.map(str=> str.split('-'))
    const res = {}
    arrs.forEach(arr => {
        let curr = res
        arr.forEach(e=>{
            if(!curr?.[e]){
                curr[e]={}
            }
            curr = curr[e]
        })
    });
    return res
}

console.log(gen(['A-A-B', 'A-A-C', 'B-A-C']))
