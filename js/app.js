document.addEventListener('DOMContentLoaded', function () {

    // slider //
    const buttonPrev = document.querySelector('.slider__nav--prev');
    const buttonNext = document.querySelector('.slider__nav--next');
    const slides = document.querySelectorAll('.container .slides');

    let activeSlide = 0;
    slides[activeSlide].classList.add('visible');

    buttonPrev.addEventListener('click', () => {
        slides[activeSlide].classList.remove('visible');

        activeSlide--;

        if (activeSlide < 0) {
            activeSlide = slides.length - 1;
        }

        slides[activeSlide].classList.add('visible', 'focus-in');
    });

    buttonNext.addEventListener('click', () => {
        slides[activeSlide].classList.remove('visible');

        activeSlide++;

        if (activeSlide >= slides.length) {

            activeSlide = 0;
        }

        slides[activeSlide].classList.add('visible', 'focus-in');
    });



});








