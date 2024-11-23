document.addEventListener("DOMContentLoaded", function () {
    // Obtén los enlaces del menú
    const inicioLink = document.getElementById("inicio");
    const acercaDeMiLink = document.getElementById("acerca-de-mi");
    const acercaDeLaMateriaLink = document.getElementById("acerca-de-la-materia");
    const fuentesLink = document.getElementById("fuentes"); // Aquí se obtiene el enlace para "Fuentes"

    // Obtén las secciones
    const bienvenidaSection = document.getElementById("bienvenida");
    const miInfoSection = document.getElementById("mi-info");
    const infoMateriaSection = document.getElementById("info-materia");
    const fuentesSection = document.getElementById("fuentes"); // Sección de "Fuentes"
    const conceptosBasicosLinks = document.querySelectorAll(".submenu a");

    // Función para ocultar todas las secciones
    function ocultarTodasLasSecciones() {
        const sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            section.classList.add('hidden');
        });
    }

    // Mostrar solo la sección de bienvenida (inicio)
    inicioLink.addEventListener("click", function (event) {
        event.preventDefault();
        ocultarTodasLasSecciones();
        bienvenidaSection.classList.remove("hidden");
    });

    // Mostrar solo la sección "Acerca de mí"
    acercaDeMiLink.addEventListener("click", function (event) {
        event.preventDefault();
        ocultarTodasLasSecciones();
        miInfoSection.classList.remove("hidden");
    });

    // Mostrar solo la sección "Acerca de la materia"
    acercaDeLaMateriaLink.addEventListener("click", function (event) {
        event.preventDefault();
        ocultarTodasLasSecciones();
        infoMateriaSection.classList.remove("hidden");
    });

    // Mostrar la sección "Fuentes de información"
    fuentesLink.addEventListener("click", function (event) {
        event.preventDefault();
        ocultarTodasLasSecciones();
        fuentesSection.classList.remove("hidden"); // Asegúrate de mostrar la sección
    });

    // Mostrar las secciones de conceptos básicos al hacer clic en ellas
    conceptosBasicosLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            ocultarTodasLasSecciones();
            // Obtener el id de la sección desde el atributo href
            const sectionId = link.getAttribute('href').substring(1); // Eliminar '#'
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.remove('hidden');
            }
        });
    });

    // Muestra la sección "Bienvenida" por defecto
    bienvenidaSection.classList.remove("hidden");
});
fuentesLink.addEventListener("click", function (event) {
    event.preventDefault();  // Esto previene que la URL cambie
    ocultarTodasLasSecciones();
    fuentesSection.classList.remove("hidden"); // Asegúrate de mostrar la sección
});
