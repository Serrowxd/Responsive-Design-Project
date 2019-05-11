//defining variables

const backdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal-cookies');
const acceptCookiesButton = document.getElementById('modal-cookies__button');
const hamburger = document.querySelector('.hamburger-toggle');
const mobileNav = document.querySelector('.mobile-nav');
//using var because let or const isn't working as a global variable here for some reason.
var nav = document.querySelector('.main-header');


//event listeners

//if document scrolls past 100 pixels apply css style, remove if it goes under.
document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
    if (window.scrollY >= 100) {
        this.nav.style.background = 'rgba(0, 0, 0, .5)';
    }
    if (window.scrollY <= 99) {
        this.nav.style.background = 'transparent';
    }
});

acceptCookiesButton.addEventListener('click', closeModal);

hamburger.addEventListener('click', showMobileNav);

//functions

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

function showMobileNav() {
    mobileNav.style.display = "flex";
    backdrop.style.display = "block";
}
