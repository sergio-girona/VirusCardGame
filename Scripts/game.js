import Jugador from "./jugador.js";

export default class Game{
    constructor(nom) {
        this.player= new Jugador("JUGADOR");
        this.npc= new Jugador("NPC")
        this.currentPlayer= this.player;
    }

    changeUser(){
        if(this.currentPlayer.nom==="JUGADOR"){
            this.currentPlayer=this.npc;
        }
        if(this.currentPlayer==="NPC"){
            this.currentPlayer=this.player;
        }
    }
}