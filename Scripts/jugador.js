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
        this.arrayColors=[]
        this.barallaGeneral= deck;
    }

    afegirCartaArray(carta){
        this.baralla.push(carta);
    }
    moureCartaACos(pos){
        const cartaNova = this.baralla.splice(pos, 1)[0];
        this.cuerpo.push(cartaNova);
    }
    treureCartaBaralla(pos){
        const cartaNova = this.baralla.splice(pos, 1)[0];
        this.barallaGeneral.cartes.unshift(cartaNova);
    }
    actualitzarPosicionsBaralla(){
        const contenidor = document.getElementById("maJUGADOR");
        const divs = contenidor.getElementsByClassName("carta");
        Array.from(divs).forEach((div, index) => {
            div.dataset.posició = index;
        });
    }
    tornarCarta(carta, pos){
        const contenidor = document.getElementById("maJUGADOR");
        const cartaReferencia = contenidor.children[pos];
        contenidor.insertBefore(carta,cartaReferencia);
    }
    comprovarColors(carta){
        let repetida = false;
        const color =carta.dataset.color;
        if (!this.arrayColors.includes(color)){
            this.arrayColors.push(color);
            return repetida;
        }
        else{
            this.tornarCarta(carta, carta.dataset.posició);
            repetida = true;
            return repetida;
        }
    }
}