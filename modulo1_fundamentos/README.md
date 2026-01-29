# 📱 Ejercicio 1: Sección de Contacto con Mobile-First

## 📋 Descripción del Ejercicio

Este ejercicio demuestra la implementación de un **diseño responsive usando el enfoque Mobile-First** para una sección de contacto que incluye:

- ✅ Formulario de contacto
- ✅ Mapa embebido (iframe de Google Maps)
- ✅ Información de contacto adicional
- ✅ Layout adaptable: 1 columna (móvil) → 2 columnas (desktop)

---

## 🎯 Objetivos de Aprendizaje

1. **Entender el enfoque Mobile-First**
2. **Usar Flexbox para layouts responsive**
3. **Implementar iframes fluidos (responsive)**
4. **Trabajar con media queries `min-width`**
5. **Crear formularios accesibles y usables**

---

## 🏗️ Estructura del Proyecto

```
modulo1/
├── index.html          # Estructura HTML del ejercicio
├── estilos.css         # Estilos CSS con enfoque mobile-first
└── README.md           # Esta documentación
```

---

## 📐 Concepto: Mobile-First

### ¿Qué es Mobile-First?

**Mobile-First** es una metodología de diseño donde:

1. **Primero** diseñas para dispositivos móviles (pantallas pequeñas)
2. **Después** añades estilos adicionales para pantallas más grandes

### ¿Por qué Mobile-First?

✅ **Rendimiento**: Los móviles cargan menos CSS por defecto  
✅ **Simplicidad**: Es más fácil añadir complejidad que quitarla  
✅ **Priorización**: Te obliga a enfocarte en lo esencial  
✅ **Estadísticas**: La mayoría del tráfico web es móvil  

### Mobile-First vs Desktop-First

```css
/* ❌ DESKTOP-FIRST (No recomendado) */
.contenedor {
    display: flex; /* Desktop por defecto */
}

@media (max-width: 768px) {
    .contenedor {
        display: block; /* Sobreescribir para móvil */
    }
}

/* ✅ MOBILE-FIRST (Recomendado) */
.contenedor {
    display: block; /* Móvil por defecto */
}

@media (min-width: 768px) {
    .contenedor {
        display: flex; /* Añadir para desktop */
    }
}
```

---

## 🔧 Implementación Técnica

### 1. HTML: Estructura Semántica

```html
<div class="contacto-contenedor">
    <div class="formulario-wrapper">
        <!-- Formulario aquí -->
    </div>
    <div class="mapa-wrapper">
        <!-- Mapa aquí -->
    </div>
</div>
```

**Características:**
- Contenedor padre (`contacto-contenedor`) que controla el layout
- Dos secciones hijas: formulario y mapa
- Estructura clara y semántica

---

### 2. CSS: Estilos Mobile-First

#### **Paso 1: Estilos Base (Móvil)**

```css
/* Por defecto: una columna */
.contacto-contenedor {
    display: block; /* Comportamiento natural */
}

.formulario-wrapper,
.mapa-wrapper {
    width: 100%; /* Ocupan todo el ancho */
    margin-bottom: 1.5rem; /* Espacio entre secciones */
}
```

**En móvil:**
- Los elementos se apilan verticalmente de forma natural
- Cada sección ocupa el 100% del ancho disponible
- El formulario aparece primero, luego el mapa

#### **Paso 2: Media Query para Desktop**

```css
/* Pantallas ≥ 768px: dos columnas */
@media screen and (min-width: 768px) {
    .contacto-contenedor {
        display: flex; /* Activamos Flexbox */
        flex-direction: row; /* Elementos en fila */
        gap: 2rem; /* Espacio entre columnas */
    }

    .formulario-wrapper,
    .mapa-wrapper {
        flex: 1; /* Ambos ocupan el mismo espacio (50%) */
        margin-bottom: 0; /* Ya no necesitan margin inferior */
    }
}
```

**En desktop:**
- Flexbox coloca los elementos lado a lado
- `flex: 1` hace que ambos ocupen el mismo espacio (50% cada uno)
- `gap: 2rem` crea espacio entre las columnas

---

### 3. Iframe Fluido (Responsive)

#### El Problema

Los iframes tienen un ancho y alto fijos por defecto:

```html
<iframe width="600" height="450"></iframe>
```

Esto **no es responsive** y se desborda en móviles.

#### La Solución: Padding-Bottom Trick

