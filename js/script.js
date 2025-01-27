// Botones seccion principal
document.addEventListener('DOMContentLoaded', function () {
    var imagenes = document.querySelectorAll('.social');

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
});

function mostrarTexto(texto) {
    document.getElementById('psocial').innerText = texto;
}

function ocultarTexto(texto) {
    document.getElementById('psocial').innerText = "";
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
