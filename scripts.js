document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    const slides = carousel.querySelector('.carousel-inner');
    const slideWidth = slides.firstElementChild.clientWidth;
    const slideCount = slides.children.length;
    let counter = 0;

    nextBtn.addEventListener('click', function() {
        counter = (counter + 1) % slideCount;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        counter = (counter - 1 + slideCount) % slideCount;
        updateCarousel();
    });

    function updateCarousel() {
        slides.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
});