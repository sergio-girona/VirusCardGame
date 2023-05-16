import Game from "./game.js";
import {crearVistaCarta} from "./vista.js";

let partida =  new Game();
export function donarCarta(pos){
    let carta = partida.player.barallaGeneral.cartes.pop();
    partida.currentPlayer.afegirCartaArray(carta);//Afegir al array
    let cartaDiv =crearVistaCarta(carta, partida.currentPlayer.nom,pos);
    new Sortable(cartaDiv,{
        group:"shared",
        animation:150,
        onAdd : (evt) =>{
            const carta = evt.item;
            console.log("XD")
        }
    });
}
export function repartirCartes(){
    let pos= partida.currentPlayer.baralla.length;
    for (let i=0;i<3;i++){
        donarCarta(pos);
        pos++;
    }
}

const mans = document.querySelector(".mans");
const cos = document.querySelector(".cossos");
const tornar = document.getElementById("divTornar")

new Sortable(mans, {
    group:"shared",
    animation: 150
});
new Sortable(cos, {
    group:"shared",
    animation: 150,
    onAdd  : (evt) => {
        const objecteAfegit = evt.item;
        const posicio = objecteAfegit.dataset.posició;
        const tipusCarta = partida.currentPlayer.baralla[posicio].tipus;
        const color = partida.currentPlayer.comprovarColors(objecteAfegit)
        if(partida.currentPlayer.cuerpo.length===4){
            partida.currentPlayer.tornarCarta(objecteAfegit,posicio)
            console.log("No es pot")
        }
        else{
            if (tipusCarta !== 'organo') {
                partida.currentPlayer.tornarCarta(objecteAfegit, posicio);
            }
            else if(!color) {
                partida.currentPlayer.moureCartaACos(posicio);
                donarCarta();
                partida.currentPlayer.actualitzarPosicionsBaralla();
            }
        }
    }
});

new Sortable(tornar,{
    group: "shared",
    animation: 150,
    onAdd : (evt) => {
        const carta = evt.item;
        const posicio = carta.dataset.posició;
        donarCarta();
        partida.currentPlayer.treureCartaBaralla(posicio)
        partida.currentPlayer.actualitzarPosicionsBaralla();
        carta.remove();
    }
})
const elementos = document.querySelectorAll('.carta');

elementos.forEach((element) => {
    new Sortable(element, {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onAdd: (evt) => {
            const cartaArrastrada = evt.item;
            const tipusCartaArrastrada = cartaArrastrada.dataset.tipus;

            if (tipusCartaArrastrada === 'virus' || tipusCartaArrastrada === 'medicina') {
                // Permitir colocar la carta encima del elemento con data-tipus="organo"
                evt.from.insertBefore(cartaArrastrada, evt.to);
            }
        }
    });
});
