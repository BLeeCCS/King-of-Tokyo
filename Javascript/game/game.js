import cards from "../cards/cards.js"
import { start } from "./start.js"
import { turn } from "./turn.js";

export default class game {
    constructor(name) {
        this.monsters = ["mekadragon","alienoid","theking","cyberkitty","gigazaur","spacepenguin"];
        this.monsterObjectArray = [];
        this.player = name;
        this.round = 1;
        this.deck = null;
    }

    gameStart() {
        this.deck = new cards();
        this.deck = this.deck.shuffle();

        this.monsterObjectArray = start(this.monsters,this.player);
        turn(this.monsterObjectArray,this.deck,this.round);
    }
}