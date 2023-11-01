import Tree from './tree'

const tree = new Tree()

describe('Tree', () =>{
  test('inorder returns null when empty', () => {
    expect(tree.inorder()).toBe(null)
  })
  test('inorder return the correct array', () => {
    tree.add('a')
    tree.add('b')
    tree.add('a')
    tree.add('c')
    tree.add('d')
    expect(tree.inorder()).toEqual([
      {
        name: 'a',
        amount: 2
      },
      {
        name: 'b',
        amount: 1
      },
      {
        name: 'c',
        amount: 1
      },
      {
        name: 'd',
        amount: 1
      }
    ])
  })
})