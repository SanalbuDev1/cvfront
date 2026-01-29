# 🎨 Guía de Personalización - Santiago Alvarez

## ✅ Cambios Realizados

### 1. **Nombre Actualizado**
- ✅ "Carlos Rodríguez" → **"Santiago Alvarez"**
- ✅ Email actualizado: `santiago.alvarez.dev@example.com`
- ✅ Alt text de imágenes actualizado

---

## 📸 Cómo Agregar Tus Imágenes

### **Carpeta Creada**: `images/`

Coloca tus imágenes en la carpeta `portfolio-backend/images/` con estos nombres:

### **Imágenes Necesarias**:

| Ubicación | Nombre Sugerido | Tamaño Recomendado | Descripción |
|-----------|-----------------|-------------------|-------------|
| Hero Section | `hero-image.jpg` | 600x600px | Ilustración o foto principal |
| Sobre Mí | `perfil.jpg` | 400x400px cuadrada | Tu foto de perfil |
| Proyectos | `proyecto1.jpg` a `proyecto6.jpg` | 600x400px | Screenshots de proyectos |

---

## 🖼️ Paso a Paso para Cambiar Imágenes

### **1. Imagen Principal del Hero**

**Ubicación en HTML**: Línea ~146

**Opción A - Usar imagen local**:
```html
<img src="images/hero-image.jpg"
     alt="Santiago Alvarez - Backend Developer">
```

**Opción B - Usar URL externa**:
```html
<img src="https://tu-url.com/imagen.jpg"
     alt="Santiago Alvarez - Backend Developer">
```

**Formato recomendado**: JPG o PNG, 600x600px mínimo

---

### **2. Foto de Perfil (Sobre Mí)**

**Ubicación en HTML**: Línea ~192

**Cambiar a tu foto**:
```html
<img src="images/perfil.jpg"
     alt="Santiago Alvarez - Foto de perfil">
```

**Tips para mejor resultado**:
- ✅ Foto profesional, fondo neutro o borroso
- ✅ Tamaño: 400x400px (cuadrada)
- ✅ Formato: JPG con calidad 80-90%
- ✅ La imagen se convierte a escala de grises automáticamente
- ✅ Al pasar el mouse (hover) aparece a color

---

### **3. Imágenes de Proyectos**

**Ubicación en HTML**: Líneas ~342, 372, 402, 432, 462, 492

**Cambiar cada proyecto**:
```html
<!-- Proyecto 1: E-commerce API -->
<img src="images/proyecto1-ecommerce.jpg"
     alt="E-commerce API">

<!-- Proyecto 2: Analytics Dashboard -->
<img src="images/proyecto2-analytics.jpg"
     alt="Analytics Dashboard API">

<!-- Y así sucesivamente... -->
```

**Tamaño recomendado**: 600x400px (ratio 3:2)

---

## 🎯 Acciones Rápidas de Personalización

### **Cambiar Email Corporativo**

Buscar y reemplazar en `index.html`:
```
santiago.alvarez.dev@example.com
→ tu-email-real@dominio.com
```

### **Cambiar Teléfono**

Línea ~652 en `index.html`:
```html
<a href="tel:+34612345678">+34 612 345 678</a>
```

### **Cambiar Ubicación**

Línea ~664 en `index.html`:
```html
<p>Tu Ciudad, Tu País</p>
```

### **Cambiar Enlaces Sociales**

Buscar y reemplazar en `index.html`:

```html
<!-- GitHub -->
https://github.com → https://github.com/santiagoalvarez

<!-- LinkedIn -->
https://linkedin.com → https://linkedin.com/in/santiago-alvarez

<!-- Twitter -->
https://twitter.com → https://twitter.com/tu-usuario
```

---

## 🔧 Personalización Avanzada

### **Cambiar Títulos del Efecto Typing**

Archivo: `script.js` - Línea 88

```javascript
const textToType = [
    'Backend Developer',       // ← Cambiar por tus títulos
    'Software Engineer',
    'API Architect',
    'Systems Designer'
];
```

**Sugerencias**:
- Full Stack Developer
- Cloud Solutions Architect
- DevOps Engineer
- Microservices Specialist
- Database Expert

### **Cambiar Descripción Principal**

Línea ~84 en `index.html`:

```html
<p class="hero-description">
    Especializado en construir APIs robustas, sistemas escalables...
    <!-- ← Personalizar con tu descripción -->
</p>
```

### **Actualizar Biografía**

Líneas ~237-250 en `index.html`:

