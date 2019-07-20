const arr = [2, 4, 5, 7, 1, 2, 3, 6]

// Math.floor vs Math.ceil

const merge = (A, p, q, r) => {
  const n1 = q - p + 1
  const n2 = r - q
  const L = []
  const R = []
  for (let i = 0; i < n1; i++) {
    L[i] = A[p + i]
  }
  for (let j = 0; j < n2; j++) {
    R[j] = A[q + 1 + j]
  }
  // 哨兵，避免每次检查数组是否为空
  L[n1] = Number.MAX_SAFE_INTEGER
  R[n2] = Number.MAX_SAFE_INTEGER
  let i = 0
  let j = 0
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i]
      i++
    } else {
      A[k] = R[j]
      j++
    }
  }
}

const mergeSort = (A, p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2)
    mergeSort(A, p, q)
    mergeSort(A, q + 1, r)
    merge(A, p, q, r)
  }
}

mergeSort(arr, 0, arr.length - 1)
