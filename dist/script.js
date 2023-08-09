// const kalboNav = document.querySelectorAll(".kalbo__nav__link");
// const kalboContent = document.querySelectorAll(".kalbo__item__content");
// kalboNav.forEach((kalbo) => {
//     kalbo.addEventListener("click", () => {
//     removeActiveKalbo();
//     kalbo.style = "transition:.5s ease";
//     kalbo.classList.add("active");
//     kalbo.style = "transition:.5s ease";
//     const activeContent = document.querySelector(`#${kalbo.id}-content`);
//     removeActiveContent();
//     activeContent.classList.add("active");
//     });
// });

// function removeActiveKalbo() {
//     kalboNav.forEach((kalbo) => {
//     kalbo.classList.remove("active");
//     });
// }

// function removeActiveContent() {
//     kalboContent.forEach((kalbo) => {
//     kalbo.classList.remove("active");
//     });
// }


const getNav = document.querySelectorAll(".get__nav__link");
const getContent = document.querySelectorAll(".get__item__content");
// const underline = document.querySelectorAll(".get__nav__underline");

getNav.forEach((get) => {
    get.addEventListener("click", () => {
    removeActiveGet();
    get.style = "transition:.5s ease";
    get.classList.add("active");
    get.style = "transition:.5s ease";
    const activeContent = document.querySelector(`#${get.id}-content`);
    removeActiveGetContent();
    activeContent.classList.add("active");
    activeContent.style = "transition:.5s ease";
    });
});

function removeActiveGet() {
    getNav.forEach((get) => {
    get.classList.remove("active");
    });
}

function removeActiveGetContent() {
    getContent.forEach((get) => {
    get.classList.remove("active");
    });
}

/*-----HEADER------*/
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



/*-----FOOTER------*/
const footerClickable = document.querySelectorAll(".footer__column a");

footerClickable.forEach((drop) => {
    drop.addEventListener('click', () => {
        drop.nextElementSibling.classList.toggle('open');
        drop.querySelector("i").classList.toggle('open');
    });
});




