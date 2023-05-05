import Game from "./game.js";

let partida =  new Game();

document.getElementById("començar").addEventListener("click", prova)
document.getElementById("demanar").addEventListener("click",donarCarta);

export function prova(){
    let baraja = partida.player.barallaGeneral.cartes[0];
}
function donarCarta(){
    let carta = partida.player.barallaGeneral.cartes.length-1;
    //partida.player.barallaGeneral.cartes.pop();
    renderCard(carta);
}
function renderCard(carta) {
    const div = document.getElementById('div');
    const img = document.createElement('img');
    img.src = `imatges/${carta.tipus}${carta.color}.png`;
    div.appendChild(img);

}