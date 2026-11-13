/**
 * @param {{ id: number, parentId: number | null, name: string }[]} items
 * @return {{ tree: object[], errors: object[] }}
 */

function arrayToTree(items) {
  const tree = {}
  const rootIds = []

  items.forEach((item) => {
    if (item.parentId === null) {
      rootIds.push(item.id)
    }
    tree[item.id] = {...item, children:[]}

  })

  items.forEach((item) => {
    const parent = tree[item.parentId]
    const node = tree[item.id]
    parent?.children.push(node)
  })

  const newTree = rootIds.map(rootId => {
    return tree[rootId]
  })

  return { tree: newTree }

}

console.log(JSON.stringify(arrayToTree([
  { id: 2, parentId: 1, name: '研发部' },
  { id: 1, parentId: null, name: '公司' },
  { id: 3, parentId: 1, name: '市场部' }
]), null, 2));
