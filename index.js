window.onscroll = () => {    
    classScroll();    
}

const classScroll = () => {
    let nav = document.querySelector('.main-header');
    nav.className = ('main-header-scroll');
}