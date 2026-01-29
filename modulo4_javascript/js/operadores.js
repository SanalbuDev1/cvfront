let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (resto de la división)
console.log(a ** b); // 1000 (10 elevado a 3)

let contadorClicks = 0;
contadorClicks++; // contadorClicks es 1
console.log(contadorClicks); // 1

// Operadores de asignación

let score = 100;
score += 50; // score = score + 50; (score es 150)
score -= 20; // score = score - 20; (score es 130)
console.log(score); // 130

// Operadores de comparación

let num1 = 10;
let num2 = "10";
console.log(num1 == num2);  // true (compara solo valor)
console.log(num1 === num2); // false (compara valor y tipo)
console.log(num1 != num2);  // false
console.log(num1 !== num2); // true
console.log(num1 > 5);      // true

// Operadores lógicos

let usuarioLogueado = true;
let tienePermiso = false;
let esAdministrador = true;
console.log(usuarioLogueado && esAdministrador); // true (ambas son true)
console.log(usuarioLogueado && tienePermiso);    // false (tienePermiso es false)
console.log(usuarioLogueado || tienePermiso);    // true (al menos una es true)
console.log(!tienePermiso);                      // true (negación de false)

// Operador ternario

let edad = 18;
let puedeVotar = (edad >= 18) ? "Sí puede votar" : "No puede votar";
console.log(puedeVotar); // Salida: Sí puede votar

