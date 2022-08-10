const navToggleBtn = document.getElementById('navToggle');
const navLinks = document.getElementById('nav-links');

navToggleBtn.addEventListener('click', showNavLinks);

function showNavLinks (){
    navLinks.classList.toggle('nav-open');
}