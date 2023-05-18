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
}
let nom = partida.player.nom;
const mans = document.querySelector(".mans");
const tornar = document.getElementById("divTornar");
const carta1= document.getElementById(`carta1${nom}`);
const carta2= document.getElementById(`carta2${nom}`);
const carta3= document.getElementById(`carta3${nom}`);
const carta4= document.getElementById(`carta4${nom}`);
let options = {
    group:{
        name: "shared",
        pull :false
    },
    sort: false,
    animation: 150,
    onAdd  : (evt) => {
        const element = evt.item;
        const pos = element.dataset.position;
        const tipusCarta = partida.currentPlayer.baralla[pos].tipus;
        let color = element.dataset.color;
        const parentNodeId = element.parentNode.id;
        let parentNodeDiv=document.getElementById(parentNodeId);
        if (tipusCarta !== 'organo') {
            if(parentNodeDiv.dataset.color===color){
                partida.currentPlayer.afegirEfecte(pos)
                donarCarta()
                partida.currentPlayer.actualitzarPosicionsBaralla();
            }
            else{
                partida.currentPlayer.tornarCartaMa(element, pos);
            }
        }
        else if(partida.currentPlayer.cuerpo.length===4) {
                partida.currentPlayer.tornarCartaMa(element,pos)
            console.log("No es pot")
            console.log(partida.currentPlayer.cuerpo);
        }
        else {
            let existeix = partida.currentPlayer.comprovarColors(element, color);
            if (!existeix) {
                partida.currentPlayer.moureCartaACos(pos);
                donarCarta();
                partida.currentPlayer.actualitzarPosicionsBaralla();
                parentNodeDiv.dataset.color = color;
            }
        }
        partida.currentPlayer.actualitzarPosicionsCos(element,parentNodeId);
    }
};

new Sortable(mans, {
    group:"shared",
    animation: 150
});

new Sortable(carta1, options);
new Sortable(carta2,options);
new Sortable(carta3, options);
new Sortable(carta4, options);

new Sortable(tornar,{
    group: "shared",
    animation: 150,
    onAdd : (evt) => {
        const carta = evt.item;
        const pos = carta.dataset.position;
        donarCarta();
        partida.currentPlayer.treureCartaBaralla(pos)
        partida.currentPlayer.actualitzarPosicionsBaralla();
        carta.remove();
    }
});