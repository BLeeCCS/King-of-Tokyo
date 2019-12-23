class monster {
    constructor(name) {
        this.name = name;
        this.lifePoint = 10;
        this.victoryPoint = 0;
        this.energyPoint = 0;
        this.alive = true;
        this.dice = [];
        this.rollAgain = true;
        this.count = 0;
    }

    rollDice() {
        const diceSet = ["1","2","3","heart","energy","victory"];
        
        for (let i = 0; i < 6; i ++) {
            var random = Math.floor(Math.random(6) * 6 + 1);
            this.dice.push(diceSet[random-1]);
        }

        for (let i = 0; i < this.dice.length; i++) {
            switch(this.dice[i]) {
                case "1":
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/one.png)"});
                    break;
                case "2":
                        $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/two.png)"});
                    break;
                case "3":
                        $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/three.png)"});
                    break;
                case "heart":
                        $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/heart.png)"});
                    break;
                case "energy":
                        $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/energy.png)"});
                    break;
                case "victory":
                        $("#"+this.name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/victory.png)"});
                    break;
            }
            this.count++;
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