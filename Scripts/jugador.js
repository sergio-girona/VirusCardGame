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
        console.log(this.baralla);
        console.log(this.cuerpo);

    }
    treureCartaBaralla(pos){
        const cartaNova = this.baralla.splice(pos, 1)[0];
        this.barallaGeneral.cartes.unshift(cartaNova);
    }
    actualitzarPosicionsBaralla(){
        const contenidor = document.getElementById("maJUGADOR");
        const divs = contenidor.getElementsByClassName("carta");
        Array.from(divs).forEach((div, index) => {
            div.dataset.position = index;
        });
    }
    tornarCartaMa(carta, pos){
        const contenidor = document.getElementById("maJUGADOR");
        const cartaReferencia = contenidor.children[pos];
        contenidor.insertBefore(carta,cartaReferencia);
    }
    tornarCartaCos(carta, pos, div){
        const contenidor = document.getElementById(div);
        const cartaReferencia = contenidor.children[pos];
        contenidor.insertBefore(carta,cartaReferencia);
        console.log(this.baralla)
        console.log(this.cuerpo)
    }
    comprovarColors(carta,color){
        let repetida = false;
        if (!this.arrayColors.includes(color)){
            this.arrayColors.push(color);
            return repetida;
        }
        else{
            this.tornarCartaMa(carta, carta.dataset.position);
            repetida = true;
            return repetida;
        }
    }
    actualitzarPosicionsCos(carta, div){
        if(div==="carta1"){
            carta.dataset.position=1;
        }
        if(div==="carta2"){
            carta.dataset.position=2;
        }
        if(div==="carta3"){
            carta.dataset.position=3;
        }
        if(div==="carta4"){
            carta.dataset.position=4;
        }
    }
    afegirEfecte(pos){
        const cartaNova = this.baralla.splice(pos, 1)[0];

    }
}