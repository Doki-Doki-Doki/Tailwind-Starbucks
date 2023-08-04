const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const span = document.querySelector("#test");

toggleMenu.addEventListener('click', () =>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
})

toggleMenu.addEventListener('mouseover', () =>{
    span.classList.toggle('open');
})