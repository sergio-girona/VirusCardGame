import Card from "./card.js";
export default class Virus extends Card{
    constructor(color) {
        super(color);
        this.tipus="virus";
    }
    infectar(){

    }
}