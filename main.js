var showMenu = (toggleId,navId) =>{
    var toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');

/*====remove menu ====*/
var navLinks = document.querySelectorAll('.nav-link')

function linkClicked(){
    var navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkClicked))