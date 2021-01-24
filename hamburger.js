const hamburgerIcon = document.querySelector('nav.hamburger i');
const hamburgerMenu = document.querySelector('nav div.menu');
const hamburgerObjectOne = document.querySelector('.one');
const hamburgerObjectTwo = document.querySelector('.two');
const hamburgerObjectThree = document.querySelector('.three');
const hamburgerObjectFour = document.querySelector('.four');
const hamburgerObjectReservation = document.querySelector('.reservationtwo');

function pullMenu() {
    hamburgerMenu.classList.toggle('pull');
    hamburgerObjectOne.classList.toggle('pull');
    hamburgerObjectTwo.classList.toggle('pull');
    hamburgerObjectThree.classList.toggle('pull');
    hamburgerObjectFour.classList.toggle('pull');
    hamburgerObjectReservation.classList.toggle('pull');
}

hamburgerIcon.addEventListener('click', pullMenu);
hamburgerObjectOne.addEventListener('click', pullMenu);
hamburgerObjectTwo.addEventListener('click', pullMenu);
hamburgerObjectThree.addEventListener('click', pullMenu);
hamburgerObjectFour.addEventListener('click', pullMenu);
hamburgerObjectReservation.addEventListener('click', pullMenu);