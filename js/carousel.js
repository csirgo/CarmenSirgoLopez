var slidePosition = [1,1];
slideShow(0, slidePosition);
slideShow(1, slidePosition);

function plusSlides(carousel, n) {
  slideShow(carousel, slidePosition[carousel] += n);
}

function currentSlide(carousel, n) {
  slideShow(carousel, slidePosition[carousel] = n);
}

function slideShow(carousel, n) {
  var i;
  var carousels = document.getElementsByClassName("carousel");
  var slides = carousels[carousel].getElementsByClassName("containers");
  var dots = carousels[carousel].getElementsByClassName("dot");
  if (n > slides.length) {slidePosition[carousel] = 1}
  if (n < 1) {slidePosition[carousel] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" enable", "");
  }
  slides[slidePosition[carousel]-1].style.display = "grid";
  dots[slidePosition[carousel]-1].className += " enable";
} 