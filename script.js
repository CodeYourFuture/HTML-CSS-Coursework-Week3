const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

burgerMenu.addEventListener('click', function() {
    menu.style.display = "flex";
});

closeMenu.addEventListener('click', function() {
    menu.style.display = "none";
});