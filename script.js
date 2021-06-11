const hamburger=  document.getElementById ('hamburger');
const navBar= document.getElementById ('nav-bar');
hamburger.addEventListener('click',() => {
    navBar.classList.toggle ('show');
});