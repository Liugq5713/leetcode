// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 示例 2：
// 输入：n = 1
// 输出：["()"]


// 递归 

const generateParenthesesCandidates = (n) => {
  const result = [];

  const fill = (curr) => {
    // 位置填满了，保存这一种组合
    if (curr.length === 2 * n) {
      result.push(curr);
      return;
    }

    // 下一个位置有两种选择，分别尝试
    fill(curr + '(');
    fill(curr + ')');
  };

  // 从空字符串开始填
  fill('');

  return result;
};

// for 循环的写法

// const generateParenthesesCandidates = (n) => {
//   let result = ['']; // 从一个空字符串开始

//   // 一共填 2 * n 个位置
//   for (let i = 0; i < 2 * n; i++) {
//     const next = [];

//     // 每种已有组合，都扩展出两种新组合
//     for (const curr of result) {
//       next.push(curr + '(');
//       next.push(curr + ')');
//     }

//     result = next;
//   }

//   return result;
// };




const gen = (n)=>{
  
    const  parenthesesCandidates=  generateParenthesesCandidates(n)

    // 判断括号对称的逻辑， 把不对的数据过滤掉
    const isValidParentheses = (str) => {
        const stack = [];

        for (const char of str) {
            const top = stack[stack.length - 1];

            if (char === ')' && top === '(') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    };

    return parenthesesCandidates.filter(isValidParentheses)
}

console.log(gen(3))

// 更好的解法
const generateParentheses = (n) => {
  const result = [];

  const build = (current, openCount, closeCount) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 左括号还有名额，才尝试放左括号
    if (openCount < n) {
      build(current + '(', openCount + 1, closeCount);
    }

    // 有尚未匹配的左括号，才尝试放右括号
    if (closeCount < openCount) {
      build(current + ')', openCount, closeCount + 1);
    }
  };

  build('', 0, 0);

  return result;
};