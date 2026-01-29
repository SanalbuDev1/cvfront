// String

let nombre = "Juan Pérez";
let titulo = 'Desarrollador Web';
let descripcion = `Este es mi portafolio como ${titulo}.`; // Template literal
console.log(descripcion); // Salida: Este es mi portafolio como Desarrollador Web.

// Number

let visitas = 1500;
let valorPi = 3.1416;
let sumaVisitas = visitas + 500;
console.log(sumaVisitas); // Salida: 2000

// Boolean

let esActivo = true;
let tieneProyectos = false;
console.log(esActivo); // Salida: true

// Null y Undefined

let proyectoSeleccionado = null;
let comentarios; // Undefined por defecto
console.log(proyectoSeleccionado); // Salida: null
console.log(comentarios); // Salida: undefined

// Symbol

let idUnico = Symbol('id');
let otroIdUnico = Symbol('id');
console.log(idUnico === otroIdUnico); // Salida: false

// BigInt

let granNumero = BigInt(9007199254741991);
let otroGranNumero = 9007199254741991n;
console.log(granNumero + otroGranNumero); // Salida: 18014398509483982n

