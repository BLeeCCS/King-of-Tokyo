import { roll } from "./rollDice.js"
import { resolve } from "./resolveDice.js"
import { pickOne } from "./pickOne.js"
import { buyCards } from "./buyCards.js"

export default class monster {
    constructor(name,player,ai) {
        this.name = name;
        this.player = player;
        this.AI = ai;
        this.lifePoint = 10;
        this.victoryPoint = 0;
        this.energyPoint = 0;
        this.alive = true;
        this.dice = [];
        this.count = 1;
        this.inTokyo = false;
        this.inBay = false;
        this.firstTurn = true;

        this.backgroundDweller = false;
    }

    rollDice() {
        roll(this.name,this.dice,this.count);
    }

    pickDie(monster,dicePosition,count) {
        pickOne(monster,dicePosition,count);   
    }

    resolveDice(monster,monsterArray,next) {
        resolve(this.dice,monster,monsterArray,next);
    }

    buyPowerCards(monster,card1,card2,card3,deck) {
        buyCards(monster,card1,card2,card3,deck);
    }

    endOfTurn() {

    }
}