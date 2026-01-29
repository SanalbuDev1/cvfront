// main.js
console.log('El script externo se está ejecutando.');
let contador = 0;
const contadorElemento = document.getElementById('contador');
const incrementarBtn = document.getElementById('incrementarBtn');
incrementarBtn.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = `Contador: ${contador}`;
});