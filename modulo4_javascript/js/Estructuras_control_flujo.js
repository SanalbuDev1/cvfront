// Condicionales (if/else if/else)

let temaActual = "dark";

if (temaActual === "dark") {
    console.log("Aplicando tema oscuro.");
    // Código para aplicar estilos oscuros
} else if (temaActual === "light") {
    console.log("Aplicando tema claro.");
    // Código para aplicar estilos claros
} else {
    console.log("Tema no reconocido, usando predeterminado.");
}

// Ejemplo práctico: Mostrar mensaje según el número de proyectos
let cantidadProyectos = 3;
if (cantidadProyectos === 0) {
    console.log("¡Empieza tu primer proyecto!");
} else if (cantidadProyectos > 0 && cantidadProyectos <= 5) {
    console.log(`Tienes ${cantidadProyectos} proyectos. ¡Sigue así!`);
} else {
    console.log(`¡Impresionante! Tienes ${cantidadProyectos} o más proyectos.`);
}

// Bucles (for, while, do...while)

// Bucle for
// Iterar sobre un array de proyectos
const listaProyectos = ["Diseño UX", "Aplicación Web", "Juego Mobile"];
for (let i = 0; i < listaProyectos.length; i++) {
    console.log(`Proyecto ${i + 1}: ${listaProyectos[i]}`);
}
/* Salida:
Proyecto 1: Diseño UX
Proyecto 2: Aplicación Web
Proyecto 3: Juego Mobile
*/

// Bucle while
let cargaProgreso = 0;
while (cargaProgreso < 100) {
    console.log(`Cargando... ${cargaProgreso}%`);
    cargaProgreso += 20; // Incrementar el progreso
}
console.log("Carga completa!");

// Bucle do...while
let indice = 0;
do {
    console.log(`(do...while) Proyecto ${indice + 1}: ${proyectos[indice]}`);
    indice++;
} while (indice < proyectos.length);

// Sentencia switch
let estadoMenu = "abierto";
switch (estadoMenu) {
    case "abierto":
        console.log("El menú de navegación está visible.");
        // Mostrar menú
        break; // Importante para salir del switch
    case "cerrado":
        console.log("El menú de navegación está oculto.");
        // Ocultar menú
        break;
    default:
        console.log("Estado de menú desconocido.");
}

