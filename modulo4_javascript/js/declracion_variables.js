// Declaración con var (menos recomendable)
var nombreProyecto = "Portafolio Personal";
nombreProyecto = "Nuevo Portafolio"; // Reasignación permitida
var nombreProyecto = "Otro Portafolio"; // Redeclaración permitida (puede llevar a errores)
console.log(nombreProyecto); // Salida: Otro Portafolio

// Declaración con let (flexible)
let edadUsuario = 30;
edadUsuario = 31; // Reasignación permitida
// let edadUsuario = 32; // Error: Identifier 'edadUsuario' has already been declared
console.log(edadUsuario); // Salida: 31

// Declaración con const (inmutable)
const URL_BASE = "https://mi-portafolio.com";
// URL_BASE = "https://otro-portafolio.com"; // Error: Assignment to constant variable.
console.log(URL_BASE); // Salida: https://mi-portafolio.com

const proyectos = []; // Un array declarado con const puede ser modificado
proyectos.push("Proyecto A");
console.log(proyectos); // Salida: ["Proyecto A"]
// proyectos = ["Proyecto B"]; // Error: Assignment to constant variable.