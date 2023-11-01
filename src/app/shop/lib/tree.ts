interface NodeType {
  data: {
    name: string,
    amount: number
  },
  left : NodeType | null,
  right: NodeType | null
}


class TreeNode {
  data: {
    name: string,
    amount: number
  }
  
  left = null
  right = null

  constructor(name: string){
    this.data = {
      name: name,
      amount: 1
    }
  }
}


export default class Tree {
  head: NodeType | null = null

  add(name: string) {    
    if (this.head === null){
      this.head = new TreeNode(name)
      return
    }

    let current: NodeType | null = this.head

    while (current){
      if (current.data.name === name){
        current.data.amount++
        return
      }
      else if (current.data.name < name){
        if (current.right) current = current.right
        else {
          current.right = new TreeNode(name)
          return
        }
      }
      else {
        if (current.left) current = current.left
        else {
          current.left = new TreeNode(name)
          return
        }
      }
    }
    console.log(this.head)
  }

  inorder() {
    if (!this.head) return null
    const stack: NodeType[] = []
    const res = []

    stack.push(this.head);

    while (stack.length > 0){
      const top = stack[stack.length - 1]
      if (top.left) stack.push(top.left)
      else{
        res.push(top.data)
        const temp = stack.pop()
        if (temp?.right) stack.push(temp.right)
      }
    }

    return res
  }
}