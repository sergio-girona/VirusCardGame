import Card from './card.js';
import {tornarEfectesOrgan} from './main.js';
/**
 * Classe Organ
 */
export default class Organ extends Card {
  /**
     * Constructor organ
     * @param {String} color
     * @param {String}imatge
     */
  constructor(color, imatge) {
    super(color);
    this.efecte=[];
    this.estat='neutre';
    this.tipus='organo';
    this.imatge=imatge;
  }

  /**
     * Funció per comprovar l'estat organ
     * @param {String} div
     */
  estatOrgan(div) {
    if (this.efecte.length===2) {
      if (this.efecte[0].tipus==='medicina'&&
          this.efecte[1].tipus==='medicina') {
        this.estat = 'immune';
      } else if (this.efecte[0].tipus==='virus'&&
          this.efecte[1].tipus==='virus') {
        this.estat = 'mort';
        const divBorrar = document.getElementById(div);
        divBorrar.innerHTML='';
        divBorrar.dataset.color='null';
      } else {
        const divBorrar = document.getElementById(div);
        const elementosBorrar =
            divBorrar.querySelectorAll(':nth-child(2), :nth-child(3)');
        elementosBorrar.forEach((element) => {
          element.remove();
        });
        for (let pos = 0; pos<this.efecte.length; pos++) {
          tornarEfectesOrgan(this.efecte[pos]);
        }
        this.efecte=[];
        this.estat='neutre';
      }
    } else {
      if (this.efecte[0].tipus==='virus') {
        this.estat='infectat';
      }
    }
    console.log(this.estat);
  }
}
