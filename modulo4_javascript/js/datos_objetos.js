const proyecto = {
    titulo: "Sitio Web de Portafolio",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    activo: true,
    mostrarInfo: function() {
        console.log(`Proyecto: ${this.titulo}, Tecnologías: ${this.tecnologias.join(', ')}`);
    }
};
console.log(proyecto.titulo); // Acceso por punto
console.log(proyecto['tecnologias']); // Acceso por corchetes
proyecto.mostrarInfo(); // Salida: Proyecto: Sitio Web de Portafolio, Tecnologías: HTML, CSS, JavaScript

const habilidades = ["HTML", "CSS", "JavaScript", "React"];
console.log(habilidades[0]); // Acceso al primer elemento
habilidades.push("Node.js"); // Añadir un elemento al final
console.log(habilidades.length); // Salida: 5