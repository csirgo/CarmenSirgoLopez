var body;
var modeIcon;

// Botones seccion principal
document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.social');
    const modeBtn = document.getElementById('mode');
    body = document.body;
    modeIcon = document.getElementById('mode-icon');

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.setAttribute("data-theme", currentTheme);
        modeIcon.src = currentTheme === "dark" ? "resources/sun.png" : "resources/moon.png";
    }

    imagenes.forEach(function (imagen) {
        imagen.addEventListener('mouseover', function () {
            var texto = this.getAttribute('alt');
            mostrarTexto(texto);
        });

        imagen.addEventListener('mouseout', function () {
            var texto = this.getAttribute('alt');
            ocultarTexto(texto);
        });
    });  

    modeBtn.addEventListener('click', () => {
        toggleMode();
    });
});

function mostrarTexto(texto) {
    document.getElementById('psocial').innerText = texto;
}

function ocultarTexto(texto) {
    document.getElementById('psocial').innerText = "";
}

function toggleMode() {
    const theme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    modeIcon.src = theme === "dark" ? "resources/sun.png" : "resources/moon.png";
}


// Menú de navegacion
var enlaces = document.querySelectorAll('.nav-links a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function () {
        var checkbox = document.getElementById('menu-cb');
        checkbox.checked = false;
    });
});


// Scroll Snap
const secciones = document.querySelectorAll('section');

function toggleScrollSnap() {
    const htmlElement = document.documentElement;
    htmlElement.style.scrollSnapType = 'y proximity';

    secciones.forEach((seccion) => {
        if (seccion.offsetHeight > window.innerHeight) {
            htmlElement.style.scrollSnapType = 'none';
        }
    });
}

window.addEventListener('load', toggleScrollSnap);
window.addEventListener('resize', toggleScrollSnap);
