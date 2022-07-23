const navButton = document.querySelector('.expand-nav');
const navList = document.querySelector('.responsive-nav');

navButton.addEventListener('click', function () {

    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }

});

