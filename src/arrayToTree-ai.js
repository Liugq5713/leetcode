function arrayToTree(items) {
  const nodeMap = new Map();
  const tree = [];
  const errors = [];

  // 第一次遍历：复制节点，建立索引，排除重复 ID
  items.forEach((item, index) => {
    if (nodeMap.has(item.id)) {
      errors[index] = {
        index,
        id: item.id,
        reason: 'DUPLICATE_ID'
      };
      return;
    }

    nodeMap.set(item.id, {
      ...item,
      children: []
    });
  });

  // 从当前节点出发，沿着父节点一路向上检查
  // 返回 null 表示合法，否则返回错误类型
  function findError(startNode) {
    const visited = new Set();
    let current = startNode;

    while (true) {
      // 同一个节点走到了第二次，说明遇到了环
      if (visited.has(current.id)) {
        // 回到起点：起点就在环中
        // 重复其他节点：起点不在环中，但祖先有环
        return current.id === startNode.id
          ? 'CYCLE'
          : 'INVALID_ANCESTOR';
      }

      visited.add(current.id);

      // 能走到根节点，说明整条父链合法
      if (current.parentId === null) {
        return null;
      }

      // 当前节点指向自己
      if (current.parentId === current.id) {
        return current.id === startNode.id
          ? 'SELF_REFERENCE'
          : 'INVALID_ANCESTOR';
      }

      const parent = nodeMap.get(current.parentId);

      // 当前节点的父节点不存在
      if (!parent) {
        return current.id === startNode.id
          ? 'MISSING_PARENT'
          : 'INVALID_ANCESTOR';
      }

      // 继续检查上一层
      current = parent;
    }
  }

  // 第二次遍历：检查关系，把合法节点组装成树
  items.forEach((item, index) => {
    // 第一次遍历已经标记的重复记录，直接跳过
    if (errors[index]) {
      return;
    }

    const node = nodeMap.get(item.id);
    const reason = findError(node);

    if (reason) {
      errors[index] = {
        index,
        id: item.id,
        reason
      };
      return;
    }

    if (node.parentId === null) {
      tree.push(node);
    } else {
      const parent = nodeMap.get(node.parentId);
      parent.children.push(node);
    }
  });

  return {
    tree,
    // 按原下标存储错误，再去掉空位，自然保持输入顺序
    errors: errors.filter(Boolean)
  };
}
