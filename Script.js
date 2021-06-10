function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const hamburger = document.getElementById('hamburger');
  const navUL = document.getElementById('nav-ul');
     
  hamburger.addEventListener('click',() => {
      navUL.classList.toggle('show');
  });