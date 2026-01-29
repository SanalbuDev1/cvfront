# Tutorial: Construye Este Portfolio Paso a Paso

**Al terminar esta guia tendras exactamente el mismo portfolio que ves en index.html**

Cada paso te explicara QUE hacer, POR QUE funciona asi, y te dara el codigo exacto para escribir.

---

## Como usar esta guia

1. **Crea una carpeta nueva** llamada `mi-portfolio`
2. **Sigue cada paso en orden** - no saltes pasos
3. **Escribe el codigo tu mismo** - no copies y pegues (aprenderás más)
4. **Prueba en el navegador** despues de cada seccion
5. **Compara con el original** cuando termines

### Estructura final que construiras:

```
mi-portfolio/
├── index.html      (estructura)
├── styles.css      (estilos)
├── script.js       (interactividad)
└── images/         (imagenes)
```

---

# FASE 1: ESTRUCTURA HTML
## Modulos 1-2 (Crear todo el HTML)

---

## PASO 1.1: Archivo base y configuracion

Crea el archivo `index.html` y escribe:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portafolio profesional de desarrollador backend">
    <meta name="author" content="Tu Nombre">

    <title>Backend Developer | Portafolio Profesional</title>

    <!-- CSS - lo crearemos despues -->
    <link rel="stylesheet" href="styles.css">

    <!-- Google Fonts - tipografias profesionales -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Font Awesome - iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>

    <!-- JavaScript - lo crearemos despues -->
    <script src="script.js"></script>
</body>
</html>
```

**QUE APRENDISTE:**
- `<!DOCTYPE html>` - Dice al navegador que es HTML5
- `<meta charset="UTF-8">` - Permite usar acentos y ñ
- `<meta name="viewport">` - Hace la pagina responsive en moviles
- `<link rel="stylesheet">` - Conecta archivos CSS
- `<link href="fonts.googleapis">` - Carga fuentes de Google
- `<script src>` - Conecta archivos JavaScript (siempre al final del body)

**PRUEBA:** Abre en navegador. Veras una pagina en blanco (es correcto).

---

## PASO 1.2: El Loader (pantalla de carga)

Dentro del `<body>`, ANTES del script, agrega:

```html
    <!-- LOADER - Pantalla de carga -->
    <div id="loader" class="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Cargando<span class="dots"></span></div>
        </div>
    </div>
```

**QUE APRENDISTE:**
- `id="loader"` - Identificador UNICO para JavaScript
- `class="loader"` - Clase para estilos CSS (puede repetirse)
- Estructura anidada: contenedor > contenido > spinner + texto

---

## PASO 1.3: La Navegacion (navbar)

Despues del loader, agrega:

```html
    <!-- NAVEGACION -->
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <!-- Logo -->
            <a href="#home" class="logo">
                <span class="logo-bracket">&lt;</span>
                <span class="logo-text">DevBackend</span>
                <span class="logo-bracket">/&gt;</span>
            </a>

            <!-- Menu de navegacion -->
            <ul class="nav-menu" id="nav-menu">
                <li><a href="#home" class="nav-link active">Inicio</a></li>
                <li><a href="#about" class="nav-link">Sobre Mi</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Proyectos</a></li>
                <li><a href="#experience" class="nav-link">Experiencia</a></li>
                <li><a href="#contact" class="nav-link">Contacto</a></li>
            </ul>

            <!-- Boton cambiar tema -->
            <button class="theme-toggle" id="theme-toggle" aria-label="Cambiar tema">
                <i class="fas fa-moon" id="theme-icon"></i>
            </button>

            <!-- Menu hamburguesa (movil) -->
            <button class="hamburger" id="hamburger" aria-label="Abrir menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
```

**QUE APRENDISTE:**
- `<nav>` - Etiqueta semantica para navegacion
- `href="#home"` - Enlace a seccion con id="home"
- `&lt;` y `&gt;` - Caracteres especiales < y >
- `<ul>/<li>` - Lista no ordenada para menus
- `aria-label` - Accesibilidad para lectores de pantalla
- `<i class="fas fa-moon">` - Icono de Font Awesome

---

## PASO 1.4: Hero Section (seccion principal)

Despues de la navegacion:

```html
    <!-- HERO SECTION -->
    <section id="home" class="hero">
        <!-- Particulas de fondo (se crean con JS) -->
        <div class="particles" id="particles"></div>

        <div class="container hero-container">
            <div class="hero-content">
                <!-- Saludo -->
                <p class="hero-greeting">Hola, soy</p>

                <!-- Nombre con efecto gradiente -->
                <h1 class="hero-name">
                    <span class="text-gradient">Tu Nombre Aqui</span>
                </h1>

                <!-- Titulo con efecto typing -->
                <div class="hero-title">
                    <span class="bracket">&lt;</span>
                    <span class="typing-text" id="typing-text"></span>
                    <span class="cursor">|</span>
                    <span class="bracket">/&gt;</span>
                </div>

                <!-- Descripcion -->
                <p class="hero-description">
                    Especializado en construir APIs robustas, sistemas escalables y arquitecturas
                    backend de alto rendimiento. Transformo ideas en soluciones tecnologicas eficientes.
                </p>

                <!-- Botones -->
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">
                        <i class="fas fa-rocket"></i>
                        Ver Proyectos
                    </a>
                    <a href="#contact" class="btn btn-secondary">
                        <i class="fas fa-envelope"></i>
                        Contactar
                    </a>
                </div>

                <!-- Redes sociales -->
                <div class="hero-social">
                    <a href="https://github.com" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" class="social-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:tu@email.com" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="social-link">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            <!-- Imagen hero -->
            <div class="hero-image">
                <div class="hero-image-wrapper">
                    <img src="images/hero-backend.svg" alt="Backend Developer">
                    <div class="hero-image-glow"></div>
                </div>
            </div>
        </div>

        <!-- Indicador de scroll -->
        <div class="scroll-indicator">
            <span>Scroll</span>
            <div class="scroll-arrow">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- `<section id="home">` - Seccion con ID para navegacion interna
- `target="_blank"` - Abre enlace en nueva pestana
- `mailto:` - Abre cliente de correo
- Estructura de 2 columnas: contenido + imagen
- Clases multiples: `class="btn btn-primary"`

---

## PASO 1.5: Seccion Sobre Mi

