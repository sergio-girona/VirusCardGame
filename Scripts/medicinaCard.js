import Card from './card.js';

/**
 * Classe Medicina filla de Carta
 */
export default class Medicina extends Card {
  /**
     * Constructor medicina
     * @param {String}color
     * @param {String}imatge
     */
  constructor(color, imatge) {
    super(color);
    this.tipus='medicina';
    this.imatge=imatge;
  }
}
