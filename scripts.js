window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('menu-visible');
  });
};