```html
    <!-- SOBRE MI -->
    <section id="about" class="about section">
        <div class="container">
            <!-- Encabezado de seccion -->
            <div class="section-header">
                <span class="section-tag">Conoceme</span>
                <h2 class="section-title">Sobre Mi</h2>
                <p class="section-subtitle">
                    Apasionado por crear soluciones backend eficientes y escalables
                </p>
            </div>

            <div class="about-content">
                <!-- Foto de perfil -->
                <div class="about-image reveal-left">
                    <div class="about-image-wrapper">
                        <img src="images/perfil.jpg" alt="Tu nombre - Foto de perfil">
                        <div class="about-image-border"></div>
                    </div>

                    <!-- Estadisticas -->
                    <div class="about-stats">
                        <div class="stat-item">
                            <span class="stat-number">5+</span>
                            <span class="stat-label">Anos de Experiencia</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Proyectos Completados</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">30+</span>
                            <span class="stat-label">Clientes Satisfechos</span>
                        </div>
                    </div>
                </div>

                <!-- Texto biografico -->
                <div class="about-text reveal-right">
                    <p class="about-description">
                        Soy un <strong>Desarrollador Backend</strong> con mas de 5 anos de experiencia
                        disenando y construyendo sistemas escalables, APIs RESTful y arquitecturas de
                        microservicios para empresas de diversos sectores.
                    </p>

                    <p class="about-description">
                        Mi enfoque esta en escribir codigo limpio, mantenible y eficiente, aplicando
                        las mejores practicas de desarrollo y patrones de diseno. Me especializo en
                        tecnologias como <strong>Node.js, Python, PostgreSQL</strong> y servicios en
                        la nube como <strong>AWS</strong>.
                    </p>

                    <p class="about-description">
                        Cuando no estoy programando, me encuentro explorando nuevas tecnologias,
                        contribuyendo a proyectos open source, o compartiendo conocimiento con la
                        comunidad de desarrolladores.
                    </p>

                    <!-- Fortalezas -->
                    <div class="about-highlights">
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Arquitectura de microservicios</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Diseno de APIs RESTful y GraphQL</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Optimizacion de bases de datos</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-check-circle"></i>
                            <span>DevOps y CI/CD</span>
                        </div>
                    </div>

                    <!-- Boton CV -->
                    <a href="#" class="btn btn-outline" download>
                        <i class="fas fa-download"></i>
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- `class="reveal-left"` - Clase para animacion JS
- `<strong>` - Texto en negrita con significado semantico
- `download` - Atributo para descargar archivo
- Patron de seccion: header + content

---

## PASO 1.6: Seccion Skills

```html
    <!-- SKILLS -->
    <section id="skills" class="skills section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Tecnologias</span>
                <h2 class="section-title">Skills Tecnicos</h2>
                <p class="section-subtitle">Stack tecnologico y herramientas que domino</p>
            </div>

            <div class="skills-grid">
                <!-- Categoria: Lenguajes -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-code"></i>
                        <h3>Lenguajes</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="90"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-node-js"></i>
                            <span>Node.js</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="85"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-java"></i>
                            <span>Java</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="80"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-golang"></i>
                            <span>Go</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="75"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categoria: Frameworks -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-layer-group"></i>
                        <h3>Frameworks</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-python"></i>
                            <span>Django</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="88"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-bolt"></i>
                            <span>FastAPI</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="85"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-node"></i>
                            <span>Express.js</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="90"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-java"></i>
                            <span>Spring Boot</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="78"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categoria: Bases de Datos -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-database"></i>
                        <h3>Bases de Datos</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fas fa-elephant"></i>
                            <span>PostgreSQL</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="92"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>MongoDB</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="85"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>MySQL</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="88"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-bolt"></i>
                            <span>Redis</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="80"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categoria: DevOps -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-cloud"></i>
                        <h3>DevOps & Cloud</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-docker"></i>
                            <span>Docker</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="90"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-dharmachakra"></i>
                            <span>Kubernetes</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="75"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-aws"></i>
                            <span>AWS</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="85"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-github"></i>
                            <span>CI/CD</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="82"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categoria: APIs -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-exchange-alt"></i>
                        <h3>APIs & Protocolos</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fas fa-link"></i>
                            <span>REST API</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="95"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-project-diagram"></i>
                            <span>GraphQL</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="80"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-broadcast-tower"></i>
                            <span>gRPC</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="70"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-exchange-alt"></i>
                            <span>WebSockets</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="85"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categoria: Herramientas -->
                <div class="skill-category reveal-scale">
                    <div class="category-header">
                        <i class="fas fa-tools"></i>
                        <h3>Herramientas</h3>
                    </div>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="93"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-terminal"></i>
                            <span>Linux</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="88"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-cube"></i>
                            <span>Nginx</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="82"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-project-diagram"></i>
                            <span>Microservices</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-progress="87"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- `data-progress="90"` - Atributo personalizado para JS
- Grid de 6 categorias con 4 skills cada una
- Barras de progreso que se animaran con JS

---

## PASO 1.7: Seccion Proyectos

