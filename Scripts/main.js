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
    partida.changeUser();
}
const maJugador = document.getElementById("maJUGADOR");
const  maNPC = document.getElementById("maNPC");
const tornar = document.getElementById("divTornar");
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
        const color = element.dataset.color;
        const parentNodeId = element.parentNode.id;
        let parentNodeDiv=document.getElementById(parentNodeId);
        if (tipusCarta !== 'organo') {
            if(color==="Multicolor"){
                console.log(parentNodeDiv);
                if(parentNodeDiv.dataset.color!==""){
                    partida.currentPlayer.afegirEfecte(element,pos, parentNodeId);
                    donarCarta()
                    partida.currentPlayer.actualitzarPosicionsBaralla(partida.currentPlayer.nom);
                    partida.changeUser();
                    tornJoc()
                }
                else{
                    partida.currentPlayer.tornarCartaMa(element, pos, partida.currentPlayer.nom);
                }
            }
            else if(parentNodeDiv.dataset.color && parentNodeDiv.dataset.color===color){
                partida.currentPlayer.afegirEfecte(element,pos);
                donarCarta()
                partida.currentPlayer.actualitzarPosicionsBaralla(partida.currentPlayer.nom);
                partida.changeUser();
                tornJoc()
            }
            else{
                partida.currentPlayer.tornarCartaMa(element, pos, partida.currentPlayer.nom);
            }
        }
        else if(partida.currentPlayer.cuerpo.length===4) {
            partida.currentPlayer.tornarCartaMa(element,pos, partida.currentPlayer.nom)
            console.log("No es pot");
        }
        else {
            let existeix = partida.currentPlayer.comprovarColors(element, color);
            if (!existeix) {
                partida.currentPlayer.moureCartaACos(pos);
                donarCarta();
                partida.currentPlayer.actualitzarPosicionsBaralla(partida.currentPlayer.nom);
                parentNodeDiv.dataset.color = color;
                partida.changeUser();
                tornJoc()
            }
        }
    }
};
for(let i = 1; i <= 4; i++){
    let carta = document.getElementById(`carta${i}JUGADOR`);
    new Sortable(carta, options);
}
for(let i = 1; i <= 4; i++){
        let carta = document.getElementById(`carta${i}NPC`);
        new Sortable(carta, options);
}
new Sortable(tornar,{
    group: "shared",
    animation: 150,
    onAdd : (evt) => {
        const carta = evt.item;
        const pos = carta.dataset.position;
        donarCarta();
        partida.currentPlayer.treureCartaBaralla(pos)
        partida.currentPlayer.actualitzarPosicionsBaralla(partida.currentPlayer.nom);
        carta.remove();
    }
});
let mans = {
    group:{
        name: "shared",
        pull :true
    },
    animation: 150
}
const barallaNPC =  Sortable.create(maNPC, mans);
const barallaJUGADOR = Sortable.create(maJugador, mans);

export function tornJoc() {
    if (partida.currentPlayer.nom === "JUGADOR") {
        barallaNPC.option('disabled', true);
        barallaJUGADOR.option('disabled', false);
    }
    if (partida.currentPlayer.nom === "NPC") {
        barallaNPC.option('disabled', false);
        barallaJUGADOR.option('disabled', true);
    }
}