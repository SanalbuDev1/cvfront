window.addEventListener('load', () => { // Esperar a que la página cargue completamente
    const loader = document.getElementById('loader');   // Obtener el elemento del loader

    setTimeout(() => { // Esperar 2 segundos antes de ocultar el loader
        loader.style.opacity = '0'; // Iniciar la transición de opacidad a 0
        setTimeout(() => { // Esperar a que la transición termine
            loader.style.display = 'none'; // Ocultar el loader completamente
            initAnimations();
        }, 5); // Duración de la transición (500ms)
    }, 7); // Tiempo que el loader permanece visible (2000ms)
});

/* ==========================================
   TYPING EFFECT
   ========================================== */
const typingElement = document.getElementById('typing-text');
const textToType = [
    'Backend Developer',
    'Software Engineer',
    'Leader Tid',
    'Systems Designer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textToType[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1); // Eliminar un carácter
        charIndex--; // Disminuir el índice de caracteres
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pausa al completar
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textToType.length;
        typeSpeed = 500; // Pausa antes de nuevo texto
    }

    setTimeout(typeText, typeSpeed);
}

typeText();

/* ==========================================
   SCROLL REVEAL
   ========================================== */
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale'); // Seleccionar todos los elementos a revelar

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Skills bars
    initSkillBars();
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}