```html
    <!-- PROYECTOS -->
    <section id="projects" class="projects section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Trabajos Recientes</span>
                <h2 class="section-title">Proyectos Destacados</h2>
                <p class="section-subtitle">Algunos de los proyectos en los que he trabajado</p>
            </div>

            <!-- Filtros -->
            <div class="project-filters">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="api">APIs</button>
                <button class="filter-btn" data-filter="microservices">Microservicios</button>
                <button class="filter-btn" data-filter="fullstack">Full Stack</button>
            </div>

            <!-- Grid de proyectos -->
            <div class="projects-grid">
                <!-- Proyecto 1: Confidencial -->
                <div class="project-card reveal-scale" data-category="api microservices">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                             alt="Sistema E-commerce">
                        <span class="project-badge private-badge">
                            <i class="fas fa-lock"></i> Confidencial
                        </span>
                        <div class="project-overlay">
                            <a href="#" class="project-link" title="Caso de estudio">
                                <i class="fas fa-file-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Java</span>
                            <span class="project-tag">Spring Boot</span>
                            <span class="project-tag">AWS</span>
                        </div>
                        <h3 class="project-title">Plataforma E-commerce Empresarial</h3>
                        <p class="project-description">
                            Sistema backend para marketplace B2B con +50,000 usuarios activos.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-chart-line"></i> +300% rendimiento</span>
                            <span><i class="fas fa-users"></i> 50K+ usuarios</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 2: Open Source -->
                <div class="project-card reveal-scale" data-category="api">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                             alt="Analytics API">
                        <span class="project-badge open-badge">
                            <i class="fab fa-github"></i> Open Source
                        </span>
                        <div class="project-overlay">
                            <a href="https://github.com" target="_blank" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Python</span>
                            <span class="project-tag">FastAPI</span>
                            <span class="project-tag">PostgreSQL</span>
                        </div>
                        <h3 class="project-title">Analytics Dashboard API</h3>
                        <p class="project-description">
                            API REST open-source para dashboard de analitica en tiempo real.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-star"></i> 250+ Stars</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 3: Confidencial -->
                <div class="project-card reveal-scale" data-category="microservices">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
                             alt="Sistema Reservas">
                        <span class="project-badge private-badge">
                            <i class="fas fa-lock"></i> Confidencial
                        </span>
                        <div class="project-overlay">
                            <a href="#" class="project-link">
                                <i class="fas fa-file-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">Kubernetes</span>
                            <span class="project-tag">RabbitMQ</span>
                        </div>
                        <h3 class="project-title">Sistema de Reservas Multinacional</h3>
                        <p class="project-description">
                            Backend para cadena hotelera internacional en 40 paises.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-globe"></i> 40 paises</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 4: Open Source -->
                <div class="project-card reveal-scale" data-category="fullstack">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                             alt="Social API">
                        <span class="project-badge open-badge">
                            <i class="fab fa-github"></i> Open Source
                        </span>
                        <div class="project-overlay">
                            <a href="https://github.com" target="_blank" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">GraphQL</span>
                            <span class="project-tag">MongoDB</span>
                        </div>
                        <h3 class="project-title">Social Network API</h3>
                        <p class="project-description">
                            API GraphQL para red social con mensajeria en tiempo real.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-star"></i> 180+ Stars</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 5: Confidencial -->
                <div class="project-card reveal-scale" data-category="api">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
                             alt="Payment Gateway">
                        <span class="project-badge private-badge">
                            <i class="fas fa-lock"></i> Confidencial
                        </span>
                        <div class="project-overlay">
                            <a href="#" class="project-link">
                                <i class="fas fa-file-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Java</span>
                            <span class="project-tag">Spring Security</span>
                        </div>
                        <h3 class="project-title">Pasarela de Pagos Bancaria</h3>
                        <p class="project-description">
                            Sistema de procesamiento de pagos con cumplimiento PCI-DSS.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-shield-alt"></i> PCI-DSS</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 6: Open Source -->
                <div class="project-card reveal-scale" data-category="microservices fullstack">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                             alt="Task System">
                        <span class="project-badge open-badge">
                            <i class="fab fa-github"></i> Open Source
                        </span>
                        <div class="project-overlay">
                            <a href="https://github.com" target="_blank" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            <span class="project-tag">Go</span>
                            <span class="project-tag">gRPC</span>
                            <span class="project-tag">PostgreSQL</span>
                        </div>
                        <h3 class="project-title">Task Management System</h3>
                        <p class="project-description">
                            Sistema de gestion de tareas con microservicios en Go.
                        </p>
                        <div class="project-features">
                            <span><i class="fas fa-star"></i> 320+ Stars</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- `data-category="api microservices"` - Multiples categorias
- `data-filter="all"` - Atributo para filtrado JS
- Dos tipos de badges: privado (rojo) y open source (verde)
- Overlay con enlaces que aparece en hover

---

## PASO 1.8: Seccion Experiencia (Timeline)

```html
    <!-- EXPERIENCIA -->
    <section id="experience" class="experience section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Trayectoria</span>
                <h2 class="section-title">Experiencia Laboral</h2>
                <p class="section-subtitle">Mi camino profesional en el desarrollo backend</p>
            </div>

            <div class="timeline">
                <!-- Trabajo 1 -->
                <div class="timeline-item reveal-left">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2022 - Presente</div>
                    <div class="timeline-content">
                        <div class="timeline-company">
                            <h3>Senior Backend Developer</h3>
                            <h4>TechCorp Solutions</h4>
                        </div>
                        <p class="timeline-description">
                            Liderazgo tecnico en el desarrollo de arquitecturas de microservicios.
                        </p>
                        <ul class="timeline-achievements">
                            <li>Disene arquitectura que mejoro rendimiento en 40%</li>
                            <li>Lidere equipo de 5 desarrolladores</li>
                            <li>Implemente CI/CD reduciendo deployment en 60%</li>
                        </ul>
                        <div class="timeline-tech">
                            <span>Node.js</span>
                            <span>Docker</span>
                            <span>Kubernetes</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>

                <!-- Trabajo 2 -->
                <div class="timeline-item reveal-right">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2020 - 2022</div>
                    <div class="timeline-content">
                        <div class="timeline-company">
                            <h3>Backend Developer</h3>
                            <h4>StartupHub Inc.</h4>
                        </div>
                        <p class="timeline-description">
                            Desarrollo de APIs RESTful y GraphQL para aplicaciones SaaS.
                        </p>
                        <ul class="timeline-achievements">
                            <li>Desarrolle APIs procesando +1M requests diarios</li>
                            <li>Implemente cache con Redis mejorando velocidad 70%</li>
                            <li>Cree sistema de autenticacion JWT</li>
                        </ul>
                        <div class="timeline-tech">
                            <span>Python</span>
                            <span>Django</span>
                            <span>MongoDB</span>
                            <span>Redis</span>
                        </div>
                    </div>
                </div>

                <!-- Trabajo 3 -->
                <div class="timeline-item reveal-left">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2018 - 2020</div>
                    <div class="timeline-content">
                        <div class="timeline-company">
                            <h3>Junior Backend Developer</h3>
                            <h4>Digital Agency Pro</h4>
                        </div>
                        <p class="timeline-description">
                            Desarrollo de soluciones backend para clientes de diversos sectores.
                        </p>
                        <ul class="timeline-achievements">
                            <li>Participe en +15 proyectos backend</li>
                            <li>Implemente integraciones con APIs externas</li>
                            <li>Colabore en migracion a microservicios</li>
                        </ul>
                        <div class="timeline-tech">
                            <span>Node.js</span>
                            <span>Express</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>

                <!-- Trabajo 4 -->
                <div class="timeline-item reveal-right">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2017 - 2018</div>
                    <div class="timeline-content">
                        <div class="timeline-company">
                            <h3>Backend Developer Intern</h3>
                            <h4>CodeLearning Academy</h4>
                        </div>
                        <p class="timeline-description">
                            Primera experiencia profesional en desarrollo backend.
                        </p>
                        <ul class="timeline-achievements">
                            <li>Desarrolle endpoints RESTful</li>
                            <li>Aprendi patrones de diseno</li>
                            <li>Realice testing unitario</li>
                        </ul>
                        <div class="timeline-tech">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- Timeline vertical con linea central
