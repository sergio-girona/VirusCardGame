import Card from "./card.js";
export default class Medicina extends Card{
    constructor(color, imatge) {
        super(color);
        this.tipus="medicina"
        this.imatge=imatge;
    }
}