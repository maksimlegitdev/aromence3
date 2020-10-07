const body = document.querySelector('body');
const headerMenuWrapper = document.querySelector('.header__menu-wrapper');
const menuButton = document.querySelector('.menu-button');
const user = document.querySelector('.user');

const customersItemsWrapper = document.querySelector('.customers__items');

document.addEventListener('DOMContentLoaded', customersItemsWrapperHeight);

window.addEventListener('resize', customersItemsWrapperHeight);

menuButton.onclick = () => {
  menuButton.classList.toggle('menu-button--open');
  headerMenuWrapper.classList.toggle('header__menu-wrapper--open');
  body.classList.toggle('lock');
};

document.addEventListener('DOMContentLoaded', adaptive);

window.addEventListener('resize', adaptive);

sliderAdaptive(768, [
  '.collection__body',
  {
    loop: true,
    slidesPerView: 1.8,
    centeredSlides: true,
    pagination: {
      el: '.collection__dots',
      clickable: true
    },
    navigation: {
      prevEl: '.collection__button--prev',
      nextEl: '.collection__button--next'
    }
  }
]);

sliderAdaptive(768, [
  '.customers__items',
  {
    direction: 'vertical',
    navigation: {
      prevEl: '.customers__button--prev',
      nextEl: '.customers__button--next'
    },
    pagination: {
      el: '.customers__dots',
      clickable: true
    },
    spaceBetween: 50
  }
]);

function sliderAdaptive(breakpoint, sliderSettings) {
  let slider;
  let sliderIsEnabled = false;

  document.addEventListener('DOMContentLoaded', adaptiveFunction);

  window.addEventListener('resize', adaptiveFunction);

  function adaptiveFunction() {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= breakpoint && !sliderIsEnabled) {
      slider = new Swiper(sliderSettings[0], sliderSettings[1]);
      sliderIsEnabled = true;
    } else if (windowWidth < breakpoint && sliderIsEnabled) {
      slider.destroy();
      sliderIsEnabled = false;
    }
  }
}

function adaptive() {
  const width = document.documentElement.clientWidth;
  if (width >= 768) {
    headerMenuWrapper.after(user);
  } else {
    headerMenuWrapper.appendChild(user);
  }
}

function customersItemsWrapperHeight() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth >= 768) {
    const customersItems = customersItemsWrapper.querySelectorAll('.customers-item__body');
    let maxHeight = 0;
    customersItems.forEach(item => maxHeight = item.clientHeight > maxHeight ? item.clientHeight : maxHeight);

    customersItemsWrapper.style.height = `${maxHeight}px`;
  }
}