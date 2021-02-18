const hamburgerObjects = [...document.querySelectorAll('nav.hamburger i, div.menu a')];
const hamburgerMenu = document.querySelector('nav div.menu');

hamburgerObjects.forEach((object) => object.addEventListener('click', () => hamburgerMenu.classList.toggle('pull')));
