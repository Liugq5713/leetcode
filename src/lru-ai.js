class Link {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new Error('capacity 必须是非负整数');
    }

    this.capacity = capacity;
    this.nodes = new Map();

    // 循环双向链表的哨兵节点
    this.cache = new Link(null, null);
    this.cache.prev = this.cache;
    this.cache.next = this.cache;
  }

  // 从链表中摘下一个数据节点
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // 接到尾部，表示最近使用
  append(node) {
    const tail = this.cache.prev;

    tail.next = node;
    node.prev = tail;
    node.next = this.cache;
    this.cache.prev = node;
  }

  get(key) {
    const node = this.nodes.get(key);

    if (!node) return null;

    this.remove(node);
    this.append(node);

    return node.value;
  }

  put(key, value) {
    let node = this.nodes.get(key);

    // 已存在：更新值和使用顺序，数量不变
    if (node) {
      node.value = value;
      this.remove(node);
      this.append(node);
      return;
    }

    // 不存在：创建节点并放到尾部
    node = new Link(key, value);
    this.nodes.set(key, node);
    this.append(node);

    // 超过容量：删除最久未使用的头部节点
    if (this.nodes.size > this.capacity) {
      const oldest = this.cache.next;

      this.remove(oldest);
      this.nodes.delete(oldest.key);
    }
  }
}
