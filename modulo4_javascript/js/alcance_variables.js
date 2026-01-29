let variableGlobal = "Soy global";

function miFuncion() {
    let variableFuncion = "Soy de función"; // Alcance de función/bloque
    if (true) {
        let variableBloque = "Soy de bloque"; // Alcance de bloque
        console.log(variableGlobal);    // Accesible
        console.log(variableFuncion);   // Accesible
        console.log(variableBloque);    // Accesible
    }
    // console.log(variableBloque); // Error: variableBloque is not defined
}

miFuncion();
console.log(variableGlobal); // Accesible
// console.log(variableFuncion); // Error: variableFuncion is not defined