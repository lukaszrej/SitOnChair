document.addEventListener('DOMContentLoaded', () => {
  // SLIDER //
  const buttonPrev = document.querySelector('.slider__nav--prev'),
    buttonNext = document.querySelector('.slider__nav--next'),
    slides = document.querySelectorAll('.container .slides');

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
      current.firstElementChild.nextElementSibling.style.display = 'none';
      current.firstElementChild.firstElementChild.style.transform =
        'scale(1.1)';
      current.firstElementChild.firstElementChild.style.transition = 'all .5s';
    });

    current.addEventListener('mouseleave', () => {
      current.firstElementChild.nextElementSibling.style.display = 'block';
      current.firstElementChild.firstElementChild.style.transform =
        'scale(1.0)';
      current.firstElementChild.firstElementChild.style.transition = 'all .5s';
    });
  }

  // CALCULATOR //

  // variables - elements
  const calculatorArrow = document.querySelectorAll('.calculator__arrow');
  let chairTypesSelection = calculatorArrow[0].nextElementSibling.children;
  let chairSelectionTitles = document.querySelectorAll('.calculator__label');
  let chairTypeSelectionTitle = chairSelectionTitles[0];
  let chairColorSelectionTitle = chairSelectionTitles[1];
  let chairMaterialSelectionTitle = chairSelectionTitles[2];
  let chairColorSelection = calculatorArrow[1].nextElementSibling.children;
  let chairMaterialSelection = calculatorArrow[2].nextElementSibling.children;

  const chairTitle = document.querySelector('.panel_left .title');
  const chairTypeTitle = document.querySelector('.panel_right .title');
  const chairColorTitle = document.querySelector('.panel_left .color');
  const chairColorPrice = document.querySelector('.panel_right .color');
  const chairMaterialTitle = document.querySelector('.panel_left .pattern');
  const chairMaterialPrice = document.querySelector('.panel_right .pattern');
  const transportTitle = document.querySelector('.panel_left .transport');
  const transportPrice = document.querySelector('.panel_right .transport');
  const transport = document.querySelector('#transport');
  const sum = document.querySelector('.sum strong');

  // variables - prices
  let priceClair = 149;
  let priceMargarita = 189;
  let priceSelena = 249;
  let priceColor = 0;
  let priceMaterialFabric = 49;
  let priceMaterialLether = 199;
  let priceTransport = 69;
  let priceType = 0;
  let priceOutput = 0;

  // wybierz rodzaj
  calculatorArrow[0].addEventListener('click', () => {
    if (calculatorArrow[0].nextElementSibling.style.display === 'block') {
      calculatorArrow[0].nextElementSibling.style.display = 'none';
    } else {
      calculatorArrow[0].nextElementSibling.style.display = 'block';
    }

    for (let i = 0; i < chairTypesSelection.length; i++) {
      chairTypesSelection[i].addEventListener('click', e => {
        if (e.target.innerText === 'Clair') {
          chairTitle.innerText = 'Clair';
          chairTypeSelectionTitle.innerText = 'Clair';
          chairTypeTitle.innerText = priceClair + ' ' + 'zł';
          priceType = priceClair;
          e.target.parentElement.style = 'none';
        } else if (e.target.innerText === 'Margarita') {
          chairTitle.innerText = 'Margarita';
          chairTypeSelectionTitle.innerText = 'Margarita';
          chairTypeTitle.innerText = priceMargarita + ' ' + 'zł';
          priceType = priceMargarita;
          e.target.parentElement.style = 'none';
        } else {
          chairTitle.innerText = 'Selena';
          chairTypeSelectionTitle.innerText = 'Selena';
          chairTypeTitle.innerText = priceSelena + ' ' + 'zł';
          priceType = priceSelena;
          e.target.parentElement.style = 'none';
        }

        sum.innerText = priceType + ' ' + 'zł';
      });
    }
  });

  // wybierz kolor
  calculatorArrow[1].addEventListener('click', () => {
    if (calculatorArrow[1].nextElementSibling.style.display === 'block') {
      calculatorArrow[1].nextElementSibling.style.display = 'none';
    } else {
      calculatorArrow[1].nextElementSibling.style.display = 'block';
    }

    for (let i = 0; i < chairColorSelection.length; i++) {
      chairColorSelection[i].addEventListener('click', e => {
        if (e.target.innerText === 'Czerwony') {
          chairColorTitle.innerText = 'Czerwony';
          chairColorSelectionTitle.innerText = 'Czerwony';
          chairColorPrice.innerText = priceColor + ' ' + 'zł';
          e.target.parentElement.style = 'none';
        } else if (e.target.innerText === 'Czarny') {
          chairColorTitle.innerText = 'Czarny';
          chairColorSelectionTitle.innerText = 'Czarny';
          chairColorPrice.innerText = priceColor + ' ' + 'zł';
          e.target.parentElement.style = 'none';
        } else {
          chairColorTitle.innerText = 'Pomarańczowy';
          chairColorSelectionTitle.innerText = 'Pomarańczowy';
          chairColorPrice.innerText = priceColor + ' ' + 'zł';
          e.target.parentElement.style = 'none';
        }
      });
    }
  });

  // wybierz materiał
  calculatorArrow[2].addEventListener('click', () => {
    if (calculatorArrow[2].nextElementSibling.style.display === 'block') {
      calculatorArrow[2].nextElementSibling.style.display = 'none';
    } else {
      calculatorArrow[2].nextElementSibling.style.display = 'block';
    }
  });

  for (let i = 0; i < chairMaterialSelection.length; i++) {
    chairMaterialSelection[i].addEventListener('click', e => {
      if (e.target.innerText === 'Tkanina') {
        chairMaterialTitle.innerText = 'Tkanina';
        chairMaterialSelectionTitle.innerText = 'Tkanina';
        priceOutput = priceMaterialFabric;
        chairMaterialPrice.innerText = priceMaterialFabric + ' ' + 'zł';
        e.target.parentElement.style = 'none';
      } else {
        chairMaterialTitle.innerText = 'Skóra';
        chairMaterialSelectionTitle.innerText = 'Skóra';
        priceOutput = priceMaterialLether;
        chairMaterialPrice.innerText = priceMaterialLether + ' ' + 'zł';
        e.target.parentElement.style = 'none';
      }

      sum.innerText = priceType + priceOutput + ' ' + 'zł';
    });
  }

  // wybierz transport
  transport.addEventListener('click', e => {
    e.target.classList.toggle('active');

    if (e.target.classList.value === 'active') {
      transportTitle.innerText = 'Transport';
      priceOutput += priceTransport;
      transportPrice.innerText = priceTransport + ' ' + 'zł';
    } else {
      transportTitle.innerText = 'Odbiór osobisty';
      priceOutput -= priceTransport;
      transportPrice.innerText = 0 + ' ' + 'zł';
    }

    sum.innerText = priceType + priceOutput + ' ' + 'zł';
  });
});