- Alternancia izquierda/derecha con reveal-left y reveal-right
- Estructura de cada item: fecha + contenido

---

## PASO 1.9: Seccion Contacto

```html
    <!-- CONTACTO -->
    <section id="contact" class="contact section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Hablemos</span>
                <h2 class="section-title">Contactame</h2>
                <p class="section-subtitle">Tienes un proyecto en mente? Estare encantado de ayudarte</p>
            </div>

            <div class="contact-content">
                <!-- Info de contacto -->
                <div class="contact-info reveal-left">
                    <h3>Informacion de Contacto</h3>
                    <p class="contact-text">
                        Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
                        u oportunidades para formar parte de tus visiones.
                    </p>

                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-data">
                                <h4>Email</h4>
                                <a href="mailto:tu@email.com">tu@email.com</a>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-data">
                                <h4>Telefono</h4>
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-data">
                                <h4>Ubicacion</h4>
                                <p>Tu Ciudad, Pais</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-social">
                        <h4>Sigueme en:</h4>
                        <div class="social-links">
                            <a href="https://github.com" target="_blank" class="social-link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" class="social-link">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" class="social-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Formulario -->
                <div class="contact-form-wrapper reveal-right">
                    <form id="contact-form" class="contact-form">
                        <div class="form-group">
                            <label for="name">Nombre Completo</label>
                            <input type="text" id="name" name="name" class="form-input"
                                   placeholder="Tu nombre" required>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-input"
                                   placeholder="tu@email.com" required>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <label for="subject">Asunto</label>
                            <input type="text" id="subject" name="subject" class="form-input"
                                   placeholder="Asunto del mensaje" required>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" class="form-input" rows="5"
                                      placeholder="Cuentame sobre tu proyecto..." required></textarea>
                            <span class="form-error"></span>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">
                            <i class="fas fa-paper-plane"></i>
                            Enviar Mensaje
                        </button>

                        <div class="form-message" id="form-message"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
```

**QUE APRENDISTE:**
- `<form>` con `id` para JS
- `<input>` con tipos: text, email
- `<textarea>` para texto largo
- `required` - Campo obligatorio HTML5
- `<label for="id">` - Conecta label con input
- `<span class="form-error">` - Para mostrar errores JS

---

## PASO 1.10: Footer y Boton Scroll

```html
    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <a href="#home" class="logo">
                        <span class="logo-bracket">&lt;</span>
                        <span class="logo-text">DevBackend</span>
                        <span class="logo-bracket">/&gt;</span>
                    </a>
                    <p>Construyendo el futuro, una API a la vez.</p>
                </div>

                <div class="footer-links">
                    <h4>Navegacion</h4>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre Mi</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-social">
                    <h4>Sigueme</h4>
                    <div class="social-links">
                        <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="mailto:tu@email.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 Backend Developer Portfolio. Todos los derechos reservados.</p>
                <p>Desarrollado con <i class="fas fa-heart"></i> y mucho <i class="fas fa-coffee"></i></p>
            </div>
        </div>
    </footer>

    <!-- Boton Scroll to Top -->
    <button class="scroll-to-top" id="scroll-to-top" aria-label="Volver arriba">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

**HTML COMPLETADO!** Ahora tienes toda la estructura. Al abrir en navegador veras todo el contenido sin estilos (feo pero funcional).

---

# FASE 2: ESTILOS CSS
## Modulos 3-6 (Dar estilo visual)

Crea el archivo `styles.css`. El CSS completo tiene **1725 lineas** con todos los efectos.
A continuacion esta el codigo COMPLETO que debes escribir, seccion por seccion.

---

## PASO 2.1: Variables CSS y Reset

```css
/* ===================================
   PORTAFOLIO BACKEND DEVELOPER
   Estilos profesionales con paleta amarillo + oscuro
=================================== */

/* ===================================
   VARIABLES CSS - Sistema de diseno
=================================== */
:root {
    /* Paleta de colores principal - Amarillos */
    --primary-yellow: #FFD700;
    --secondary-yellow: #FFC700;
    --accent-yellow: #FFEB3B;
    --yellow-dark: #E6B800;
    --yellow-light: #FFF9C4;

    /* Colores oscuros profesionales */
    --dark-bg: #1a1a1a;
    --dark-secondary: #2d2d2d;
    --dark-accent: #404040;
    --dark-lighter: #525252;
    --black-pure: #000000;

    /* Textos */
    --text-light: #ffffff;
    --text-gray: #a0a0a0;
    --text-dark: #1a1a1a;

    /* Gradientes elegantes */
    --gradient-yellow: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);
    --gradient-dark: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    --gradient-yellow-dark: linear-gradient(135deg, #FFD700 0%, #E6B800 100%);

    /* Tipografia */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-secondary: 'Poppins', sans-serif;

    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 5rem;

    /* Bordes */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;

    /* Sombras elegantes */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
    --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.25);
    --shadow-yellow: 0 4px 20px rgba(255, 215, 0, 0.3);
    --shadow-yellow-lg: 0 8px 32px rgba(255, 215, 0, 0.4);

    /* Transiciones suaves */
    --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Tema claro (opcional) */
body.light-theme {
    --dark-bg: #f5f5f5;
    --dark-secondary: #e8e8e8;
    --dark-accent: #d4d4d4;
    --text-light: #1a1a1a;
    --text-gray: #666666;
}

/* ===================================
   RESET Y BASE
=================================== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-primary);
    background: var(--dark-bg);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-base);
}

ul {
    list-style: none;
}

button {
    font-family: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    transition: var(--transition-base);
}

/* ===================================
   UTILIDADES
=================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section {
    padding: var(--spacing-xl) 0;
}

.text-gradient {
    background: var(--gradient-yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

**QUE APRENDISTE:**
- Variables CSS con `--nombre: valor`
- `cubic-bezier()` - Curvas de animacion personalizadas
- `body.light-theme` - Clase para cambiar tema
- `*, *::before, *::after` - Incluye pseudo-elementos en el reset
- Gradientes como variables

---

## PASO 2.2: Loader

```css
/* ===================================
   LOADER - Pantalla de carga elegante
=================================== */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    transition: opacity 0.3s ease;
}

