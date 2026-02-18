window.addEventListener('load', () => { // Esperar a que la página cargue completamente
    const loader = document.getElementById('loader');   // Obtener el elemento del loader

    setTimeout(() => { // Esperar 2 segundos antes de ocultar el loader
        loader.style.opacity = '0'; // Iniciar la transición de opacidad a 0
        setTimeout(() => { // Esperar a que la transición termine
            loader.style.display = 'none'; // Ocultar el loader completamente
            initAnimations();
        }, 500); // Duración de la transición (500ms)
    }, 2000); // Tiempo que el loader permanece visible (2000ms)
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

// ===================================
// NAVEGACIÓN - Navbar scroll y responsive
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Actualizar enlace activo según la sección visible
    updateActiveNavLink();

    // Mostrar/ocultar botón scroll to top
    toggleScrollButton();
});

// Menú hamburguesa para móvil
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// THEME TOGGLE - Cambiar entre tema oscuro y claro
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon();
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');

    // Guardar preferencia
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);

    updateThemeIcon();
});

function updateThemeIcon() {
    if (body.classList.contains('light-theme')) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// ===================================
// MODAL DE IMAGEN - Pop-up para ver imágenes ampliadas
// ===================================
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');
const openModalButtons = document.querySelectorAll('.open-image-modal');

// Abrir modal al hacer clic en el botón
openModalButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const imageSrc = this.getAttribute('data-image');
        modalImage.src = imageSrc;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
});

// Cerrar modal al hacer clic en el botón de cerrar
modalClose.addEventListener('click', function() {
    closeModal();
});

// Cerrar modal al hacer clic fuera de la imagen
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        closeModal();
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
}