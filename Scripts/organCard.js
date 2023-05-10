import Card from "./card.js";
export default class Organ extends Card{
    constructor(color,imatge) {
        super(color);
        this.efecte=[];
        this.estat='neutre'
        this.tipusCarta='organo';
        this.imatge=imatge;
    }
   /* estatOrgan(){
        if(this.efecte[0].tipus==="medicina"&&this.efecte[1].tipus==="medicina") {
            this.estat = "immune";
        }
        if(this.efecte[0].tipus==="virus"&&this.efecte[1].tipus==="virus") {
            this.estat = "mort";
        }
        else{
            this.estat="neutre"
        }
    }*/
}