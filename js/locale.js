// js/script.js
document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("lang") || "es"; 
    loadLanguage(lang);

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
    const languageSwitcher = document.getElementById("language-switcher");
    const dropbtn = languageSwitcher.querySelector(".dropbtn");
    const selected = document.getElementById(`btn-${lang}`);
        if (selected) {
            const img = selected.querySelector("img").cloneNode(true); 
            dropbtn.innerHTML = ""; 
            dropbtn.appendChild(img);
            dropbtn.innerHTML += ` ${lang.toUpperCase()}`;
        }

    fetch(`https://carmensirgolopez.pages.dev/locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(element => {
                console.log(element);
                const key = element.getAttribute("data-i18n");
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        });
}
