# Página Web Personal de Diego Cesar Lerma Torres

Este proyecto es una página web personal diseñada para presentar mi currículum, proyectos destacados y permitir a los visitantes contactarme para consultas o servicios de consultoría en tecnología aplicada al sector salud.

## Contenidos

- [Página Web Personal de Diego Cesar Lerma Torres](#página-web-personal-de-diego-cesar-lerma-torres)
  - [Contenidos](#contenidos)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Buenas Prácticas](#buenas-prácticas)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
    - [Accesibilidad](#accesibilidad)
    - [SEO](#seo)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Instalación

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Abrir el proyecto:**

   Puedes abrir el proyecto en tu editor de texto favorito, como Visual Studio Code.

3. **Iniciar un servidor local:**

   Puedes usar extensiones como "Live Server" en Visual Studio Code para ver el sitio en un navegador.

## Uso

1. **Navegar a la URL local:**

   Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:5500` (o el puerto que estés utilizando).

2. **Interactuar con la página:**

   - Navega por las secciones del sitio: Sobre Mí, Formación Académica, Experiencia Profesional, Proyectos Destacados y Contacto.
   - Usa el formulario de contacto para enviar mensajes.

## Estructura del Proyecto
├── index.html
├── styles.css
├── scripts.js
├── logo.png
├── health-gpt.png
├── triagegto.jpg
└── README.md


- **index.html**: El archivo principal HTML.
- **styles.css**: Estilos CSS personalizados.
- **scripts.js**: Lógica JavaScript para la interactividad del sitio.
- **logo.png**: Logo utilizado como favicon y en el encabezado.
- **health-gpt.png**, **triagegto.jpg**: Imágenes de proyectos destacados.

## Buenas Prácticas

### HTML

- **Estructura Semántica**: Usa etiquetas HTML semánticas como `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, etc., para mejorar la accesibilidad y SEO.
- **Validación**: Asegúrate de que el HTML sea válido utilizando herramientas como el validador de W3C.

### CSS

- **Organización**: Mantén el CSS organizado utilizando comentarios para secciones y propiedades agrupadas por funcionalidad.
- **Reutilización**: Usa clases reutilizables y evita el uso excesivo de identificadores y selectores específicos.
- **Responsive Design**: Usa media queries para asegurar que el sitio se vea bien en dispositivos de diferentes tamaños.

### JavaScript

- **Modularidad**: Divide el código JavaScript en funciones pequeñas y reutilizables.
- **Eventos**: Usa `addEventListener` para manejar eventos en lugar de atributos HTML.
- **Buenas Prácticas de Coding**: Usa `const` y `let` en lugar de `var`, y sigue las convenciones de nombres (camelCase para variables y funciones).

### Accesibilidad

- **Etiquetas ARIA**: Usa etiquetas ARIA para mejorar la accesibilidad.
- **Contraste de Color**: Asegúrate de que haya suficiente contraste entre el texto y el fondo.
- **Navegación por Teclado**: Asegúrate de que el sitio sea completamente navegable utilizando solo el teclado.

### SEO

- **Metadatos**: Incluye etiquetas `<title>`, `<meta>`, `<link>`, etc., para mejorar el SEO.
- **Texto Alternativo**: Proporciona texto alternativo descriptivo para todas las imágenes.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commitea (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
