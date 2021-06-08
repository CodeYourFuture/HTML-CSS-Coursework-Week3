let hamburger = document.querySelector('.hamburger');
// console.log(hamburger);
let navBar = document.querySelector('header nav');
// console.log(navBar);
let header = document.querySelector('header');
hamburger.addEventListener('click' ,openMenu);

 function openMenu() {
   navBar.classList.toggle('open');
   header.classList.toggle('open');
 }