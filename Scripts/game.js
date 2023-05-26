import Jugador from "./jugador.js";
import {donarCarta} from "./main.js";

export default class Game{
    constructor() {
        this.player= new Jugador("JUGADOR");
        this.npc= new Jugador("NPC")
        this.currentPlayer= this.player;
        this.arrayTornar=[];
    }

    changeUser(){
        if(this.currentPlayer.nom==="JUGADOR"){
            this.currentPlayer=this.npc;
        }
        else if(this.currentPlayer.nom==="NPC"){
            this.currentPlayer=this.player;
        }
    }
    afegirEfecte(carta,pos){
        let cartaNova;
        let organ;
        const div = carta.parentNode.id;
        if(carta.dataset.tipus==="virus"){
            if(div.includes(this.currentPlayer.nom)){
                this.currentPlayer.tornarCartaMa(carta, carta.dataset.position, this.currentPlayer.nom);
            }
            else{
                cartaNova = this.currentPlayer.baralla.splice(pos, 1)[0];
                this.changeUser();
                organ = this.currentPlayer.cuerpo.find(item => item.color === carta.parentNode.dataset.color);
                organ.efecte.push(cartaNova);
                organ.estatOrgan(div);
                this.changeUser();
                donarCarta();
            }
        }
        else if (carta.dataset.tipus==="medicina"){
            if(!div.includes(this.currentPlayer.nom)){
                this.currentPlayer.tornarCartaMa(carta, carta.dataset.position, this.currentPlayer.nom);
            }
            else{
                cartaNova = this.currentPlayer.baralla.splice(pos, 1)[0];
                organ = this.currentPlayer.cuerpo.find(item => item.color === carta.parentNode.dataset.color);
                organ.efecte.push(cartaNova);
                organ.estatOrgan(div);
                donarCarta();
                this.changeUser();
            }
        }
        else{
            this.currentPlayer.tornarCartaMa(carta, carta.dataset.position, this.currentPlayer.nom);
        }
    }
}