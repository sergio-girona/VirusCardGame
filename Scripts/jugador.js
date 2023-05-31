import Deck from './deck.js';
const deck = new Deck();
deck.createDeck();
deck.shuffleArray();
deck.shuffleArray();
/**
 * Classe Jugador
 */
export default class Jugador {
  /**
     * Constructor Jugador
     * @param {String}nom
     */
  constructor(nom) {
    this.nom = nom;
    this.baralla = [];
    this.cuerpo = [];
    this.arrayColors = [];
    this.barallaGeneral = deck;
  }

  // eslint-disable-next-line valid-jsdoc
  /**
     * Funció per afegir cartes a la array
     * @param {Organ,Virus,Medicina}carta
     */
  afegirCartaArray(carta) {
    this.baralla.push(carta);
  }

  /**
     * Funció canviar cartes entre array
     * @param{number} pos
     */
  moureCartaACos(pos) {
    const cartaNova = this.baralla.splice(pos, 1)[0];
    this.cuerpo.push(cartaNova);
    console.log(this.baralla);
    console.log(this.cuerpo);
  }

  /**
   *Funció retornar cartes a la barallaGeneral
   * @param{number} pos
   */
  posarCartaBaralla(pos) {
    const cartaNova = this.baralla.splice(pos, 1)[0];
    this.barallaGeneral.cartes.unshift(cartaNova);
  }

  /**
   * Funció per actualitzat els dataset position de les cartes de la mà
   * @param{String}nom
   */
  actualitzarPosicionsBaralla(nom) {
    const contenidor = document.getElementById(`ma${nom}`);
    const divs = contenidor.getElementsByClassName('carta');
    Array.from(divs).forEach((div, index) => {
      div.dataset.position = index;
    });
  }

  /**
   * Funció per tornar cartes a la mà del jugador
   * @param{HTMLParamElement} carta
   * @param {number}pos
   * @param {String}nom
   */
  tornarCartaMa(carta, pos, nom) {
    const contenidor = document.getElementById(`ma${nom}`);
    const cartaReferencia = contenidor.children[pos];
    contenidor.insertBefore(carta, cartaReferencia);
  }

  /**
   * Funció que comprova els colors dels jugadors
   * @param {HTMLElement}carta
   * @param{String} color
   * @return {boolean}
   */
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
