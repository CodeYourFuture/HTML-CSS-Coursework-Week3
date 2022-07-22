const navButton = document.querySelector('.expand-nav');
const navList = document.querySelector('.nav-list');
console.log(navButton);
console.log(navList);



function expandNav() {
    console.log('click works');
    console.log(navList)
    navList.style.display;

    if (navList.style.display === 'none') {
        navList.style.display === 'flex';
    }
};

expandNav();
