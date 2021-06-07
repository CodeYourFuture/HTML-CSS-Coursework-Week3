let hamburger = document.querySelector('.hamburger');
// console.log(hamburger);
let navBar = document.querySelector('header nav');
// console.log(navBar);
hamburger.addEventListener('click' ,openMenu);

 function openMenu() {
   navBar.classList.toggle('open');
 }