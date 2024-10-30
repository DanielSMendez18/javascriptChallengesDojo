//TODO: JAVASCRIPT - BÁSICO
/**
* * ¿Qué es el "Event Loop" en JavaScript y cómo maneja la ejecución de tareas asíncronas?

El Event Loop es un mecanismo fundamental en JavaScript que maneja la ejecución de código, la gestión de eventos y la ejecución de tareas asíncronas. 
Dado que JavaScript es un lenguaje de ejecución single-threaded (un solo hilo), 
el Event Loop permite que se puedan manejar operaciones asíncronas sin bloquear la ejecución del código.

Proceso del Event Loop:
Call Stack (Pila de ejecución): Es donde se apilan las funciones a medida que son invocadas. Cuando la función termina de ejecutarse, se elimina de la pila.
Task Queue (Cola de tareas): Es una cola donde se colocan las tareas asíncronas (como callbacks de setTimeout, promesas, eventos de I/O) que deben ser ejecutadas.
El Event Loop constantemente revisa el estado del Call Stack y si está vacío, toma una tarea de la Task Queue y la coloca en la Call Stack para que sea ejecutada.

Manejo de tareas asíncronas:
Las funciones asíncronas como setTimeout, operaciones de I/O y Promesas no se ejecutan inmediatamente. En su lugar, son manejadas por el Event Loop que las coloca en 
la Task Queue o Microtask Queue (para promesas) cuando están listas.
Microtask Queue: Tiene una prioridad mayor que la Task Queue, por lo que las tareas como los callbacks de las promesas se ejecutan antes de otras como los setTimeout.

*/

console.log('Inicio')

setTimeout(() => {
  console.log('Tarea asíncrona')
}, 0)

Promise.resolve().then(() => {
  console.log('Promesa resuelta')
})

console.log('Fin')

/**
 * * ¿Qué diferencia hay entre let, const y var? ¿Cuándo usarías cada uno?
 */

/**
 * var
- Ámbito (scope): var tiene ámbito de función, lo que significa que si se declara dentro de una función, 
su valor solo será accesible dentro de esa función. Si se declara fuera de una función, es global.
- Hoisting: Las declaraciones con var son elevadas (hoisting) al inicio de su ámbito, pero sin inicialización. 
Esto significa que la declaración es movida al principio, pero su valor no.
- Reasignación: Se puede reasignar el valor.
 */

console.log(x) // undefined
var x = 5
console.log(x) // 5

/**
 * let
- Ámbito (scope): let tiene ámbito de bloque, lo que significa que su valor solo es accesible dentro 
del bloque {} en el que se declaró (ej. dentro de un if o un for).
- Hoisting: let es elevado, pero no se puede usar antes de su declaración. Esto se llama Temporal Dead Zone (TDZ).
- Reasignación: Se puede reasignar el valor.
 */

//! console.log(x) // Error: x is not defined
let y = 15
console.log(y) // 15

/**
 * const
- Ámbito (scope): Igual que let, tiene ámbito de bloque.
- Hoisting: Similar a let, const también tiene una Temporal Dead Zone.
- Reasignación: No se puede reasignar, el valor es constante. Sin embargo, los objetos y arrays creados con const pueden mutar su contenido.
 */

const z = 10
//! x = 20 // Error: Assignment to constant variable

const arr = [1, 2]
arr.push(3) // Esto es válido
console.log(arr) // [1, 2, 3]

/**
 * * Ejemplo 1: Ámbito de bloque con var y let
 */

if (true) {
  var count = 10
}
console.log('count', count) // 10

if (true) {
  let item = 10
}
//! console.log(item) // Error: y is not defined

/**
 * * Ejemplo 2: Reasignación de valores
 */

var a = 5
var a = 10 // Redeclaración permitida
a = 25 // Reasignación permitida
console.log(a) // 20

let b = 5
// ! se puede reasignar el valor, pero no se puede volver a declarar
//! let b = 10; // Error: Identifier 'b' has already been declared
b = 20 // Reasignación permitida
console.log(b) // 20

/**
 * * Ejemplo 3: Hoisting
 */

console.log(c) // undefined (hoisting, pero sin valor inicial)
var c = 10
console.log(c) // 10

//! console.log(d) // Error: Cannot access 'd' before initialization
let d = 10
console.log(d) // 10

/**
 * * Ejemplo 4: Ciclos con var y let
 */

// Con var (El valor de i es el mismo en cada iteración)
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // Imprime 3, 3, 3
  }, 1000)
}

// Con let (El valor de i es único en cada iteración)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // Imprime 0, 1, 2
  }, 1000)
}
