window.onscroll = () => {    
    classScroll();    
}

const classScroll = () => {
    let nav = document.querySelector('.main-header');
    nav.className = ('main-header-scroll');
}



// modal-cookies

// modal-backdrop

// toggle hide class on button click


let backdrop = document.querySelector('.modal-backdrop');
let modal = document.querySelector('.modal-cookies');
let acceptCookiesButton = document.getElementById('modal-cookies__button');


acceptCookiesButton.addEventListener('click', function(){
    console.log('working');
    backdrop.classList.add('hide');
    modal.classList.add('hide');
})