.loader-content {
    text-align: center;
}

/* Spinner circular elegante */
.loader-spinner {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    border: 4px solid var(--dark-accent);
    border-top-color: var(--primary-yellow);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.loader-text {
    font-size: 1.2rem;
    color: var(--text-light);
    font-weight: 500;
}

/* Animacion de puntos suspensivos */
.loader-text .dots::after {
    content: '';
    animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
    0%, 20% { content: ''; }
    40% { content: '.'; }
    60% { content: '..'; }
    80%, 100% { content: '...'; }
}
```

---

## PASO 2.3: Navegacion

```css
/* ===================================
   NAVEGACION - Navbar elegante
=================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem 0;
    z-index: 1000;
    transition: var(--transition-base);
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.navbar.scrolled {
    padding: 1rem 0;
    box-shadow: var(--shadow-md);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo con estilo de codigo */
.logo {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.logo-bracket {
    color: var(--primary-yellow);
    font-weight: 900;
}

.logo-text {
    color: var(--text-light);
}

.logo:hover .logo-bracket {
    animation: pulse 0.6s ease-in-out;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* Menu de navegacion */
.nav-menu {
    display: flex;
    gap: 2.5rem;
    align-items: center;
}

.nav-link {
    position: relative;
    color: var(--text-gray);
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.5rem 0;
}

/* Efecto de subrayado animado */
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-yellow);
    transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-yellow);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

/* Toggle de tema */
.theme-toggle {
    width: 40px;
    height: 40px;
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-yellow);
    font-size: 1.1rem;
}

.theme-toggle:hover {
    background: var(--primary-yellow);
    color: var(--dark-bg);
    transform: rotate(180deg);
}

/* Menu hamburguesa (movil) */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    padding: 0.5rem;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--text-light);
    transition: var(--transition-base);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}
```

**QUE APRENDISTE:**
- `@keyframes pulse` - Animacion de escala para el logo
- `backdrop-filter: blur()` - Efecto de desenfoque de fondo
- `var(--gradient-yellow)` - Usar gradiente como variable
- `transform: rotate(180deg)` - Rotacion en hover

---

## PASO 2.4: Hero Section

```css
/* ===================================
   HERO SECTION - Seccion principal impactante
=================================== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

/* Efecto de particulas de fondo */
.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.08) 1px, transparent 0);
    background-size: 100% 100%, 100% 100%, 50px 50px;
    animation: particlesMove 20s linear infinite;
}

@keyframes particlesMove {
    0% { background-position: 0 0, 0 0, 0 0; }
    100% { background-position: 50px 50px, -50px -50px, 50px 50px; }
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

/* Contenido del hero */
.hero-content {
    z-index: 10;
}

.hero-greeting {
    font-size: 1.1rem;
    color: var(--primary-yellow);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.hero-name {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    color: var(--text-gray);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.bracket {
    color: var(--primary-yellow);
    font-weight: 700;
}

/* Efecto de cursor parpadeante */
.cursor {
    color: var(--primary-yellow);
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.hero-description {
    font-size: 1.1rem;
    color: var(--text-gray);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 600px;
}

/* Botones de accion */
.hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition-base);
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--gradient-yellow);
    color: var(--dark-bg);
    box-shadow: var(--shadow-yellow);
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-yellow-lg);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-yellow);
    border: 2px solid var(--primary-yellow);
}

.btn-secondary:hover {
    background: var(--primary-yellow);
    color: var(--dark-bg);
    transform: translateY(-3px);
}

.btn-outline {
    background: transparent;
    color: var(--text-light);
    border: 2px solid var(--text-gray);
}

.btn-outline:hover {
    border-color: var(--primary-yellow);
    color: var(--primary-yellow);
}

.btn-block {
    width: 100%;
    justify-content: center;
}

/* Enlaces sociales */
.hero-social {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 45px;
    height: 45px;
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--text-gray);
}

.social-link:hover {
    background: var(--primary-yellow);
    color: var(--dark-bg);
    border-color: var(--primary-yellow);
    transform: translateY(-5px);
    box-shadow: var(--shadow-yellow);
}

/* Imagen del hero */
.hero-image {
    position: relative;
    z-index: 10;
}

.hero-image-wrapper {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
}

.hero-image-wrapper img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
}

/* Efecto de brillo en la imagen */
.hero-image-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
    animation: glow 3s ease-in-out infinite;
    pointer-events: none;
}

@keyframes glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
}

/* Indicador de scroll */
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--text-gray);
    font-size: 0.9rem;
}

.scroll-arrow {
    margin-top: 0.5rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}
```

**QUE APRENDISTE:**
- `clamp(min, preferred, max)` - Tamano responsivo automatico
- `::before` con `left: -100%` - Efecto de brillo que recorre el boton
- `@keyframes particlesMove` - Animacion de fondo con particulas
- `radial-gradient()` - Degradados circulares para efectos de fondo
- `step-end` en animacion - Cursor que parpadea sin transicion suave

---

## PASO 2.5: Encabezados de Seccion (reutilizable)

```css
/* ===================================
   ENCABEZADOS DE SECCION
=================================== */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 50px;
    color: var(--primary-yellow);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: var(--gradient-yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-gray);
    max-width: 700px;
    margin: 0 auto;
}
```

**QUE APRENDISTE:**
- `text-transform: uppercase` - Convierte texto a mayusculas
- `letter-spacing: 1px` - Espacio entre letras
- `border-radius: 50px` - Bordes muy redondeados (pill shape)
- Gradiente en texto con `background-clip: text`

---

## PASO 2.6: About Section

```css
/* ===================================
   ABOUT SECTION - Sobre mi
=================================== */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: start;
}

/* Imagen de perfil con efecto */
.about-image-wrapper {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    max-width: 280px;
    margin: 0 auto;
}

.about-image-wrapper img {
    width: 100%;
    border-radius: var(--radius-xl);
    filter: grayscale(100%);
    transition: var(--transition-slow);
}

.about-image-wrapper:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
}

.about-image-border {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primary-yellow);
    border-radius: var(--radius-xl);
    z-index: -1;
    transition: var(--transition-base);
}

.about-image-wrapper:hover .about-image-border {
    top: 8px;
    left: 8px;
}

