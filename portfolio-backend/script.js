/* ===================================
   PORTAFOLIO BACKEND DEVELOPER
   JavaScript para funcionalidades interactivas
=================================== */

// ===================================
// LOADER - Pantalla de carga (0.7 segundos exactos)
// ===================================
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');

    // Ocultar el loader después de exactamente 0.7 segundos
    setTimeout(function() {
        loader.style.opacity = '0';

        // Remover completamente después de la transición de fade
        setTimeout(function() {
            loader.style.display = 'none';
            // Iniciar animaciones de entrada
            initializeAnimations();
        }, 300);
    }, 700); // 0.7 segundos exactos
});

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

// Actualizar enlace activo en la navegación
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// SMOOTH SCROLL - Navegación suave entre secciones
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Offset para el navbar fijo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// TYPING EFFECT - Efecto de escritura en el título
// ===================================
const typingText = document.getElementById('typing-text');
const textToType = ['Backend Developer', 'Software Engineer', 'API Architect', 'Systems Designer'];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const currentText = textToType[currentTextIndex];

    if (isDeleting) {
        // Borrar caracteres
        typingText.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        // Escribir caracteres
        typingText.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 150;
    }

    // Si terminó de escribir el texto
    if (!isDeleting && currentCharIndex === currentText.length) {
        // Esperar un momento antes de borrar
        typingSpeed = 2000;
        isDeleting = true;
    }
    // Si terminó de borrar el texto
    else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textToType.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Iniciar efecto de escritura cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    if (typingText) {
        typeText();
    }
});

// ===================================
// SCROLL REVEAL - Animaciones al hacer scroll
// ===================================
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: dejar de observar después de animar
            // revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

function initializeAnimations() {
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Animar barras de progreso cuando entren al viewport
    animateSkillBars();
}

// ===================================
// SKILLS - Animar barras de progreso
// ===================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ===================================
// PROJECTS - Filtros de proyectos
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover active de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        // Añadir active al botón clickeado
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');

            // Ocultar todas las tarjetas
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';

            setTimeout(() => {
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            }, 300);
        });
    });
});

// ===================================
// CONTACT FORM - Validación y envío
// ===================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar formulario
        if (validateForm()) {
            // Simular envío del formulario
            sendForm();
        }
    });
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    // Limpiar errores previos
    clearFormErrors();

    // Validar nombre
    if (name.value.trim() === '') {
        showError(name, 'Por favor ingresa tu nombre');
        isValid = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showError(email, 'Por favor ingresa tu email');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Por favor ingresa un email válido');
        isValid = false;
    }

    // Validar asunto
    if (subject.value.trim() === '') {
        showError(subject, 'Por favor ingresa un asunto');
        isValid = false;
    }

    // Validar mensaje
    if (message.value.trim() === '') {
        showError(message, 'Por favor escribe un mensaje');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    errorElement.textContent = message;
    input.style.borderColor = '#ff4444';
}

function clearFormErrors() {
    const formInputs = document.querySelectorAll('.form-input');
    const errorElements = document.querySelectorAll('.form-error');

    formInputs.forEach(input => {
        input.style.borderColor = '';
    });

    errorElements.forEach(error => {
        error.textContent = '';
    });
}

function sendForm() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Cambiar texto del botón
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simular envío (reemplazar con lógica real de envío)
    setTimeout(() => {
        // Mostrar mensaje de éxito
        formMessage.className = 'form-message success';
        formMessage.textContent = '¡Mensaje enviado correctamente! Te responderé pronto.';

        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Limpiar formulario
        contactForm.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 2000);
}

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
// SCROLL TO TOP BUTTON
// ===================================
const scrollToTopBtn = document.getElementById('scroll-to-top');

function toggleScrollButton() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// PARTICLES EFFECT - Efecto de partículas animadas
// ===================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');

    if (!particlesContainer) return;

    // Crear partículas flotantes
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 215, 0, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }
}

// Animación de flotación para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Inicializar partículas después de que cargue la página
document.addEventListener('DOMContentLoaded', createParticles);

// ===================================
// MOUSE PARALLAX EFFECT - Efecto parallax con el mouse
// ===================================
const heroImage = document.querySelector('.hero-image-wrapper');

if (heroImage) {
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const moveX = (mouseX - 0.5) * 20; // Máximo 20px de movimiento
        const moveY = (mouseY - 0.5) * 20;

        heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// ===================================
// COPY EMAIL - Copiar email al hacer clic
// ===================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');

        // Copiar al portapapeles
        navigator.clipboard.writeText(email).then(() => {
            // Mostrar tooltip de confirmación
            showTooltip(this, '¡Email copiado!');
        }).catch(err => {
            console.error('Error al copiar email:', err);
        });
    });
});

