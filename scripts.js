document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    const slides = carousel.querySelector('.carousel-inner');
    const slideWidth = slides.firstElementChild.clientWidth;

    let counter = 0;

    nextBtn.addEventListener('click', function() {
        counter++;
        if (counter > slides.children.length - 1) {
            counter = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        counter--;
        if (counter < 0) {
            counter = slides.children.length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        slides.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
});
