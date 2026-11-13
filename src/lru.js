// | [CODE03](07-coding-qa.md#code03) | 实现 LRU 缓存 | [CA21](02-company-agent.md#ca21) |
// 缓存满了，需要腾位置时，删除最久没有被访问的数据。


class Link {
  constructor(value){
    this.value = value
    this.next = null
    this.count = 0
    this.prev = null
  }

  get count(){
    return this.count
  }

  visit(){
    this.count++
  }
}


// 我觉得换顺序,用链表比较合适,但是链表的话, 获取 len 有点困难
class LRUCache {
  constructor(capacity){
    // 用一个空节点当做哨兵,这样 link的增删不用判断链表是不是空的
    this.cache = new Link(null)
    this.cache.prev = this.cache
    this.cache.next = this.cache
    this.capacity = capacity
    this.len = 0 
  }
  // 要提前把链表的操作抽象出来,这样用的话会简单点.
  // 要定义好顺序, 后面的是最新访问的, 前面的是最不长访问的
  put(key,value){
    if(this.len > this.capacity){
      this.len--
      const tail = this.cache.prev()
      const prevTail = tail.prev
      prevTail.next = this.cache
      this.cache.prev = prevTail
    }
      this.len ++
      // 取最后的节点貌似有点麻烦
      const tail = this.cache.prev()
      const node = new Link({[key]: value}) 
      tail.next = node
      node.prev = tail
      node.next= this.cache
  }
  get(key){
    let i  =0 
    let node =  this.cache
    // 通过一个 Map 的数据结构,然查找更加的方便
    while(i< this.len){
      i++
      const value = node.value
      if(key in value){
        node.visit()
        return value[key]
      }else{
        node = node.next()
      }
    }
    return null
  }
}
