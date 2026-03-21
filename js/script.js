'use strict';

const burgerButton = document.querySelector('.js-burger-button');
burgerButton.addEventListener('click', () => {
    burgerButton.parentElement.classList.toggle('active');
});