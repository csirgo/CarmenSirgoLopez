// js/script.js
document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("lang") || "es"; // Cargar idioma guardado
    loadLanguage(lang);

    document.getElementById("language-switcher").addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("lang", selectedLang);
        loadLanguage(selectedLang);
    });

    // Cambiar idioma con botones
    document.getElementById("btn-en").addEventListener("click", function (e) {
        e.preventDefault();
        loadLanguage("en");
    });

    document.getElementById("btn-es").addEventListener("click", function (e) {
        e.preventDefault();
        loadLanguage("es");
    });
});

function loadLanguage(lang) {
    fetch(`https://carmensirgolopez.pages.dev/locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        });
}