function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--primary-yellow);
        color: var(--dark-bg);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;

    const parent = element.parentElement;
    parent.style.position = 'relative';
    parent.appendChild(tooltip);

    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}

// ===================================
// PERFORMANCE - Lazy loading de imágenes
// ===================================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ===================================
// ACCESSIBILITY - Navegación por teclado
// ===================================
document.addEventListener('keydown', function(e) {
    // Escape para cerrar el menú móvil
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Ctrl/Cmd + K para ir arriba
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===================================
// CONSOLE MESSAGE - Mensaje en la consola
// ===================================
console.log(
    '%c🚀 Backend Developer Portfolio',
    'font-size: 24px; font-weight: bold; color: #FFD700;'
);
console.log(
    '%c👨‍💻 ¿Interesado en trabajar juntos? Contáctame!',
    'font-size: 14px; color: #a0a0a0;'
);
console.log(
    '%c📧 Email: santiago.alvarez.dev@example.com',
    'font-size: 12px; color: #FFD700;'
);
console.log(
    '%c🔗 GitHub: github.com/santiagoalvarez',
    'font-size: 12px; color: #FFD700;'
);

// ===================================
// ANALYTICS - Tracking de eventos (opcional)
// ===================================
// Puedes integrar Google Analytics, Mixpanel, etc.
function trackEvent(category, action, label) {
    // Ejemplo: gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Trackear clics en proyectos
projectCards.forEach(card => {
    const projectLinks = card.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const projectTitle = card.querySelector('.project-title').textContent;
            trackEvent('Projects', 'Click', projectTitle);
        });
    });
});

// Trackear envío de formulario
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        trackEvent('Contact', 'Submit', 'Contact Form');
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION - Debounce para scroll
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos de scroll
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
    toggleScrollButton();
}, 50);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// INICIALIZACIÓN FINAL
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio initialized successfully');

    // Añadir clase para activar animaciones CSS
    document.body.classList.add('loaded');

    // Configurar observer para animaciones
    updateActiveNavLink();
});

// ===================================
// SERVICE WORKER - PWA (opcional)
// ===================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
            function(registration) {
                console.log('ServiceWorker registration successful');
            },
            function(err) {
                console.log('ServiceWorker registration failed: ', err);
            }
        );
    });
}
*/

