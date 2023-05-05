import Jugador from "./jugador.js";

export default class Game{
    constructor(nom) {
        this.player= new Jugador(nom);
        this.currentPlayer= this.player;
    }

}