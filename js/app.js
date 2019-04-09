document.addEventListener('DOMContentLoaded', function () {

    // slider //
    const buttonPrev = document.querySelector('.slider__nav--prev');
    const buttonNext = document.querySelector('.slider__nav--next');
    const sliderCol = document.getElementsByClassName('slider__col');

    sliderCol[2].style.display = "none";
    sliderCol[3].style.display = "none";

    let currentSlide = 0;

    buttonPrev.addEventListener('click', () => {
        sliderCol[2].style.display = "none";
        sliderCol[3].style.display = "none";
        sliderCol[0].style.display = "block";
        sliderCol[1].style.display = "block";
        sliderCol[0].classList.add('focus-in');
        sliderCol[1].classList.add('focus-in');
    });

    buttonNext.addEventListener('click', () => {
        sliderCol[0].style.display = "none";
        sliderCol[1].style.display = "none";
        sliderCol[2].classList.add('focus-in');
        sliderCol[3].classList.add('focus-in');
        sliderCol[2].style.display = "block";
        sliderCol[3].style.display = "block";
    });


});








