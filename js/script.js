var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (let i = 0; i < slides.length; i++) {
  slides[i].style.opacity = "0";
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
showSlides();

function showSlides() {
  if (slideIndex - 1 < 0) {
    slides[slides.length - 1].style.opacity = "0"
    dots[dots.length - 1].className = dots[dots.length - 1].className.replace(" active", "");
  }
  else {
    slides[slideIndex - 1].style.opacity = "0";
    dots[slideIndex - 1].className = dots[slideIndex].className.replace(" active", "");
  }
  slides[slideIndex].style.opacity = "1";
  dots[slideIndex].className += " active";
  slideIndex++;
  if (slideIndex === slides.length) { slideIndex = 0 }
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}