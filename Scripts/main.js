import Game from "./game.js";

let partida =  new Game();

document.getElementById("boto").addEventListener("click", prova)


export function prova(){
    let baraja = partida.player.barallaGeneral.cartes[0];
}

