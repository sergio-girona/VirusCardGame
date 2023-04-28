import Jugador from "./jugador.js";

export default class Game{
    constructor(nom) {
        this.player= new Jugador(nom);
        this.npc1= new Jugador();
        this.npc2= new Jugador();
        this.currentPlayer= this.player;
    }

}