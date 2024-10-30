let array1 = [3, 3, 4, 5, 6, 9]
let m = 6
let array2 = [2, 3, 4, 5, 10, 12, 14, 15]
let n = 8

// RELLENAR VALORES DE ARRAY1 con 0

function completeArray(array, numberElements) {
  const arrayLength = array.length
  if (arrayLength <= numberElements) {
    // let difference = numberElements - arrayLength
    // while (difference > 0) {
    //   array.push(0)
    //   difference--
    // }
    array.push(...Array(numberElements - arrayLength).fill(0))
  }

  return array
}

// FUCIONAR ARRAY1 con ARRAY2 y ordenar

function mergeArrays(array1, m, array2, n) {
  //Reemplazar array1 por array completado
  array1 = completeArray(array1, m + n)

  //Fucionar y ordenar array1 con array2
  let round1 = m + n - 1 //4
  let round2 = n - 1 //3

  while (round2 >= 0) {
    // 2 1 0
    let element2Max = array2[round2] //Elemento mayor de array2

    let indexMax = 0 // index del mayor de array1
    let element1Max = 0 // valor del mayor de array1

    //Recorremos hasta encontrar el mayor
    for (let index = round1; index >= 0; index--) {
      let element1 = array1[index]
      // 4 3 2 1 0
      if (element1 > 0) {
        indexMax = index
        element1Max = array1[index]
        break
      }
    }

    // Si el valor mayor del array 2 es mayor que el valor del array 1
    if (element2Max >= element1Max) {
      array1[round1] = element2Max //
      round1-- //3
      round2--
    } else {
      array1[round1] = element1Max //
      array1[indexMax] = 0
      round1-- //3
    }
  }

  return array1
}

console.log(mergeArrays(array1, m, array2, n))
