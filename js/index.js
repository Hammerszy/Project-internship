(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const overlay = document.querySelector('.overlay');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        overlay.classList.add('overlay_active'); // показуємо оверлей
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        overlay.classList.remove('overlay_active'); // ховаємо оверлей
    });

    // Додай клік по оверлею, щоб закрити меню
    overlay.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        overlay.classList.remove('overlay_active');
    });
}());