```html
<p class="about-description">
    Soy un <strong>Desarrollador Backend</strong> con más de...
    <!-- ← Escribir tu propia biografía -->
</p>
```

---

## 📊 Actualizar Stats (Estadísticas)

Línea ~197-209 en `index.html`:

```html
<div class="stat-item">
    <span class="stat-number">5+</span>        <!-- ← Tus años -->
    <span class="stat-label">Años de Experiencia</span>
</div>
<div class="stat-item">
    <span class="stat-number">50+</span>       <!-- ← Tus proyectos -->
    <span class="stat-label">Proyectos Completados</span>
</div>
<div class="stat-item">
    <span class="stat-number">30+</span>       <!-- ← Tus clientes -->
    <span class="stat-label">Clientes Satisfechos</span>
</div>
```

---

## 🎨 Herramientas para Preparar Imágenes

### **Editores Online Gratis**:
1. **Photopea** (https://photopea.com) - Clon de Photoshop gratis
2. **Canva** (https://canva.com) - Para diseñar mockups
3. **Remove.bg** (https://remove.bg) - Quitar fondo de fotos

### **Optimizar Imágenes**:
1. **TinyPNG** (https://tinypng.com) - Comprimir sin perder calidad
2. **Squoosh** (https://squoosh.app) - Optimizador de Google

### **Redimensionar**:
1. **Image Resizer** (https://imageresizer.com)
2. **Bulk Resize Photos** (https://bulkresizephotos.com)

---

## 📋 Checklist de Personalización

```
☐ Cambiar nombre (✅ Ya hecho: Santiago Alvarez)
☐ Actualizar email principal
☐ Agregar foto de perfil (images/perfil.jpg)
☐ Agregar imagen hero (images/hero-image.jpg)
☐ Actualizar teléfono
☐ Actualizar ubicación
☐ Cambiar URLs de redes sociales (GitHub, LinkedIn, Twitter)
☐ Personalizar biografía
☐ Actualizar estadísticas (años, proyectos, clientes)
☐ Cambiar títulos del typing effect
☐ Agregar imágenes de proyectos reales
☐ Actualizar descripción de proyectos
☐ Personalizar experiencia laboral
☐ Revisar skills (añadir/quitar según tu expertise)
```

---

## 🚀 Ejemplo de Estructura de Imágenes

```
portfolio-backend/
│
├── index.html
├── styles.css
├── script.js
├── README.md
├── GUIA-PERSONALIZACION.md (este archivo)
│
└── images/
    ├── perfil.jpg                    (400x400px)
    ├── hero-image.jpg                (600x600px)
    ├── proyecto1-ecommerce.jpg       (600x400px)
    ├── proyecto2-analytics.jpg       (600x400px)
    ├── proyecto3-reservas.jpg        (600x400px)
    ├── proyecto4-social.jpg          (600x400px)
    ├── proyecto5-payment.jpg         (600x400px)
    └── proyecto6-tasks.jpg           (600x400px)
```

---

## 💡 Tips Profesionales

### **Para la Foto de Perfil**:
1. Usa buena iluminación natural
2. Fondo neutro o borroso (desenfocado)
3. Viste profesional
4. Sonrisa natural
5. Exporta en alta calidad (JPG 90%)

### **Para Screenshots de Proyectos**:
1. Usa mockups profesionales (placeit.net, mockuphone.com)
2. Añade contexto (navegador, dispositivo)
3. Muestra el proyecto en acción
4. Usa colores atractivos
5. Mantén consistencia en el estilo

### **Para la Imagen Hero**:
1. Puede ser ilustración abstracta de código
2. O una foto profesional tuya
3. O visualización de arquitectura backend
4. Mantén el aspecto cuadrado o panorámico

---

## 🎯 Próximos Pasos

1. ✅ **Nombre cambiado**: Santiago Alvarez
2. 📸 **Agrega tus imágenes** en la carpeta `images/`
3. ✏️ **Personaliza textos** siguiendo esta guía
4. 🔗 **Actualiza enlaces** de redes sociales
5. 🚀 **¡Publica tu portafolio!**

---

## 📧 ¿Necesitas Ayuda?

Si tienes dudas sobre cómo personalizar algo específico, pregúntame:
- Cómo cambiar colores
- Cómo añadir/quitar secciones
- Cómo optimizar imágenes
- Cómo cambiar animaciones
- ¡Lo que necesites!

---

**¡Tu portafolio está listo para brillar! 🌟**
