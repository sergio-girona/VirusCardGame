import Deck from "./deck.js";
let deck = new Deck();
deck.createDeck()
deck.shuffleArray();
export default class Jugador{
    constructor(nom) {
        this.nom=nom;
        this.baralla=[];
        this.barallaGeneral= deck;
    }
}