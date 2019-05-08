//defining variables

let backdrop = document.querySelector('.modal-backdrop');
let modal = document.querySelector('.modal-cookies');
let acceptCookiesButton = document.getElementById('modal-cookies__button');

window.onscroll = () => {    
    classScroll();    
}

//event listeners

acceptCookiesButton.addEventListener('click', function(){
    console.log('working');
    backdrop.classList.add('hide');
    modal.classList.add('hide');
})

//functions

const classScroll = () => {
    let nav = document.querySelector('.main-header');
    nav.className = ('main-header-scroll');
}
