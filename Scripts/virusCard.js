import Card from "./card.js";
export default class Virus extends Card{
    constructor(color, imatge) {
        super(color, imatge);
        this.tipus="virus";
    }
}