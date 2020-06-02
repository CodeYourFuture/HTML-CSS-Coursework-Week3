//selectors
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navLinks = document.querySelectorAll('.navlinks li');



//event listeners

//toggle the nav burger
burger.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');

    //animate the links
    navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 + 1}s`
            }
    });

    //burger toggle
    burger.classList.toggle('tog');


});