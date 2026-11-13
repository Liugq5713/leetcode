// 限制并发
const promiseLimit = async (tasks, limit) => {
  let next = 0
  const len = tasks.length
  const result = []

  const worker = async () => {
    while (next < len) {
      const task = tasks[next]
      const index = next++
      try {
        result[index] = await task()
      } catch (e) {
        result[index] = e
      }
    }
    return result
  }

  return await Promise.all(new Array(limit).fill(() => worker()))
}
