import Jugador from './jugador.js';
import {donarCarta} from './main.js';

/**
 * Classe Game
 */
export default class Game {
  /**
     * Constructor Game
     */
  constructor() {
    this.player= new Jugador('JUGADOR');
    this.npc= new Jugador('NPC');
    this.currentPlayer= this.player;
    this.arrayTornar=[];
  }

  /**
     * Funció canviar user
     */
  changeUser() {
    if (this.currentPlayer.nom==='JUGADOR') {
      this.currentPlayer=this.npc;
    } else if (this.currentPlayer.nom==='NPC') {
      this.currentPlayer=this.player;
    }
  }
  /**
     * Funció per afegir un efecte de medicina o virus
     * @param{HTMLParamElement} carta
     * @param {int}pos
     */
  afegirEfecte(carta, pos) {
    let cartaNova;
    let organ;
    const div = carta.parentNode.id;
    if (carta.dataset.tipus==='virus') {
      if (div.includes(this.currentPlayer.nom)) {
        this.currentPlayer.tornarCartaMa(carta, carta.dataset.position,
            this.currentPlayer.nom);
      } else {
        this.changeUser();
        organ = this.currentPlayer.cuerpo.find((item) =>
          item.color === carta.parentNode.dataset.color);
        if (organ.efecte.length>=2) {
          this.changeUser();
          this.currentPlayer.tornarCartaMa(carta, carta.dataset.position,
              this.currentPlayer.nom);
        } else {
          this.changeUser();
          cartaNova = this.currentPlayer.baralla.splice(pos, 1)[0];
          this.changeUser();
          organ.efecte.push(cartaNova);
          organ.estatOrgan(div);
          this.changeUser();
          donarCarta();
          this.currentPlayer.
              actualitzarPosicionsBaralla(this.currentPlayer.nom);
          this.changeUser();
        }
      }
    } else if (carta.dataset.tipus==='medicina') {
      if (!div.includes(this.currentPlayer.nom)) {
        this.currentPlayer.tornarCartaMa(carta, carta.dataset.position,
            this.currentPlayer.nom);
      } else {
        organ = this.currentPlayer.cuerpo.find((item) =>
          item.color === carta.parentNode.dataset.color);
        if (organ.efecte.length>=2) {
          this.currentPlayer.tornarCartaMa(carta, carta.dataset.position,
              this.currentPlayer.nom);
        } else {
          cartaNova = this.currentPlayer.baralla.splice(pos, 1)[0];
          organ.efecte.push(cartaNova);
          organ.estatOrgan(div);
          donarCarta();
          this.changeUser();
        }
      }
    } else {
      this.currentPlayer.tornarCartaMa(carta, carta.dataset.position,
          this.currentPlayer.nom);
    }
    this.currentPlayer.actualitzarPosicionsBaralla(this.currentPlayer.nom);
  }
}
