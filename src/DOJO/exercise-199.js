/**
 * This code contains the solution to the exercise "Merge Sorted Array"
 * Firt, we have a method completeArray() that fills the input array with 0, unitl reaching the indicated array size.
 * Second, the mergeArrays() method that compare the max numbers and merge both arrays
 */

function completeArray(array, numberElements) {
  const arrayLength = array.length
  if (arrayLength <= numberElements) {
    array.push(...Array(numberElements - arrayLength).fill(0))
  }

  return array
}

function mergeArrays(array1, m, array2, n) {
  array1 = completeArray(array1, m + n)

  let round1 = m + n - 1
  let round2 = n - 1

  while (round2 >= 0) {
    let element2Max = array2[round2]

    let indexMax = 0
    let element1Max = 0

    for (let index = round1; index >= 0; index--) {
      let element1 = array1[index]
      if (element1 > 0) {
        indexMax = index
        element1Max = array1[index]
        break
      }
    }

    if (element2Max >= element1Max) {
      array1[round1] = element2Max
      round1--
      round2--
    } else {
      array1[round1] = element1Max
      array1[indexMax] = 0
      round1--
    }
  }

  return array1
}

let array1 = [3, 3, 4, 5, 6, 9]
let m = 6
let array2 = [2, 3, 4, 5, 10, 12, 14, 15]
let n = 8
console.log(mergeArrays(array1, m, array2, n))
