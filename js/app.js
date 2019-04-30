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


    // offers section //
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

    // calculator //
    const calculatorButton = document.querySelectorAll('.calculator__arrow');
    let priceClair = 149;
    let priceMargarita = 189;
    let priceSelena = 249;

    let chairTitle = document.querySelector('.panel_left .title');
    console.log(chairTitle);

    for (let i = 0; i < calculatorButton.length; i++) {

        calculatorButton[i].addEventListener('click', () => {
            if (calculatorButton[i].nextElementSibling.style.display === "block") {
                calculatorButton[i].nextElementSibling.style.display = "none";
            } else {
                calculatorButton[i].nextElementSibling.style.display = "block";
            }

            let lis = calculatorButton[i].nextElementSibling.children;

            for (let i=0; i<lis.length; i++) {
                lis[i].addEventListener('click', (e) => {

                    if (e.target.innerText === "Clair") {
                        chairTitle.innerHTML = "Clair";
                        console.log(priceClair, "price clair");
                        console.log(e.target.innerText);
                    } else if (e.target.innerText === "Margarita") {
                        chairTitle.innerHTML = "Margarita";
                        console.log(priceMargarita, "price margarita");
                    } else {
                        chairTitle.innerHTML = "Selena";
                        console.log(priceSelena, "price selena");
                    }

                });
            }


        })
    }

});
