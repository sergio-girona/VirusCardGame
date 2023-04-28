import Organ from "./organCard.js";
import Virus from "./virusCard.js";
import Medicina from "./medicinaCard.js";
import Card from "./card.js";
export default class Deck{
    constructor() {
        this.cartes=[];
    }

    /**
     * Void per crear les cartes
     */
    createDeck() {
        let cont=0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < Card.colors.length; j++) {
                this.cartes.push(new Organ(Card.colors[j]));
            }
        }
        this.cartes.push(new Organ('multicolor'));

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < Card.colors.length; j++) {
                this.cartes.push(new Virus(Card.colors[j]));
            }
        }
        this.cartes.push(new Virus('multicolor'));

       for (let i = 0; i < 4; i++) {
            for (let j = 0; j < Card.colors.length; j++) {
                this.cartes.push(new Medicina(Card.colors[j]));
            }
        }
       while(cont<4){
            this.cartes.push(new Medicina('multicolor'));
            cont++;
        }
    }

    /**
     * Void per barrejar les cartes
     */
    shuffleArray(){
        let indexActual = this.cartes.length;
        let valorTemporal, indexAleatori;

        while (0 !== indexActual) {
            indexAleatori = Math.floor(Math.random() * indexActual);
            indexActual -= 1;
            valorTemporal = this.cartes[indexActual];
            this.cartes[indexActual] = this.cartes[indexAleatori];
            this.cartes[indexAleatori] = valorTemporal;
        }
        console.log(this.cartes);
    }
}