/* Stats rapidos */
.about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 1.5rem;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
}

.stat-item {
    text-align: center;
    padding: 1rem 0.75rem;
    background: var(--dark-secondary);
    border-radius: var(--radius-md);
    border: 1px solid var(--dark-accent);
    transition: var(--transition-base);
}

.stat-item:hover {
    border-color: var(--primary-yellow);
    transform: translateY(-5px);
    box-shadow: var(--shadow-yellow);
}

.stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-yellow);
    margin-bottom: 0.25rem;
}

.stat-label {
    display: block;
    font-size: 0.7rem;
    color: var(--text-gray);
    line-height: 1.3;
}

/* Texto sobre mi */
.about-text {
    padding-top: 1rem;
}

.about-description {
    margin-bottom: 1.5rem;
    color: var(--text-gray);
    line-height: 1.8;
}

.about-description strong {
    color: var(--primary-yellow);
    font-weight: 600;
}

/* Destacados */
.about-highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 2rem 0;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: var(--dark-secondary);
    border-radius: var(--radius-sm);
    border-left: 3px solid var(--primary-yellow);
}

.highlight-item i {
    color: var(--primary-yellow);
    font-size: 1.2rem;
}
```

**QUE APRENDISTE:**
- `filter: grayscale(100%)` - Imagen en blanco y negro
- `transform: scale(1.05)` - Zoom suave en hover
- `border-left: 3px solid` - Borde izquierdo decorativo
- Stats con hover effect y sombra amarilla

---

## PASO 2.7: Skills Section

```css
/* ===================================
   SKILLS SECTION - Habilidades tecnicas
=================================== */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: var(--transition-base);
}

.skill-category:hover {
    border-color: var(--primary-yellow);
    transform: translateY(-5px);
    box-shadow: var(--shadow-yellow);
}

.category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--dark-accent);
}

.category-header i {
    font-size: 2rem;
    color: var(--primary-yellow);
}

.category-header h3 {
    font-size: 1.3rem;
    font-weight: 700;
}

/* Items de habilidades */
.skill-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.skill-item i {
    font-size: 1.5rem;
    color: var(--primary-yellow);
    min-width: 30px;
}

.skill-item span {
    flex: 1;
    font-weight: 600;
    color: var(--text-light);
}

/* Barra de progreso */
.skill-bar {
    flex: 2;
    height: 8px;
    background: var(--dark-accent);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: var(--gradient-yellow);
    border-radius: 10px;
    width: 0;
    transition: width 1s ease-out;
    position: relative;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}
```

**QUE APRENDISTE:**
- `flex: 1` y `flex: 2` - Proporciones en flexbox
- `box-shadow` con color amarillo - Efecto glow en la barra
- `@keyframes shimmer` - Efecto de brillo que recorre la barra
- `min-width: 30px` - Ancho minimo para iconos consistentes

---

## PASO 2.8: Projects Section

```css
/* ===================================
   PROJECTS SECTION - Proyectos
=================================== */
.project-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    background: var(--dark-secondary);
    color: var(--text-gray);
    border: 1px solid var(--dark-accent);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--primary-yellow);
    color: var(--dark-bg);
    border-color: var(--primary-yellow);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

/* Tarjeta de proyecto */
.project-card {
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition-base);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-yellow);
}

.project-image {
    position: relative;
    height: 220px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

/* Overlay con enlaces */
.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: var(--transition-base);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-link {
    width: 50px;
    height: 50px;
    background: var(--primary-yellow);
    color: var(--dark-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: var(--transition-base);
}

.project-link:hover {
    transform: scale(1.2) rotate(360deg);
}

/* Badges de proyecto (Confidencial / Open Source) */
.project-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    z-index: 10;
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
    transition: var(--transition-base);
}

.project-badge i {
    font-size: 0.85rem;
}

/* Badge para proyectos privados/confidenciales */
.private-badge {
    background: rgba(239, 68, 68, 0.9);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card:hover .private-badge {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.05);
}

/* Badge para proyectos open source */
.open-badge {
    background: rgba(16, 185, 129, 0.9);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card:hover .open-badge {
    background: rgba(16, 185, 129, 1);
    transform: scale(1.05);
}

.project-content {
    padding: 1.5rem;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.project-tag {
    padding: 0.3rem 0.75rem;
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 50px;
    color: var(--primary-yellow);
    font-size: 0.75rem;
    font-weight: 600;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

.project-description {
    color: var(--text-gray);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.project-features {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.85rem;
    color: var(--text-gray);
}

.project-features i {
    color: var(--primary-yellow);
    margin-right: 0.25rem;
}
```

**QUE APRENDISTE:**
- `backdrop-filter: blur()` - Desenfoque del fondo en badges
- `transform: rotate(360deg)` - Rotacion completa en hover
- Badges con colores semanticos (rojo=privado, verde=open source)
- `object-fit: cover` - La imagen cubre el area sin deformarse

---

## PASO 2.9: Experience Timeline

```css
/* ===================================
   EXPERIENCE SECTION - Timeline
=================================== */
.timeline {
    position: relative;
    padding: 2rem 0;
}

/* Linea central del timeline */
.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--dark-accent);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
    align-items: start;
}

/* Alternar posicion izquierda/derecha */
.timeline-item:nth-child(odd) .timeline-content {
    grid-column: 1;
    text-align: right;
}

.timeline-item:nth-child(odd) .timeline-date {
    grid-column: 3;
    text-align: left;
}

.timeline-item:nth-child(even) .timeline-date {
    grid-column: 1;
    text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
    grid-column: 3;
    text-align: left;
}

/* Punto del timeline */
.timeline-dot {
    grid-column: 2;
    width: 20px;
    height: 20px;
    background: var(--primary-yellow);
    border: 4px solid var(--dark-bg);
    border-radius: 50%;
    position: relative;
    z-index: 10;
    box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.2);
}

.timeline-date {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-yellow);
    padding-top: 0.25rem;
}

.timeline-content {
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: var(--transition-base);
}

.timeline-content:hover {
    border-color: var(--primary-yellow);
    box-shadow: var(--shadow-yellow);
    transform: translateY(-5px);
}

.timeline-company h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--primary-yellow);
}

.timeline-company h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-gray);
    margin-bottom: 1rem;
}

.timeline-description {
    color: var(--text-gray);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.timeline-achievements {
    list-style: none;
    margin: 1rem 0;
}

.timeline-achievements li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-gray);
    line-height: 1.6;
}

