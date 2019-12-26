class monster {
    constructor(name) {
        this.name = name;
        this.lifePoint = 10;
        this.victoryPoint = 0;
        this.energyPoint = 0;
        this.alive = true;
        this.dice = [];
        this.rollAgain = true;
        this.count = 1;
    }

    rollDice() {
        const diceSet = ["one","two","three","heart","energy","smash"];
        let diceStart = null;
        let diceCount = 0;
        
        for (let i = 0; i < 6; i++) {
            var random = Math.floor(Math.random(6) * 6 + 1);
            this.dice.push(diceSet[random-1]);
        }

        var animation = setInterval(()=>{
            let random = Math.floor(Math.random(6) * 6);
            $("#"+this.name+"_s > #diceContainer > :nth-child(1)").css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
        },50);

        diceStart = setInterval(() => {
            switch(this.dice[diceCount]) {
                case "one":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/one.png)"});
                    break;
                case "two":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/two.png)"});
                    break;
                case "three":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/three.png)"});
                    break;
                case "heart":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/heart.png)"});
                    break;
                case "energy":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/energy.png)"});
                    break;
                case "smash":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/smash.png)"});
                    break;
            }
            diceCount++;

            animation = setInterval(()=>{
                let random = Math.floor(Math.random(6) * 6);
                $("#"+this.name+"_s > #diceContainer > :nth-child("+(diceCount+1)+")").css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
            },50);

            if (diceCount == this.dice.length){
                clearInterval(diceStart);
            }
        }, 500);
        
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