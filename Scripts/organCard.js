import Card from "./card.js";
export default class Organ extends Card{
    constructor(color,imatge) {
        super(color);
        this.efecte=[];
        this.estat='neutre'
        this.tipus='organo';
        this.imatge=imatge;
    }
   estatOrgan(div){
        if (this.efecte.length===2){
            if(this.efecte[0].tipus==="medicina"&&this.efecte[1].tipus==="medicina") {
                this.estat = "immune";
            }
            if(this.efecte[0].tipus==="virus"&&this.efecte[1].tipus==="virus") {
                this.estat = "mort";
                const divBorrar = document.getElementById(div);
                divBorrar.innerHTML="";
                divBorrar.dataset.color="null";
            }
            else{
                this.estat="neutre"
            }
        }
        console.log(this.estat);
    }
}