.timeline-achievements li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary-yellow);
    font-weight: 700;
}

.timeline-tech {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.timeline-tech span {
    padding: 0.3rem 0.75rem;
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 50px;
    color: var(--primary-yellow);
    font-size: 0.75rem;
    font-weight: 600;
}
```

**QUE APRENDISTE:**
- `grid-template-columns: 1fr auto 1fr` - Tres columnas con centro fijo
- `grid-column: 1` y `grid-column: 3` - Posicionar en columnas especificas
- `:nth-child(odd/even)` - Alternar estilos entre items pares e impares
- `box-shadow: 0 0 0 4px` - Sombra sin blur para efecto de anillo

---

## PASO 2.10: Contact Section

```css
/* ===================================
   CONTACT SECTION - Formulario
=================================== */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
}

.contact-info h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.contact-text {
    color: var(--text-gray);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    gap: 1rem;
    align-items: start;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-yellow);
    font-size: 1.3rem;
    flex-shrink: 0;
}

.contact-data h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.contact-data a {
    color: var(--text-gray);
}

.contact-data a:hover {
    color: var(--primary-yellow);
}

.contact-social h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
}

.contact-social .social-links {
    display: flex;
    gap: 1rem;
}

/* Formulario */
.contact-form {
    background: var(--dark-secondary);
    border: 1px solid var(--dark-accent);
    border-radius: var(--radius-lg);
    padding: 2.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-light);
}

.form-input {
    width: 100%;
    padding: 1rem;
    background: var(--dark-bg);
    border: 1px solid var(--dark-accent);
    border-radius: var(--radius-sm);
    color: var(--text-light);
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition-base);
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-yellow);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-input::placeholder {
    color: var(--text-gray);
}

textarea.form-input {
    resize: vertical;
    min-height: 120px;
}

.form-error {
    display: block;
    color: #ff4444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
}

.form-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: var(--radius-sm);
    text-align: center;
    font-weight: 600;
    display: none;
}

.form-message.success {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #10b981;
    display: block;
}

.form-message.error {
    background: rgba(255, 68, 68, 0.1);
    border: 1px solid rgba(255, 68, 68, 0.3);
    color: #ff4444;
    display: block;
}
```

**QUE APRENDISTE:**
- `box-shadow: 0 0 0 3px` - Efecto de focus accesible
- `flex-shrink: 0` - Evita que el icono se comprima
- Mensajes de exito/error con colores semanticos
- `resize: vertical` - Solo permite redimensionar verticalmente

---

## PASO 2.11: Footer

```css
/* ===================================
   FOOTER
=================================== */
.footer {
    background: var(--dark-secondary);
    border-top: 1px solid var(--dark-accent);
    padding: 3rem 0 1.5rem;
    margin-top: 5rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-logo p {
    margin-top: 1rem;
    color: var(--text-gray);
}

.footer-links h4,
.footer-social h4 {
    margin-bottom: 1rem;
    font-weight: 700;
}

.footer-links ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.footer-links a {
    color: var(--text-gray);
}

.footer-links a:hover {
    color: var(--primary-yellow);
}

.footer-social .social-links {
    display: flex;
    gap: 1rem;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--dark-accent);
    color: var(--text-gray);
    font-size: 0.9rem;
}

.footer-bottom p {
    margin-bottom: 0.5rem;
}

.footer-bottom i {
    color: #ff4444;
}
```

**QUE APRENDISTE:**
- Grid con `minmax(250px, 1fr)` - Columnas responsivas automaticas
- `margin-top: 5rem` - Espacio entre contenido y footer
- Iconos de corazon con color diferente al tema

---

## PASO 2.12: Scroll to Top y Animaciones

```css
/* ===================================
   SCROLL TO TOP BUTTON
=================================== */
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-yellow);
    color: var(--dark-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    box-shadow: var(--shadow-yellow);
    opacity: 0;
    visibility: hidden;
    transform: translateY(100px);
    transition: var(--transition-base);
    z-index: 999;
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.scroll-to-top:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: var(--shadow-yellow-lg);
}

