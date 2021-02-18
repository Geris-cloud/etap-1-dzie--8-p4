const hamburgerObjects = [...document.querySelectorAll('nav.hamburger i, div.menu a')];
const hamburgerMenu = document.querySelector('nav div.menu');

for (let i = 0; i < hamburgerObjects.length; i++) {
    hamburgerObjects[i].addEventListener('click', () => hamburgerMenu.classList.toggle('pull'))
};