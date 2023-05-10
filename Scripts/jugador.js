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
    moureCartaACos(){
        let carta = this.baralla.pop();
        this.cuerpo.push(carta)
    }
}