/**
 * You are given the heads of two sorted linked lists list and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

function mergeArrays(arrayA, arrayB) {
  let newArray = []
  let nodoA = 0
  let nodoB = 0
  let iteractions = arrayA.length + arrayB.length
  let highNumber = 1e12

  for (let index = 0; index < iteractions; index++) {
    let valorA = arrayA[nodoA] !== undefined ? arrayA[nodoA] : highNumber
    let valorB = arrayB[nodoB] !== undefined ? arrayB[nodoB] : highNumber

    if (valorA >= valorB) {
      newArray.push(valorB)
      nodoB++
    } else {
      newArray.push(valorA)
      nodoA++
    }
  }

  return newArray
}

//DEMO
const array1 = [1, 2, 4, 6, 7, 8, 10, 10, 13, 13, 14]
const array2 = [1, 3, 4, 10, 11, 12]

console.log(mergeArrays(array1, array2))

// TRABAJANDO CON UNA CLASE NODO
class ListNode {
  constructor(value) {
    this.val = value // El valor que almacena el nodo
    this.next = null // Referencia al siguiente nodo (por defecto es `null`)
  }
}

function mergeNodes(list1, list2) {
  let listNew = new ListNode(0)
  let current = listNew

  while (list1 !== null && list2 !== null) {
    if (list1.val >= list2.val) {
      current.next = list2
      list2 = list2.next
    } else {
      current.next = list1
      list1 = list1.next
    }
    current = current.next
  }

  if (list1 !== null) {
    current.next = list1
  } else {
    current.next = list2
  }

  return listNew.next
}

//DEMO 2

let list1 = new ListNode(1)
list1.next = new ListNode(3)
list1.next.next = new ListNode(5)
list1.next.next.next = new ListNode(8)

let list2 = new ListNode(2)
list2.next = new ListNode(4)
list2.next.next = new ListNode(6)

console.log(mergeNodes(list1, list2))