```css
.mapa-responsive {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.mapa-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

**Cómo funciona:**

1. **Contenedor** (`mapa-responsive`):
   - `position: relative` → Contexto de posicionamiento
   - `padding-bottom: 56.25%` → Altura basada en porcentaje del ancho
   - `height: 0` → No tiene altura propia
   - El padding crea el espacio vertical

2. **Iframe**:
   - `position: absolute` → Se coloca sobre el padding del contenedor
   - `width: 100%` y `height: 100%` → Llena todo el espacio

3. **Aspect Ratio**: El padding-bottom define la proporción:
   - 16:9 = 9÷16 = 0.5625 = **56.25%**
   - 4:3 = 3÷4 = 0.75 = **75%**

**HTML:**

```html
<div class="mapa-responsive">
    <iframe src="..."></iframe>
</div>
```

---

## 📊 Breakpoints Utilizados

| Breakpoint | Dispositivo | Layout |
|------------|-------------|--------|
| < 768px | Móviles | 1 columna (vertical) |
| ≥ 768px | Tablets | 2 columnas (horizontal) |
| ≥ 1200px | Desktop | 2 columnas (más espaciado) |

---

## 🎨 Flexbox: Conceptos Clave

### Propiedades del Contenedor

```css
.contacto-contenedor {
    display: flex;           /* Activa Flexbox */
    flex-direction: row;     /* Dirección horizontal */
    gap: 2rem;               /* Espacio entre hijos */
    align-items: flex-start; /* Alineación vertical */
}
```

### Propiedades de los Hijos

```css
.formulario-wrapper,
.mapa-wrapper {
    flex: 1; /* Shorthand para flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}
```

**`flex: 1` significa:**
- `flex-grow: 1` → Puede crecer para llenar el espacio disponible
- `flex-shrink: 1` → Puede encogerse si es necesario
- `flex-basis: 0` → Tamaño base es 0, el espacio se distribuye equitativamente

**Resultado:** Ambos elementos ocupan el 50% del espacio disponible.

---

## 🔍 Análisis del Flujo de Trabajo

### 1. **Móvil (< 768px)**

```
┌─────────────────────┐
│                     │
│    FORMULARIO       │
│                     │
├─────────────────────┤
│                     │
│      MAPA           │
│                     │
└─────────────────────┘
```

- Display: `block` (natural)
- Ancho: 100% cada uno
- Se apilan verticalmente

### 2. **Desktop (≥ 768px)**

```
┌──────────────┬──────────────┐
│              │              │
│  FORMULARIO  │     MAPA     │
│              │              │
└──────────────┴──────────────┘
```

- Display: `flex`
- Ancho: 50% cada uno (con `flex: 1`)
- Lado a lado con espacio entre ellos (`gap: 2rem`)

---

## 🎓 Conceptos Importantes

### 1. **Box-Sizing: Border-Box**

```css
* {
    box-sizing: border-box;
}
```

**Sin border-box:**
```
width = 300px
padding = 20px (cada lado)
Total = 300 + 20 + 20 = 340px 😵
```

**Con border-box:**
```
width = 300px (incluye padding)
padding = 20px (cada lado)
Total = 300px ✅
```

### 2. **Inputs Fluidos**

```css
input, textarea {
    width: 100%; /* Se adapta al contenedor */
}
```

Siempre usa `width: 100%` en lugar de anchos fijos para formularios responsive.

### 3. **Viewport Meta Tag**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Esencial** para que el responsive funcione en móviles:
- `width=device-width` → Usa el ancho real del dispositivo
- `initial-scale=1.0` → Zoom inicial al 100%

---

## ✨ Mejoras Implementadas

### 1. **Accesibilidad**

- ✅ Labels asociados a inputs (`for="id"`)
- ✅ Atributos `required` en campos obligatorios
- ✅ Placeholders descriptivos
- ✅ Título en el iframe (`title="..."`)

### 2. **UX/UI**

- ✅ Estados hover y focus con transiciones suaves
- ✅ Validación visual (colores para inputs válidos/inválidos)
- ✅ Botón de envío destacado con gradiente
- ✅ Animaciones sutiles al cargar

### 3. **Performance**

- ✅ `loading="lazy"` en iframe → Carga diferida
- ✅ CSS mobile-first → Menos código para móviles
- ✅ Transiciones solo en propiedades específicas

---

## 🚀 Cómo Probar el Ejercicio

### Método 1: Abrir el archivo directamente

1. Abre `index.html` en tu navegador
2. Redimensiona la ventana para ver los cambios

### Método 2: DevTools (Recomendado)

1. Abre el archivo en Chrome/Firefox
2. Presiona `F12` para abrir DevTools
3. Haz clic en el icono de **"Toggle device toolbar"** (📱)
4. Prueba diferentes dispositivos:
   - iPhone 12/13 (390px)
   - iPad (768px)
   - Desktop (1920px)

### Método 3: Live Server (VS Code)

1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abre en el navegador con auto-refresh

---

## 📝 Ejercicios Adicionales

### Nivel Básico

1. **Cambiar los colores**: Modifica el gradiente del header y botones
2. **Añadir un campo**: Agrega un campo "Empresa" al formulario
3. **Cambiar el breakpoint**: Prueba con `min-width: 600px` o `900px`

### Nivel Intermedio

4. **Tres columnas en desktop grande**: Añade una tercera sección (ej: horarios)
5. **Aspect ratio diferente**: Cambia el mapa a 1:1 (cuadrado) en móvil
6. **Estilos de error**: Crea mensajes de error personalizados

### Nivel Avanzado

7. **Validación JavaScript**: Valida el formulario antes de enviar
8. **Múltiples breakpoints**: Añade un breakpoint para tablets en horizontal
9. **Dark mode**: Implementa un tema oscuro con media query `prefers-color-scheme`

---

## 🐛 Problemas Comunes y Soluciones

### El layout no cambia en desktop

**Problema:** La media query no se aplica.

**Soluciones:**
- ✅ Verifica que tengas el meta viewport en el HTML
- ✅ Asegúrate de que el archivo CSS está enlazado correctamente
- ✅ Revisa la consola del navegador por errores de sintaxis CSS

### El iframe no es responsive

**Problema:** El iframe se desborda en móvil.

**Solución:**
- ✅ Asegúrate de usar el contenedor `.mapa-responsive`
- ✅ No pongas atributos `width` o `height` en el iframe HTML
- ✅ Usa `style="border:0;"` en lugar de atributos de tamaño

### Los inputs se ven muy pequeños en móvil

**Problema:** iOS hace zoom automático en inputs < 16px.

**Solución:**
```css
input {
    font-size: 16px; /* Mínimo para evitar zoom en iOS */
}
```

---

## 📚 Recursos Adicionales

### Documentación

- [MDN - Responsive Design](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN - Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Herramientas

- [Responsively App](https://responsively.app/) - Prueba múltiples dispositivos a la vez
- [Am I Responsive?](http://ami.responsivedesign.is/) - Vista previa en varios dispositivos
- [Aspect Ratio Calculator](https://andrew.hedges.name/experiments/aspect_ratio/) - Calcula padding-bottom

### Generadores

- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed) - Genera códigos de mapas
- [Gradient Generator](https://cssgradient.io/) - Crea gradientes CSS

---

## ✅ Checklist de Aprendizaje

Marca lo que has entendido:

- [ ] Entiendo el concepto de Mobile-First
- [ ] Sé usar `display: flex` para layouts
- [ ] Comprendo las media queries con `min-width`
- [ ] Puedo hacer iframes fluidos con padding-bottom
- [ ] Entiendo la propiedad `flex` y sus valores
- [ ] Sé hacer formularios responsive
- [ ] Puedo aplicar box-sizing: border-box
- [ ] Entiendo la diferencia entre `gap` y `margin`

---

## 🎉 Conclusión

Este ejercicio te ha enseñado:

1. ✅ **Mobile-First**: Diseñar primero para móvil, luego expandir
2. ✅ **Flexbox**: Crear layouts flexibles con `display: flex`
3. ✅ **Media Queries**: Adaptar estilos según el tamaño de pantalla
4. ✅ **Iframes Fluidos**: Técnica padding-bottom para contenido embebido
5. ✅ **Formularios Responsive**: Inputs y botones que se adaptan

**Siguiente paso:** Practica creando tus propias secciones responsive usando estos conceptos. ¡Experimenta y diviértete! 🚀

---

**Autor:** Ejercicio de Maquetación Web  
**Fecha:** Diciembre 2025  
**Nivel:** Principiante - Intermedio  
**Tiempo estimado:** 2-3 horas