// ===================================
// SISTEMA DE IDIOMAS - Español / Inglés
// ===================================
const translations = {
    es: {
        // Loader
        loader: 'Cargando',

        // Navegación
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.skills': 'Skills',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.description': 'Especializado en construir APIs robustas, sistemas escalables y arquitecturas backend de alto rendimiento. Transformo ideas en soluciones tecnológicas eficientes.',
        'hero.btnProjects': 'Ver Proyectos',
        'hero.btnContact': 'Contactar',
        'hero.scroll': 'Scroll',

        // About
        'about.tag': 'Conóceme',
        'about.title': 'Sobre Mí',
        'about.subtitle': 'Apasionado por crear soluciones backend eficientes y escalables',
        'about.stat1': 'Años de Experiencia',
        'about.stat2': 'Proyectos Completados',
        'about.stat3': 'Clientes Satisfechos',
        'about.desc1': 'Soy un <strong>Desarrollador Backend</strong> con más de 5 años de experiencia diseñando y construyendo sistemas escalables, APIs RESTful y arquitecturas de microservicios para empresas de diversos sectores.',
        'about.desc2': 'Mi enfoque está en escribir código limpio, mantenible y eficiente, aplicando las mejores prácticas de desarrollo y patrones de diseño. Me especializo en tecnologías como <strong>Node.js, Python, PostgreSQL</strong> y servicios en la nube como <strong>AWS</strong>.',
        'about.desc3': 'Cuando no estoy programando, me encuentro explorando nuevas tecnologías, contribuyendo a proyectos open source, o compartiendo conocimiento con la comunidad de desarrolladores.',
        'about.highlight1': 'Arquitectura de microservicios',
        'about.highlight2': 'Diseño de APIs RESTful y GraphQL',
        'about.highlight3': 'Optimización de bases de datos',
        'about.highlight4': 'DevOps y CI/CD',
        'about.btnCV': 'Descargar CV',

        // Skills
        'skills.tag': 'Tecnologías',
        'skills.title': 'Skills Técnicos',
        'skills.subtitle': 'Stack tecnológico y herramientas que domino',
        'skills.languages': 'Lenguajes',
        'skills.databases': 'Bases de Datos',
        'skills.tools': 'Herramientas',

        // Projects
        'projects.tag': 'Trabajos Recientes',
        'projects.title': 'Proyectos Destacados',
        'projects.subtitle': 'Algunos de los proyectos en los que he trabajado',
        'projects.filterAll': 'Todos',
        'projects.filterAPIs': 'APIs',
        'projects.filterMicro': 'Microservicios',
        'projects.filterFull': 'Full Stack',

        // Experience
        'experience.tag': 'Trayectoria',
        'experience.title': 'Experiencia Laboral',
        'experience.subtitle': 'Mi camino profesional en el desarrollo backend',

        // Contact
        'contact.tag': 'Hablemos',
        'contact.title': 'Contáctame',
        'contact.subtitle': '¿Tienes un proyecto en mente? Estaré encantado de ayudarte',
        'contact.infoTitle': 'Información de Contacto',
        'contact.infoText': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para formar parte de tus visiones.',
        'contact.email': 'Email',
        'contact.phone': 'Teléfono',
        'contact.location': 'Ubicación',
        'contact.locationValue': 'Madrid, España',
        'contact.followMe': 'Sígueme en:',
        'contact.form.name': 'Nombre Completo',
        'contact.form.namePlaceholder': 'Tu nombre',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'tu@email.com',
        'contact.form.subject': 'Asunto',
        'contact.form.subjectPlaceholder': 'Asunto del mensaje',
        'contact.form.message': 'Mensaje',
        'contact.form.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
        'contact.form.submit': 'Enviar Mensaje',

        // Footer
        'footer.slogan': 'Construyendo el futuro, una API a la vez.',
        'footer.navigation': 'Navegación',
        'footer.followMe': 'Sígueme',
        'footer.copyright': '© 2026 Backend Developer Portfolio. Todos los derechos reservados.',
        'footer.madeWith': 'Desarrollado con <i class="fas fa-heart"></i> y mucho <i class="fas fa-coffee"></i>'
    },
    en: {
        // Loader
        loader: 'Loading',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.description': 'Specialized in building robust APIs, scalable systems, and high-performance backend architectures. I transform ideas into efficient technological solutions.',
        'hero.btnProjects': 'View Projects',
        'hero.btnContact': 'Contact Me',
        'hero.scroll': 'Scroll',

        // About
        'about.tag': 'Get to know me',
        'about.title': 'About Me',
        'about.subtitle': 'Passionate about creating efficient and scalable backend solutions',
        'about.stat1': 'Years of Experience',
        'about.stat2': 'Completed Projects',
        'about.stat3': 'Satisfied Clients',
        'about.desc1': "I'm a <strong>Backend Developer</strong> with over 5 years of experience designing and building scalable systems, RESTful APIs, and microservices architectures for companies across various industries.",
        'about.desc2': 'My focus is on writing clean, maintainable, and efficient code, applying best development practices and design patterns. I specialize in technologies like <strong>Node.js, Python, PostgreSQL</strong> and cloud services like <strong>AWS</strong>.',
        'about.desc3': "When I'm not coding, I'm exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.",
        'about.highlight1': 'Microservices architecture',
        'about.highlight2': 'RESTful and GraphQL API design',
        'about.highlight3': 'Database optimization',
        'about.highlight4': 'DevOps and CI/CD',
        'about.btnCV': 'Download CV',

        // Skills
        'skills.tag': 'Technologies',
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Tech stack and tools I master',
        'skills.languages': 'Languages',
        'skills.databases': 'Databases',
        'skills.tools': 'Tools',

        // Projects
        'projects.tag': 'Recent Work',
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Some of the projects I have worked on',
        'projects.filterAll': 'All',
        'projects.filterAPIs': 'APIs',
        'projects.filterMicro': 'Microservices',
        'projects.filterFull': 'Full Stack',

        // Experience
        'experience.tag': 'Career Path',
        'experience.title': 'Work Experience',
        'experience.subtitle': 'My professional journey in backend development',

        // Contact
        'contact.tag': "Let's Talk",
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Have a project in mind? I would be happy to help you',
        'contact.infoTitle': 'Contact Information',
        'contact.infoText': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.locationValue': 'Madrid, Spain',
        'contact.followMe': 'Follow me:',
        'contact.form.name': 'Full Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'Message subject',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Tell me about your project...',
        'contact.form.submit': 'Send Message',

        // Footer
        'footer.slogan': 'Building the future, one API at a time.',
        'footer.navigation': 'Navigation',
        'footer.followMe': 'Follow Me',
        'footer.copyright': '© 2026 Backend Developer Portfolio. All rights reserved.',
        'footer.madeWith': 'Built with <i class="fas fa-heart"></i> and lots of <i class="fas fa-coffee"></i>'
    }
};

// Idioma actual (por defecto español)
let currentLang = localStorage.getItem('language') || 'es';

// Toggle de idioma
const langToggle = document.getElementById('lang-toggle');
const langText = langToggle?.querySelector('.lang-text');

// Función para cambiar el idioma
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar texto del botón
    if (langText) {
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Traducir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Event listener para el botón de idioma
if (langToggle) {
    langToggle.addEventListener('click', function() {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });
}

// Aplicar idioma guardado al cargar
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
});
