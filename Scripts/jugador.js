import Deck from "./deck.js";
let deck = new Deck();
deck.createDeck()
deck.shuffleArray();
deck.shuffleArray();
export default class Jugador {
    constructor(nom) {
        this.nom = nom;
        this.baralla = [];
        this.cuerpo = [];
        this.arrayColors = []
        this.barallaGeneral = deck;
    }


    afegirCartaArray(carta) {
        this.baralla.push(carta);
    }

    moureCartaACos(pos) {
        const cartaNova = this.baralla.splice(pos, 1)[0];
        this.cuerpo.push(cartaNova);
        console.log(this.baralla);
        console.log(this.cuerpo);

    }

    posarCartaBaralla(pos) {
        const cartaNova = this.baralla.splice(pos, 1)[0];
        this.barallaGeneral.cartes.unshift(cartaNova);
    }

    actualitzarPosicionsBaralla(nom) {
        const contenidor = document.getElementById(`ma${nom}`);
        const divs = contenidor.getElementsByClassName("carta");
        Array.from(divs).forEach((div, index) => {
            div.dataset.position = index;
        });
    }

    tornarCartaMa(carta, pos, nom) {
        const contenidor = document.getElementById(`ma${nom}`);
        const cartaReferencia = contenidor.children[pos];
        contenidor.insertBefore(carta, cartaReferencia);
    }

    comprovarColors(carta, color) {
        let repetida = false;
        if (!this.arrayColors.includes(color)) {
            this.arrayColors.push(color);
            return repetida;
        } else {
            this.tornarCartaMa(carta, carta.dataset.position, this.nom);
            repetida = true;
            return repetida;
        }
    }
}