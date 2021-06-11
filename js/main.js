const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.nav-menu')
const menuCloseButton = document.querySelector('.menu-close')
const col = document.querySelector('.trailer')

menuButton.addEventListener("click", () => {
    menu.classList.add("is-active")
    menuCloseButton.classList.add("is-active")
});
menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("is-active")
    menuCloseButton.classList.remove("is-active")
});


