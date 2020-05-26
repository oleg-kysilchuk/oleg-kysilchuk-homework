let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let navLink = document.querySelectorAll('.menu__nav-link');

menuButton.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('open');

    if (this.classList.contains('open')) {
        menu.classList.add('open');
    }
    else {
        menu.classList.remove('open');
    }
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        menu.classList.remove('open');
        menuButton.classList.remove('open');
    });
}