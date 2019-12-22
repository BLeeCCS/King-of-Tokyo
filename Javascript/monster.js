class monster {
    constructor(name) {
        this.name = name;
        this.lifePoint = 10;
        this.victoryPoint = 0;
        this.energyPoint = 0;
        this.alive = true;
        this.dice = [];
    }

    rollDice() {
        const diceSet = ["1","2","3","heart","energy","victory"];
        for (let i = 0; i < 6; i ++) {
            var random = Math.floor(Math.random(6) * 6 + 1);
            this.dice.push(diceSet[random-1]);
        }

    }

    resolveDice() {

    }

    enterTokyo() {

    }

    buyPowerCards() {

    }

    endOfTurn() {

    }
}