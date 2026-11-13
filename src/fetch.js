const originFetch = window.fetch.bind(window)

async function fetchWithRetry(url, {
  timeout = 5000,
  retry = 0, // 额外重试次数，默认不重试
  signal,    // 用户取消信号
  ...init    // method、headers、body 等 fetch 参数
} = {}) {
  for (let attempt = 0; ; attempt++) {
    // 已取消时，不再发起请求
    if (signal?.aborted) {
      throw signal.reason
    }

    // 每次尝试需要新的 controller：
    // 已 abort 的 controller 不能复用
    const controller = new AbortController()

    const onCancel = () => {
      controller.abort(signal.reason)
    }

    signal?.addEventListener('abort', onCancel, { once: true })

    const timer = setTimeout(() => {
      controller.abort(
        new DOMException('请求超时', 'TimeoutError')
      )
    }, timeout)

    try {
      return await originFetch(url, {
        ...init,
        signal: controller.signal
      })
    } catch (error) {
      // 用户取消不重试
      if (signal?.aborted) {
        throw signal.reason
      }

      // 重试次数耗尽，把失败交给调用方
      if (attempt >= retry) {
        throw error
      }
    } finally {
      // 成功、失败或取消，都清理本轮资源
      clearTimeout(timer)
      signal?.removeEventListener('abort', onCancel)
    }
  }
}
