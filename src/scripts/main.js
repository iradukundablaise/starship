
// importation de la classe Game.js
import Game from './game.js';

const game = new Game();
// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    game.addKeyBoardEvents();
    game.animate();

    const saucerBtn = document.getElementById("nouvelleSoucoupe");
    const randomSaucerBtn = document.getElementById("flotteSoucoupes");

    saucerBtn.addEventListener("click", game.addSaucer.bind(game));
    randomSaucerBtn.addEventListener("click", game.addSaucerRandomly.bind(game));
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
