/**
 * Given the root of a Binary Search Tree (BST),
 * return the minimum absolute difference between the values of any
 * two different nodes in the tree..
 */

// Class for each node
class TreeNode {
  constructor(value) {
    this.value = value
    this.nodeLeft = null
    this.nodeRight = null
  }
}

// Class of BTS
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertNode(value) {
    const newNode = new TreeNode(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root

    while (true) {
      if (value < current.value) {
        if (!current.nodeLeft) {
          current.nodeLeft = newNode
          return
        }

        current = current.nodeLeft
      } else {
        if (!current.nodeRight) {
          current.nodeRight = newNode
          return
        }
        current = current.nodeRight
      }
    }
  }

  searchNode(value) {
    let current = this.root

    while (current) {
      if (value === current.value) {
        return true
      }
      if (value < current.value) {
        current = current.nodeLeft
      } else {
        current = current.nodeRight
      }
    }

    return false
  }

  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.nodeLeft, result)
      result.push(node.value)
      this.inOrderTraversal(node.nodeRight, result)
    }
    return result
  }

  getMinimunDifference() {
    const valuesInOrder = this.inOrderTraversal()
    let minDifference = Infinity

    for (let index = 1; index < valuesInOrder.length; index++) {
      minDifference = Math.min(
        minDifference,
        valuesInOrder[index] - valuesInOrder[index - 1]
      )
    }

    return minDifference
  }
}

//DEMO
const bst = new BinarySearchTree()

//insert values
bst.insertNode(4)
bst.insertNode(2)
bst.insertNode(6)
bst.insertNode(1)
bst.insertNode(3)

//search
console.log(bst.searchNode(6))
console.log(bst.searchNode(10))
//order
console.log(`Return order ${bst.inOrderTraversal()}`)
//getMinDifference
console.log(`Min difference: ${bst.getMinimunDifference()}`)
