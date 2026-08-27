const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

    menuButton.classList.toggle("open");

});
