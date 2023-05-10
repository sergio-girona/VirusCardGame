import Card from "./card.js";
export default class Virus extends Card{
    constructor(color, imatge) {
        super(color);
        this.tipus="virus";
        this.imatge=imatge;
    }
}