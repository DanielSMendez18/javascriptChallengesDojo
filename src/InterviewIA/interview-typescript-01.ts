// TODO: TYPESCRIPT - BASIC

/**
** ¿Cuál es la diferencia entre "type" e "interface" en TypeScript? ¿En qué situaciones usarías cada uno?
 */

/**
 * En TypeScript, tanto type como interface se utilizan para definir tipos, pero tienen algunas 
 * diferencias clave en cuanto a su funcionalidad y uso. Veamos las diferencias más importantes:
 */

// Definición básica
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "John",
    age: 30,
};

type Person1 = {
    name: string;
    age: number;
};

const person1: Person1 = {
    name: "John",
    age: 30,
};

// Uniones e intercepciones 

// Unión
type ID = number | string;

// Intersección
type Name = {
    firstName: string;
    lastName: string;
};

type Age = { age: number };

type Person2 = Name & Age;

const person2: Person2 = { firstName: "John", lastName: "Doe", age: 30 };


interface Name3 {
    firstName: string;
    lastName: string;
}

interface Age3 {
    age: number;
}

interface Person3 extends Name3, Age3 { }

const person3: Person3 = { firstName: "John", lastName: "Doe", age: 30 };



/**
 * * ¿Cómo manejarías tipos opcionales en TypeScript y qué beneficios tiene usarlos?
 */

/**
 * En TypeScript, puedes definir tipos opcionales usando el símbolo ?. Esto significa que una propiedad o un parámetro 
 * no es obligatorio al momento de usar un objeto o función.
 */

interface User {
    name: string;
    age?: number; // Esta propiedad es opcional
}

const user1: User = { name: "Alice" }; // Válido, `age` es opcional
const user2: User = { name: "Bob", age: 25 }; // Válido, `age` puede estar presente


function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

console.log(greet("Alice")); // "Hello, Alice"
console.log(greet("Bob", "Hi")); // "Hi, Bob"
