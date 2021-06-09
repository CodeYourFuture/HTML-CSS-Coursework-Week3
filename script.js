const hamburger = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar-links");

hamburger.addEventListener("click", clickMenu);
function clickMenu() {
  navbar.classList.toggle("hamburger-toggle");
}
