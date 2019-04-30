document.addEventListener('DOMContentLoaded', function () {

    // SLIDER //
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


    // OFFERS //
    const offersCol = document.querySelectorAll('.offers__col');

    for (let i = 0; i < offersCol.length - 1; i++) {
        let current = offersCol[i];

        current.addEventListener('mouseenter', () => {
            current.firstElementChild.nextElementSibling.style.display = "none";
            current.firstElementChild.firstElementChild.style.transform = "scale(1.1)";
            current.firstElementChild.firstElementChild.style.transition = "all .5s";
        });

        current.addEventListener('mouseleave', () => {
            current.firstElementChild.nextElementSibling.style.display = "block";
            current.firstElementChild.firstElementChild.style.transform = "scale(1.0)";
            current.firstElementChild.firstElementChild.style.transition = "all .5s";
        });
    }

    // CALCULATOR //

    // variables - elements
    const calculatorArrow = document.querySelectorAll('.calculator__arrow');
    const chairTitle = document.querySelector('.panel_left .title');
    const chairTypeTitle = document.querySelector('.panel_right .title');
    const chairColorTitle = document.querySelector('.panel_right .color');

    // variables - prices
    let priceClair = 149;
    let priceMargarita = 189;
    let priceSelena = 249;
    let priceColor = 0;

    // wybierz rodzaj
    calculatorArrow[0].addEventListener('click', () => {
        if (calculatorArrow[0].nextElementSibling.style.display === "block") {
            calculatorArrow[0].nextElementSibling.style.display = "none";
        } else {
            calculatorArrow[0].nextElementSibling.style.display = "block";
        }

        let lis = calculatorArrow[0].nextElementSibling.children;

        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', (e) => {

                if (e.target.innerText === "Clair") {
                    chairTitle.innerHTML = "Clair";
                    chairTypeTitle.innerHTML = priceClair + " " + "zł";
                    e.target.parentElement.style = "none";

                } else if (e.target.innerText === "Margarita") {
                    chairTitle.innerHTML = "Margarita";
                    chairTypeTitle.innerHTML = priceMargarita + " " + "zł";
                    e.target.parentElement.style = "none";

                } else {
                    chairTitle.innerHTML = "Selena";
                    chairTypeTitle.innerHTML = priceSelena + " " + "zł";
                    e.target.parentElement.style = "none";

                }
            });
        }
    });

    // wybierz kolor
    calculatorArrow[1].addEventListener('click', () => {
        if (calculatorArrow[1].nextElementSibling.style.display === "block") {
            calculatorArrow[1].nextElementSibling.style.display = "none";
        } else {
            calculatorArrow[1].nextElementSibling.style.display = "block";
        }

    });

    // wybierz materiał
    calculatorArrow[2].addEventListener('click', () => {
        if (calculatorArrow[2].nextElementSibling.style.display === "block") {
            calculatorArrow[2].nextElementSibling.style.display = "none";
        } else {
            calculatorArrow[2].nextElementSibling.style.display = "block";
        }

    });


});
