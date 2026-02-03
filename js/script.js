const btPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector('.conteneur-transports');

btPlus.addEventListener('click', fouvreFerme);

function fouvreFerme(){
    conteneur.classList.toggle('conteneur-transports-invisible');
};