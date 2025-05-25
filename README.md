# Safe Play: Historia y Seguridad en los Videojuegos

Una página web informativa que combina una línea del tiempo de hitos importantes en la industria de los videojuegos con una exploración educativa de la ciberseguridad y sus principales amenazas.

## 📚 Descripción

Este proyecto tiene como objetivo educar al usuario sobre la evolución de los videojuegos, abordando además las amenazas digitales más comunes que afectan a esta industria. Está dividido en secciones bien diferenciadas, interactivas y organizadas para facilitar la navegación.

## 🛠️ Tecnologías utilizadas

- **HTML5**: estructura semántica de todo el contenido.
- **CSS**: diseño responsive, estilos visuales y animaciones básicas.
- **JavaScript**: interactividad como desplegables, quiz y efectos dinámicos.

## 🗂️ Estructura del sitio

- `index.html`: Página de inicio con presentación general.
- `historia.html`: Línea del tiempo interactiva con eventos clave desde 1958 hasta la actualidad. Cada evento se despliega al hacer clic.
- `ciberseguridad.html`: Introducción teórica a conceptos de ciberseguridad aplicados al mundo del videojuego (IA, VR, prevención).
- `Vulnerabilidades.html`: Sección sobre tipos de ataques, ejemplos reales y un quiz interactivo final.

## ⚙️ Funcionalidades desarrolladas

### 🧾 Línea del tiempo (`historia.html`)
- Cada evento está implementado como un bloque `.timeline-event` con un encabezado `<h3>` y contenido oculto `.detalle`.
- El evento se despliega al hacer clic gracias a la función `toggleDetalle()` en JavaScript.

### 🔐 Sección de ciberseguridad (`ciberseguridad.html`)
- Contenido dividido en subtemas con títulos dinámicos usando `toggleTitulo()`.
- Añadidas imágenes ilustrativas y referencias a tecnologías modernas como IA y realidad virtual.

### 🧨 Sección de vulnerabilidades (`Vulnerabilidades.html`)
- Enumeración de vulnerabilidades frecuentes y ataques históricos reales.
- Diseño en bloques `evento` con texto oculto desplegable.
- **Quiz interactivo con 6 preguntas**:
  - Muestra una pregunta a la vez.
  - Colorea la respuesta correcta/incorrecta.
  - Muestra la puntuación total al finalizar.
  - Todo gestionado con una única función `verificar()`.

## ✨ Detalles técnicos

- Toda la lógica está escrita en JavaScript, sin librerías externas.
- Se implementaron funciones reutilizables (`toggleDetalle`, `toggleTitulo`, `verificar`).


## 📁 Archivos clave

- `estilos.css`: estilos generales, tarjetas de quiz, botones interactivos.
- `script.js`: contiene las funciones de interactividad (quiz, toggle de texto, etc.).
- `README.md`: este archivo.

## 👩‍💻 Autora

Clara Fernández Castro* 
Proyecto Intermodular — 1º DAW virtual