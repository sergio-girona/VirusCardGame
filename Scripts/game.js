import Jugador from "./jugador.js";

export default class Game{
    constructor(nom) {
        this.player= new Jugador(nom);
        this.player2= new Jugador();
        this.npc1= new Jugador();
        this.currentPlayer= this.player;
    }

}