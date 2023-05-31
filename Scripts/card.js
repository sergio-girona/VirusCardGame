/**
 * Classe pare de les altres cartes
 */
export default class Card {
  static colors = ['Rojo', 'Verde', 'Amarillo', 'Azul'];

  /**
     *Constructor base per les altres cartes
     * @param {String}color
     */
  constructor(color) {
    this.color=color;
  }
}
