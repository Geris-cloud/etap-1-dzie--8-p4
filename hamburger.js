const hamburgerIcon = document.querySelector('i');
const hamburgerMenu = document.querySelector('.menu');


function pullMenu() {
    hamburgerMenu.classList.toggle('pull');

}

hamburgerIcon.addEventListener('click', pullMenu);