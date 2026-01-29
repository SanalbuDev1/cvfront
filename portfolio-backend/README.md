# 🚀 Backend Developer Portfolio

Portafolio profesional y elegante para desarrolladores backend, diseñado con una paleta de colores amarillo/dorado y tonos oscuros, con animaciones modernas y funcionalidades interactivas.

## ✨ Características Principales

### 🎨 Diseño y Estética
- **Paleta de colores elegante**: Amarillos (#FFD700, #FFC700, #FFEB3B) con tonos oscuros (#1a1a1a, #2d2d2d, #404040)
- **Diseño minimalista y moderno**: Espaciado generoso y tipografía profesional (Inter, Poppins)
- **Efectos visuales sutiles**: Gradientes, sombras elegantes y transiciones suaves
- **Modo oscuro/claro**: Toggle entre temas con persistencia en localStorage

### ⚡ Loader de Pantalla
- **Duración exacta de 0.7 segundos**
- Spinner circular con colores amarillos
- Transición suave al contenido principal
- Animación de puntos suspensivos

### 📱 Secciones del Portafolio

#### 1. **Hero Section**
- Nombre con efecto gradiente
- Efecto de escritura (typing) rotando entre títulos profesionales
- Descripción breve y impactante
- Botones CTA con animaciones
- Enlaces a redes sociales
- Efecto parallax con el mouse
- Partículas animadas de fondo

#### 2. **Sobre Mí**
- Foto de perfil con efecto hover (blanco y negro → color)
- Biografía profesional
- Stats rápidos (años de experiencia, proyectos, clientes)
- Highlights de habilidades con iconos
- Botón de descarga de CV

#### 3. **Skills Técnicos**
- Grid de 6 categorías de habilidades:
  - Lenguajes de programación
  - Frameworks
  - Bases de datos
  - DevOps & Cloud
  - APIs & Protocolos
  - Herramientas
- Barras de progreso animadas
- Iconos de Font Awesome
- Efecto hover en cada categoría

#### 4. **Proyectos**
- Sistema de filtros por tecnología
- 6 proyectos de ejemplo con:
  - Imagen con overlay al hover
  - Tags de tecnologías usadas
  - Descripción del proyecto
  - Features destacadas
  - Enlaces a GitHub y demo
- Animaciones de entrada y filtrado

#### 5. **Experiencia Laboral**
- Timeline vertical responsivo
- 4 posiciones laborales con:
  - Empresa y cargo
  - Período de trabajo
  - Descripción y logros
  - Tecnologías utilizadas
- Alternancia izquierda/derecha en desktop

#### 6. **Contacto**
- Información de contacto con iconos
- Formulario funcional con validación:
  - Nombre completo
  - Email (validación de formato)
  - Asunto
  - Mensaje (mínimo 10 caracteres)
- Mensajes de error y éxito
- Enlaces a redes sociales
- Efecto de copiar email al clipboard

### 🎭 Efectos y Animaciones

1. **Scroll Animations**:
   - Fade in desde abajo
   - Slide desde izquierda/derecha
   - Scale en tarjetas
   - Intersection Observer para performance

2. **Hover Effects**:
   - Botones con brillo deslizante
   - Cards que se elevan
   - Iconos con transiciones
   - Enlaces con subrayado animado

3. **Micro-interacciones**:
   - Efecto parallax en hero
   - Partículas flotantes
   - Cursor parpadeante en typing effect
   - Smooth scroll entre secciones

### 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Variables CSS para sistema de diseño
  - Flexbox y Grid
  - Animaciones con @keyframes
  - Media queries (Mobile First)
- **JavaScript Vanilla**:
  - Intersection Observer API
  - LocalStorage API
  - Clipboard API
  - Event Listeners optimizados

### 📱 Responsive Design

- **Mobile First**: Optimizado para todos los dispositivos
- **Breakpoints**:
  - 320px: Móviles pequeños
  - 480px: Móviles
  - 768px: Tablets
  - 1024px: Tablets grandes
  - 1440px: Desktop
- **Menú hamburguesa** elegante en móvil
- Timeline adaptativo en pantallas pequeñas

### 🚀 Funcionalidades JavaScript

1. **Loader**: Pantalla de carga de 0.7s exactos
2. **Typing Effect**: Rotación de títulos profesionales
3. **Smooth Scroll**: Navegación fluida entre secciones
4. **Navbar**:
   - Scroll spy (detecta sección activa)
   - Cambio de estilo al hacer scroll
   - Menú responsive con hamburguesa
5. **Scroll Reveal**: Animaciones al entrar elementos al viewport
6. **Skills Bars**: Barras de progreso animadas
7. **Project Filters**: Filtrado dinámico de proyectos
8. **Form Validation**: Validación completa del formulario
9. **Theme Toggle**: Cambio entre modo oscuro/claro
10. **Scroll to Top**: Botón flotante para volver arriba
11. **Parallax Effect**: Movimiento con el mouse en hero
12. **Copy to Clipboard**: Copiar email con tooltip

### 🎯 Paleta de Colores

```css
/* Amarillos */
--primary-yellow: #FFD700
--secondary-yellow: #FFC700
--accent-yellow: #FFEB3B

/* Oscuros */
--dark-bg: #1a1a1a
--dark-secondary: #2d2d2d
--dark-accent: #404040

/* Textos */
--text-light: #ffffff
--text-gray: #a0a0a0
```

### 📁 Estructura de Archivos

```
portfolio-backend/
│
├── index.html          # Página principal
├── styles.css          # Estilos completos
├── script.js           # JavaScript funcional
└── README.md          # Documentación
```

## 🛠️ Instalación y Uso

### Opción 1: Apertura Directa
1. Descarga los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo!

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

## ✏️ Personalización

### Cambiar Información Personal

1. **index.html**:
   - Línea 58: Nombre
   - Línea 84: Descripción
   - Línea 237-240: Biografía
   - Enlaces sociales en múltiples secciones

2. **script.js**:
   - Línea 88: Títulos del efecto typing
   - Línea 524-527: Mensaje de consola

3. **styles.css**:
   - Líneas 16-24: Cambiar paleta de colores
   - Personalizar tamaños, espaciados, etc.

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-yellow: #TU_COLOR;
    --dark-bg: #TU_COLOR;
    /* etc... */
}
```

### Añadir Proyectos

Copia y pega un bloque `.project-card` en `index.html` y modifica:
- Imagen (src)
- Tags de tecnologías
- Título y descripción
- Enlaces (GitHub, demo)
- Atributo `data-category` para filtros

### Integrar Backend Real

En `script.js`, función `sendForm()` (línea 218):

```javascript
// Reemplazar con tu endpoint
const response = await fetch('TU_API_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🎨 Personalización Avanzada

### Cambiar Efecto de Partículas
Edita la función `createParticles()` en `script.js`:
- Línea 316: Número de partículas
- Línea 319-324: Tamaño y color

### Modificar Velocidad del Typing
En `script.js`, línea 96:
```javascript
let typingSpeed = 150; // Cambiar velocidad
```

### Ajustar Duración del Loader
En `script.js`, línea 15:
```javascript
setTimeout(function() {
    // ...
}, 700); // Cambiar tiempo en ms
```

## 📊 SEO y Performance

- Meta tags incluidos
- Semántica HTML5
- Lazy loading de imágenes
- Debouncing en scroll events
- Animaciones optimizadas con Intersection Observer
- CSS y JS minificables para producción

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📝 Licencia

Este proyecto es de uso libre. Puedes usarlo, modificarlo y distribuirlo como desees.

## 👨‍💻 Autor

Portafolio creado con ❤️ para desarrolladores backend que quieren destacar.

## 🤝 Contribuciones

¿Encontraste un bug o tienes una sugerencia?
- Abre un issue
- Envía un pull request
- Comparte tu versión personalizada

## 📧 Contacto

¿Preguntas? ¿Necesitas ayuda con la personalización?

- Email: tu@email.com
- GitHub: github.com/tu-usuario
- LinkedIn: linkedin.com/in/tu-usuario

---

**¡Hecho con 💛 y mucho ☕!**
