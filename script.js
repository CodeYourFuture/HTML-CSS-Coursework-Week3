const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");


burgerMenu.addEventListener('click', function() {
    menu.classList.toggle("active");
});
