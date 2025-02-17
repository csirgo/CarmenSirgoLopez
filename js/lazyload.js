document.addEventListener("DOMContentLoaded", lazy_setup());

function lazy_setup() {
    const imgs = document.querySelectorAll('[data-src]');

    if ('IntersectionObserver' in window) {

        const intersectionObserverOptions = {
            root: null,
            threshold: 0.0
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.setAttribute("src", lazyImage.dataset.src);
                    lazyImage.removeAttribute("data-src")
                    lazyImage.removeAttribute('class');

                    observer.unobserve(entry.target);
                }
            });
        }, intersectionObserverOptions);

        imgs.forEach(img => {
            observer.observe(img);
        });
    }
    else {
    window.addEventListener('scroll', processScroll);
    }
}

function processScroll() {
    var elements = document.querySelectorAll('[data-src]');
    elements.forEach(function (element) {
        var actual_image = element;
        if (elementInViewport(actual_image) && actual_image.classList.contains('lazy')) {
            actual_image.setAttribute("src", actual_image.getAttribute("data-src"));
            actual_image.removeAttribute("data-src");
            actual_image.classList.remove('lazy');
        }
    });
}

function elementInViewport(el) {
    var elementTop = el.offsetTop;
    var elementBottom = elementTop + el.offsetHeight;
    var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportBottom = viewportTop + window.innerHeight;
    return elementBottom > viewportTop && elementTop < viewportBottom;
}
