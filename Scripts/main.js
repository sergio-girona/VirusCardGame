import Game from "./game.js";
import {crearVistaCarta} from "./vista.js";

let partida =  new Game();
export function donarCarta(){
    let carta = partida.player.barallaGeneral.cartes.pop();
    partida.currentPlayer.afegirCartaArray(carta);
    crearVistaCarta(carta, partida.currentPlayer.nom);
    console.log(partida.currentPlayer.baralla)
}
export function repartirCartes(){
    for (let i=0;i<3;i++){
        donarCarta();
    }
    //console.log(partida.player.barallaGeneral.cartes)
    console.log(partida.currentPlayer.nom)
}

const mans = document.querySelector(".mans");
const cossos = document.querySelector(".cossos");
new Sortable(mans, {
    group: 'shared', // set both lists to same group
    animation: 150
});
new Sortable(cossos, {
    group: 'shared',
    animation: 150,
    onAdd:()=>{
        partida.currentPlayer.moureCartaACos();
    }
})