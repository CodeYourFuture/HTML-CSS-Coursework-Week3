const navToggleBtn = document.getElementById('navToggle');
const navLinks = document.getElementById('nav-links');

navToggleBtn.addEventListener('click', showNavLinks);

function showNavLinks (){
    navLinks.classList.toggle('nav-open');
}

// get the smurf working for footer-btn
// select the footer btn
const fotterToggleBTN = document.querySelector('.footer-button');
const iconLinkName = document.getElementById('iconList');
// add event listener 
fotterToggleBTN.addEventListener('click', showFooterlinks);
// run the function 

function showFooterlinks(){
    // select the link of footer which is icon
    
    iconLinkName.classList.toggle('footer-open');
}