# 📐 Cómo Funciona el Diseño Horizontal en CSS

## 🎯 Conceptos Básicos

### Elementos por Defecto:
- **BLOQUE** (`<div>`, `<section>`, `<ul>`, `<li>`): Se apilan **VERTICALMENTE** ⬇️
- **EN LÍNEA** (`<span>`, `<a>`): Se colocan **HORIZONTALMENTE** ➡️

Para convertir elementos de bloque en horizontales, usamos:

---

## 1️⃣ FLEXBOX - `display: flex`

### 📦 Convierte elementos en una fila/columna flexible

```css
.contenedor {
    display: flex;                    /* Activa Flexbox */
    flex-direction: row;              /* row = horizontal ➡️ | column = vertical ⬇️ */
    gap: 1rem;                        /* Espacio entre elementos */
    justify-content: space-between;   /* Distribución horizontal */
    align-items: center;              /* Alineación vertical */
}
```

### 🔄 Cambiar dirección:
- `flex-direction: row` → **Horizontal** (por defecto)
- `flex-direction: column` → **Vertical**

### Ejemplo en tu código:
```css
/* MÓVIL: Navegación vertical */
.nav-menu ul {
    display: flex;
    flex-direction: column;  /* ⬇️ Vertical */
}

/* TABLET: Navegación horizontal */
@media (min-width: 768px) {
    .nav-menu ul {
        flex-direction: row;  /* ➡️ Horizontal */
    }
}
```

---

## 2️⃣ GRID - `display: grid`

### 🎨 Sistema de cuadrícula bidimensional (filas + columnas)

```css
.contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 columnas iguales */
    gap: 2rem;                           /* Espacio entre celdas */
}
```

### 📊 Definir columnas:

| Código | Resultado |
|--------|-----------|
| `1fr` | **1 columna** = TODO vertical |
| `repeat(2, 1fr)` | **2 columnas** = 2 elementos lado a lado |
| `repeat(3, 1fr)` | **3 columnas** = 3 elementos lado a lado |
| `repeat(auto-fit, minmax(250px, 1fr))` | **Automático** - Crea columnas según el espacio |

### Ejemplo en tu código:
```css
/* MÓVIL: 1 columna (vertical) */
.project-grid {
    display: grid;
    grid-template-columns: 1fr;  /* 1 columna ⬇️ */
}

/* TABLET: 2 columnas (horizontal) */
@media (min-width: 768px) {
    .project-grid {
        grid-template-columns: repeat(2, 1fr);  /* 2 columnas ➡️ */
    }
}

/* DESKTOP: 3 columnas (horizontal) */
@media (min-width: 1024px) {
    .project-grid {
        grid-template-columns: repeat(3, 1fr);  /* 3 columnas ➡️ */
    }
}
```

---

## 🚀 Resumen Visual

### Vertical (1 columna):
```
┌─────────────┐
│ Elemento 1  │
├─────────────┤
│ Elemento 2  │
├─────────────┤
│ Elemento 3  │
└─────────────┘
```

### Horizontal (3 columnas con Grid):
```
┌──────┬──────┬──────┐
│ Ele1 │ Ele2 │ Ele3 │
└──────┴──────┴──────┘
```

---

## ⚡ Cuándo Usar Cada Uno

| Flexbox | Grid |
|---------|------|
| Navegación horizontal | Galerías de imágenes |
| Botones en línea | Layouts de tarjetas |
| Una dimensión (fila O columna) | Dos dimensiones (filas Y columnas) |
| Más simple y flexible | Más control preciso |

---

## 🎓 En Tu Portafolio:

1. **Navegación** → Flexbox (`flex-direction: row` en desktop)
2. **Habilidades** → Grid (1 col móvil → 2 cols tablet → auto desktop)
3. **Proyectos** → Grid (1 col móvil → 2 cols tablet → 3 cols desktop)

✅ **Mobile First**: Empieza vertical (1 columna), luego horizontal en pantallas grandes
