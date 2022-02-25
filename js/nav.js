// Mobile menu
var menu = document.querySelector('.navigation-links');
var menuBtn = document.querySelectorAll(".open-btn");

menuBtn.forEach(menuBtn => menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
}));

var menuLink = document.querySelectorAll(".nav_links li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
}));


const enlaces = document.querySelectorAll('.enlace a');

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const seccion = document.querySelector(e.target.attributes.href.value);

        seccion.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
