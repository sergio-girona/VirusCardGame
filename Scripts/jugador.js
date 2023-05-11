import Deck from "./deck.js";
let deck = new Deck();
deck.createDeck()
deck.shuffleArray();
deck.shuffleArray();
console.log(deck)
export default class Jugador{
    constructor(nom) {
        this.nom=nom;
        this.baralla=[];
        this.cuerpo=[];
        this.barallaGeneral= deck;
    }

    afegirCartaArray(carta){
        this.baralla.push(carta);
    }
    moureCartaACos(pos){
        const carta = this.baralla.splice(pos, 1)[0];
        this.cuerpo.push(carta);
        console.log("Ma");
        console.log(this.baralla);
        console.log("Cos");
        console.log(this.cuerpo);
    }
    actualitzarPosicionsBaralla(){
        const contenidor = document.getElementById("maJUGADOR");
        const divs = contenidor.querySelectorAll("div");
        divs.forEach((div, index) => {
            div.dataset.posicio = index;
            index++;
        });
    }
}