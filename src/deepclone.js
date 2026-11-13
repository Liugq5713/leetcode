function deepclone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (cache.has(obj)) {
    return cache.get(obj)
  }

  const result = Array.isArray(obj)
    ? new Array(obj.length)
    : {}

  // 先建立原对象 → 新对象的对应关系，再递归复制属性
  cache.set(obj, result)

  Object.keys(obj).forEach(key => {
    result[key] = deepclone(obj[key], cache)
  })

  return result
}