/* ===================================
   ANIMACIONES SCROLL REVEAL
=================================== */
.reveal, .reveal-left, .reveal-right, .reveal-scale {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal {
    transform: translateY(50px);
}

.reveal-left {
    transform: translateX(-50px);
}

.reveal-right {
    transform: translateX(50px);
}

.reveal-scale {
    transform: scale(0.9);
}

.reveal.active,
.reveal-left.active,
.reveal-right.active,
.reveal-scale.active {
    opacity: 1;
    transform: translate(0) scale(1);
}
```

**QUE APRENDISTE:**
- `transform: translateY(100px)` - Boton oculto abajo inicialmente
- `visibility: hidden` - Oculto pero conserva espacio
- `cubic-bezier(0.4, 0, 0.2, 1)` - Curva de animacion suave
- Clases `.active` agregadas por JavaScript al hacer scroll

---

## PASO 2.13: Responsive Design

```css
/* ===================================
   RESPONSIVE DESIGN - Mobile First
=================================== */

/* Tablets y dispositivos medianos (max-width: 1024px) */
@media (max-width: 1024px) {
    .container {
        padding: 0 1.5rem;
    }

    .hero-container {
        gap: 3rem;
    }

    .about-content,
    .contact-content {
        gap: 3rem;
    }

    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    /* Timeline responsivo */
    .timeline::before {
        left: 30px;
    }

    .timeline-item {
        grid-template-columns: auto 1fr;
        gap: 1.5rem;
    }

    .timeline-item:nth-child(odd) .timeline-content,
    .timeline-item:nth-child(even) .timeline-content {
        grid-column: 2;
        text-align: left;
    }

    .timeline-item:nth-child(odd) .timeline-date,
    .timeline-item:nth-child(even) .timeline-date {
        grid-column: 2;
        text-align: left;
    }

    .timeline-dot {
        grid-column: 1;
        grid-row: 1;
    }

    .timeline-date {
        grid-row: 1;
    }

    .timeline-content {
        grid-row: 2;
    }
}

/* Tablets pequenas y moviles grandes (max-width: 768px) */
@media (max-width: 768px) {
    .section {
        padding: 3rem 0;
    }

    /* Navegacion movil */
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        background: rgba(26, 26, 26, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        transition: var(--transition-base);
        box-shadow: var(--shadow-lg);
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: flex;
    }

    /* Hero responsivo */
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
    }

    .hero-content {
        order: 2;
    }

    .hero-image {
        order: 1;
    }

    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero-social {
        justify-content: center;
    }

    .hero-description {
        margin: 0 auto 2rem;
    }

    /* About responsivo */
    .about-content {
        grid-template-columns: 1fr;
    }

    .about-image-wrapper {
        max-width: 250px;
    }

    .about-stats {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        max-width: 250px;
    }

    .stat-item {
        padding: 1rem 0.5rem;
    }

    .stat-number {
        font-size: 1.5rem;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    /* Projects grid responsivo */
    .projects-grid {
        grid-template-columns: 1fr;
    }

    /* Contact responsivo */
    .contact-content {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 1.5rem;
    }

    /* Footer responsivo */
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .scroll-to-top {
        width: 45px;
        height: 45px;
        bottom: 20px;
        right: 20px;
    }
}

/* Moviles pequenos (max-width: 480px) */
@media (max-width: 480px) {
    html {
        font-size: 14px;
    }

    .container {
        padding: 0 1rem;
    }

    .hero-title {
        flex-direction: column;
        gap: 0.25rem;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .about-image-wrapper {
        max-width: 200px;
    }

    .about-stats {
        grid-template-columns: 1fr;
        max-width: 200px;
    }

    .skill-category {
        padding: 1.5rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .project-filters {
        gap: 0.5rem;
    }

    .filter-btn {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
    }

    .timeline-content {
        padding: 1.5rem;
    }
}

/* ===================================
   PRINT STYLES
=================================== */
@media print {
    .navbar,
    .hamburger,
    .theme-toggle,
    .scroll-to-top,
    .loader,
    .particles,
    .project-filters {
        display: none !important;
    }

    body {
        background: white;
        color: black;
    }

    .section {
        page-break-inside: avoid;
    }
}
```

**CSS COMPLETADO!** Abre el HTML en el navegador y veras el diseno aplicado.

**QUE APRENDISTE:**
- `@media (max-width: Xpx)` - Media queries para diferentes pantallas
- `grid-template-columns: 1fr` - Una sola columna en movil
- `order: 1` y `order: 2` - Cambiar orden de elementos en flexbox/grid
- `@media print` - Estilos para cuando se imprime la pagina

---

# FASE 3: JAVASCRIPT
## Modulos 7-10 (Interactividad)

Crea el archivo `script.js`:

---

## PASO 3.1: Loader

```javascript
/* ==========================================
   LOADER
   ========================================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            initAnimations();
        }, 500);
    }, 700);
});
```

---

## PASO 3.2: Navegacion

```javascript
/* ==========================================
   NAVEGACION
   ========================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveLink();
});

// Menu hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Cerrar menu al click en link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Actualizar link activo segun scroll
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});
```

---

## PASO 3.3: Efecto Typing

```javascript
/* ==========================================
   TYPING EFFECT
   ========================================== */
const typingElement = document.getElementById('typing-text');
const textToType = [
    'Backend Developer',
    'Software Engineer',
    'API Architect',
    'Systems Designer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textToType[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
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
```

---

## PASO 3.4: Scroll Reveal

```javascript
/* ==========================================
   SCROLL REVEAL
   ========================================== */
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

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
```

---

## PASO 3.5: Filtros de Proyectos

```javascript
/* ==========================================
   PROJECT FILTERS
   ========================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Actualizar boton activo
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const categories = card.dataset.category;

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
```

---

## PASO 3.6: Formulario de Contacto

```javascript
/* ==========================================
   CONTACT FORM
   ========================================== */
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Simular envio
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        setTimeout(() => {
            formMessage.textContent = 'Mensaje enviado correctamente!';
            formMessage.className = 'form-message success';
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';

            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }, 2000);
    }
});

function validateForm() {
    let isValid = true;
    const inputs = contactForm.querySelectorAll('.form-input');

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        error.textContent = '';

        if (!input.value.trim()) {
            error.textContent = 'Este campo es requerido';
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            error.textContent = 'Email invalido';
            isValid = false;
        }
    });

    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

---

## PASO 3.7: Theme Toggle

```javascript
/* ==========================================
   THEME TOGGLE
   ========================================== */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
```

---

## PASO 3.8: Scroll to Top

```javascript
/* ==========================================
   SCROLL TO TOP
   ========================================== */
const scrollTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

---

## PASO 3.9: Particulas

```javascript
/* ==========================================
   PARTICLES
   ========================================== */
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

createParticles();

// Agregar animacion de particulas al CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    .particle {
        animation: float linear infinite;
    }
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-10px); }
        75% { transform: translateY(-30px) translateX(5px); }
    }
`;
document.head.appendChild(style);
```

---

## PASO 3.10: Atajos de Teclado

```javascript
/* ==========================================
   KEYBOARD SHORTCUTS
   ========================================== */
document.addEventListener('keydown', (e) => {
    // Escape cierra menu movil
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Ctrl+K scroll to top
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

console.log('Portfolio cargado correctamente!');
```

---

# FELICITACIONES!

Has completado el tutorial. Ahora tienes:

- **index.html** - Estructura completa
- **styles.css** - Todos los estilos
- **script.js** - Toda la interactividad

## Para personalizar:

1. Cambia "Tu Nombre" por tu nombre real
2. Actualiza los textos de descripcion
3. Agrega tu foto en `images/perfil.jpg`
4. Modifica los proyectos con los tuyos
5. Actualiza la experiencia laboral
6. Cambia los enlaces de redes sociales

## Siguiente paso:

Compara tu version con la carpeta `portfolio-backend` original para ver si hay diferencias.

---

# Referencia Rapida

## Conceptos HTML que aprendiste:
- Estructura basica de documento
- Etiquetas semanticas (nav, section, footer)
- Formularios con validacion
- Atributos data-* personalizados
- Accesibilidad con aria-label

## Conceptos CSS que aprendiste:
- Variables CSS
- Flexbox y Grid
- Animaciones @keyframes
- Transiciones
- Pseudo-elementos ::before y ::after
- Media queries responsive
- Efectos hover

## Conceptos JavaScript que aprendiste:
- Seleccion de elementos (querySelector)
- Event listeners (click, scroll, keydown)
- Manipulacion de clases (classList)
- IntersectionObserver
- LocalStorage
- Validacion de formularios
- Animaciones dinamicas
