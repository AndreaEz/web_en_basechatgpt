// Funcionalidad del carrusel
let slideIndex = 0;
const slides = document.querySelectorAll('.juego-slide');

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
}

// Desplazar automáticamente el carrusel cada cierto tiempo
setInterval(() => {
    moveSlide(1);
}, 5000); // Cambiar la velocidad del carrusel según sea necesario