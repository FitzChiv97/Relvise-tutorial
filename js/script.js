'use strict';

const burgerButton = document.querySelector('.js-burger-button');

burgerButton.addEventListener('click', toggleBurgerMenu);

const bodyElement = document.body;

bodyElement.addEventListener('click', (e) => closeBurgerMenu(e))

function toggleBurgerMenu() {
    burgerButton.closest('.menu').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}

function closeBurgerMenu(e) {
    const menu = document.querySelector('.menu');

    if(menu.classList.contains('_active') && 
    !e.target.closest('.menu__list') && 
    !e.target.closest('.js-burger-button')) {
        menu.classList.remove('_active');
        bodyElement.classList.remove('_lock');
    }
}