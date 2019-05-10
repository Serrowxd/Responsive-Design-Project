//defining variables

let backdrop = document.querySelector('.modal-backdrop');
let modal = document.querySelector('.modal-cookies');
let acceptCookiesButton = document.getElementById('modal-cookies__button');
let hamburger = document.querySelector('.hamburger-toggle');
let mobileNav = document.querySelector('.mobile-nav');

window.onscroll = () => {    
    classScroll();    
}

//event listeners

acceptCookiesButton.addEventListener('click', () => {
    backdrop.classList.add('hide');
    modal.classList.add('hide');
})

hamburger.addEventListener('click', () => {
    console.log('working?');
    mobileNav.style.display = "block";
})
//functions

const classScroll = () => {
    let nav = document.querySelector('.main-header');
    nav.className = ('main-header-scroll');
}