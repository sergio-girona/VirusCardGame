import Card from './card.js';

/**
 * Classe Virus
 */
export default class Virus extends Card {
  /**
     * Constructor virus
     * @param {String}color
     * @param {String}imatge
     */
  constructor(color, imatge) {
    super(color);
    this.tipus='virus';
    this.imatge=imatge;
  }
}
