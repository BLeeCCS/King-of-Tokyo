class game {
    constructor(name) {
        this.monsters = ["mekadragon",
                         "alienoid",
                         "theking",
                         "cyberkitty",
                         "gigazaur",
                         "spacepenquin"];
        this.numOfPlayers = this.monsters.length;
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
        this.gameStart();
    }

    gameStart() {
        for (let i = 0; i < this.numOfPlayers; i++) {
            if (this.player === this.monsters[i]) {
                this.monsters.splice(i,1);
            }
        }
        this.playerMonster = new monster(this.player);

        for (let i = 0; i < this.monsters.length; i++) {
            switch(this.monsters[i]) {
                case "mekadragon":
                    this.mekadragon = new monster("mekadragon");
                    break;
                case "alienoid":
                    this.alienoid = new monster("alienoid");
                    break;
                case "theking":
                    this.theking = new monster("theking");
                    break;
                case "cyberkitty":
                    this.cyberkitty = new monster("cyberkitty");
                    break;
                case "gigazaur":
                    this.gigazaur = new monster("gigazaur");
                    break;
                case "spacepenquin":
                    this.spacepenquin = new monster("spacepenquin");
                    break;
            }
        }
        this.gameTurn();
    }

    gameTurn() {
        while (this.playerMonster.alive != false || this.playerMonster.victoryPoint != 20) {
            $("#"+this.player+"_s > #victory").text(this.playerMonster.victoryPoint);
            $("#"+this.player+"_s > #energy").text(this.playerMonster.energyPoint);
            $("#"+this.player+"_s > #heart").text(this.playerMonster.lifePoint);
        
            for (let i = 0; i < this.monsters.length; i++) {
                switch(this.monsters[i]) {
                    case "mekadragon":
                        $("#mekadragon_s > #victory").text(this.mekadragon.victoryPoint);
                        $("#mekadragon_s > #energy").text(this.mekadragon.energyPoint);
                        $("#mekadragon_s > #heart").text(this.mekadragon.lifePoint);
                        break;
                    case "alienoid":
                        $("#alienoid_s > #victory").text(this.alienoid.victoryPoint);
                        $("#alienoid_s  > #energy").text(this.alienoid.energyPoint);
                        $("#alienoid_s  > #heart").text(this.alienoid.lifePoint);
                        break;
                    case "theking":
                        $("#theking_s > #victory").text(this.theking.victoryPoint);
                        $("#theking_s > #energy").text(this.theking.energyPoint);
                        $("#theking_s > #heart").text(this.theking.lifePoint);
                        break;
                    case "cyberkitty":
                        $("#cyberkitty_s > #victory").text(this.cyberkitty.victoryPoint);
                        $("#cyberkitty_s > #energy").text(this.cyberkitty.energyPoint);
                        $("#cyberkitty_s > #heart").text(this.cyberkitty.lifePoint);
                        break;
                    case "gigazaur":
                        $("#gigazaur_s > #victory").text(this.gigazaur.victoryPoint);
                        $("#gigazaur_s > #energy").text(this.gigazaur.energyPoint);
                        $("#gigazaur_s > #heart").text(this.gigazaur.lifePoint);
                        break;
                    case "spacepenquin":
                        $("#spacepenquin_s > #victory").text(this.spacepenquin.victoryPoint);
                        $("#spacepenquin_s > #energy").text(this.spacepenquin.energyPoint);
                        $("#spacepenquin_s > #heart").text(this.spacepenquin.lifePoint);
                        break;
                }
            }
            this.playerMonster.rollDice();

            debugger;
            $("#diceChoice").css("visibility","visible");
            $("#yes").on("click",()=>{
                alert("roll again?");
            })
            $("#no").on("click",()=>{
                this.playerMonster.rollAgain = false;
                this.playerMonster.count = 3;
                $("#diceChoice").css("visibility","hidden");
            })

            
            this.playerMonster.alive = false;
            this.playerMonster.victoryPoint = 20;
        }

    }
}   