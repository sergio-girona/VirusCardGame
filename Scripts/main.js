import Game from "./game.js";
import {crearVistaCarta} from "./vista.js";

let partida =  new Game();
export function donarCarta(pos){
    let carta = partida.player.barallaGeneral.cartes.pop();
    partida.currentPlayer.afegirCartaArray(carta);//Afegir al array
    crearVistaCarta(carta, partida.currentPlayer.nom,pos);
}
export function repartirCartes(){
    let pos= partida.currentPlayer.baralla.length;
    for (let i=0;i<3;i++){
        donarCarta(pos);
        pos++;
    }
    console.log(pos)
}

const mans = document.querySelector(".mans");
const cossos = document.querySelector(".cossos");
new Sortable(mans, {
    group: 'shared', // set both lists to same group
    animation: 150,
    onAdd: (evt) => {
        const objecteAfegit = evt.item;
        let position =objecteAfegit.dataset.posició;
        partida.currentPlayer.moureCartaACos(position);
        partida.currentPlayer.actualitzarPosicionsBaralla();
    }
});
new Sortable(cossos, {
    group: 'shared',
    animation: 150
});