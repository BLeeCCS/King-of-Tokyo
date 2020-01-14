import { start } from "./start.js"
import { turn } from "./turn.js";

export default class game {
    constructor(name) {
        this.monsters = ["mekadragon","alienoid","theking","cyberkitty","gigazaur","spacepenguin"];
        this.monsterObjectArray = [];
        this.turnOrder = [];                 
        this.numOfPlayers = this.monsters.length;
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
        this.round = 1;
        this.next = 0;
    }

    gameStart() {
        this.monsterObjectArray = start(this.monsters,this.player);
        turn(this.monsterObjectArray,this.round);
    }
}