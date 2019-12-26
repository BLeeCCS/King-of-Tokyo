class game {
    constructor(name) {
        this.monsters = ["mekadragon",
                         "alienoid",
                         "theking",
                         "cyberkitty",
                         "gigazaur",
                         "spacepenquin"];
        this.numOfPlayers = this.monsters.length;
        this.turnOrder = [];
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
        this.round = 1;
    }

    gameStart() {
        for (let i = this.monsters.length; i > 0; i--) {
            var random = Math.floor(Math.random(i) * i);
            var monsterZ = this.monsters.splice(random,1);
            this.turnOrder.push(monsterZ + "");
        }

        for (let i = 0; i < this.turnOrder.length; i++) {
            this.monsters.push(this.turnOrder[i]);
        }

        for (let i = 0; i < this.numOfPlayers; i++) {
            if (this.player == this.turnOrder[i]) {
                this.turnOrder.splice(i,1);
            }
        }
        this.playerMonster = new monster(this.player);

        for (var i = 0; i < this.monsters.length; i++) {
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

        this.renderMonsterStat();
        this.gameTurn();
    }

    gameTurn() {
        let start = null;
        let startAgain = null;
        let enemyStart = null;
        let next = 0;

        this.renderMonsterStat();
        clearTimeout(startAgain);

        $("#choice").css("visibility","visible");
        $("#textChoice").text("Round " + this.round);
        start = setInterval(() => {
            if (this.player === this.monsters[next]) {
                clearInterval(start);
                clearTimeout(startAgain);
                $("#choice").css("visibility","visible");
                $("#textChoice").text("Player Turn!");
                this.monsterTurn(this.player);
                
                var speed = null;
                switch(next) {
                    case 0:
                        speed = 45000;
                        break;
                    case 1:
                        speed = 37500;
                        break;
                    case 2:
                        speed = 30000;
                        break;
                    case 3:
                        speed = 22500;
                        break;
                    case 4:
                        speed = 15000;
                        break;
                    case 5:
                        speed = 7500;
                        break;
                }

                if (this.playerMonster.count < 3) {
                    setTimeout(() => {
                        $("#choice").css("visibility","visible");
                        $(".button").css("visibility","visible");
                        $("#textChoice").text("Roll again?");
                    }, 3500);

                    $("#yes").on("click",()=>{
                        this.playerMonster.dice = [];
                        this.playerMonster.rollDice();
                        this.playerMonster.count++;

                        if (this.playerMonster.count == 3) {
                                $("#choice").css("visibility","hidden");
                                $(".button").css("visibility","hidden");
                                enemyStart = setInterval(() => {
                                    $("#choice").css("visibility","visible");
                                    $("#textChoice").text(this.monsters[next].toUpperCase());
                                this.monsterTurn(this.monsters[next]);
                                next++;
                                if(next == this.numOfPlayers) {
                                    clearInterval(enemyStart);
                                }
                            }, 4000);
                            $("#yes").off("click");

                            this.playerMonster.resolveDice(this.monsters);
                            
                            if (!this.tokyoBay) {
                                this.playerMonster.enterTokyo(this.tokyoBay,this.monsters);
                                this.tokyoBay = true;
                            } else if (!this.tokyoCity) {
                                this.playerMonster.enterTokyo(this.tokyoCity,this.monsters);
                                this.tokyoCity = true;
                            }
                        
                            startAgain = setTimeout(() => {
                                this.clearDice();
                                this.playerMonster.count = 1;
                                this.gameTurn();
                            }, speed);
                        }
                    })
                    $("#no").on("click",()=>{
                            $("#choice").css("visibility","hidden");
                            $(".button").css("visibility","hidden");
                            enemyStart = setInterval(() => {
                            $("#choice").css("visibility","visible");
                            $("#textChoice").text(this.monsters[next].toUpperCase());
                            this.monsterTurn(this.monsters[next]);
                            next++;
                            if(next == this.numOfPlayers) {
                                clearInterval(enemyStart);
                            }
                        }, 4000);
                        $("#no").off("click");

                        this.playerMonster.resolveDice(this.monsters);
                        
                        if (!this.tokyoBay) {
                            this.playerMonster.enterTokyo(this.tokyoBay,this.monsters);
                            this.tokyoBay = true;
                        } else if (!this.tokyoCity) {
                            this.playerMonster.enterTokyo(this.tokyoCity,this.monsters);
                            this.tokyoCity = true;
                        }

                        startAgain = setTimeout(() => {
                            this.clearDice();
                            this.playerMonster.count = 1;
                            this.gameTurn();
                        }, speed);
                    })
                }
            } else {
                $("#choice").css("visibility","visible");
                $("#textChoice").text(this.monsters[next].toUpperCase());
                this.monsterTurn(this.monsters[next]);
                $("#yes").off("click"); 
                $("#no").off("click");
            }
            next++;
        },4000);

        this.round++;
    }

    renderMonsterStat() {
        $("#"+this.player+"_s > #victory").text(this.playerMonster.victoryPoint);
        $("#"+this.player+"_s > #energy").text(this.playerMonster.energyPoint);
        $("#"+this.player+"_s > #heart").text(this.playerMonster.lifePoint);
        
        
        for (var i = 0; i < this.monsters.length; i++) {
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
    }
    
    clearDice() {
        $(".diceContainer > div").css({"background-image":""});
    }

    monsterTurn(name) {
        switch(name) {
            case "mekadragon":
                this.mekadragon.dice = [];
                this.mekadragon.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.mekadragon.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.mekadragon.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
            case "alienoid":
                this.alienoid.dice = [];
                this.alienoid.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.alienoid.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.alienoid.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
            case "theking":
                this.theking.dice = [];
                this.theking.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.theking.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.theking.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
            case "cyberkitty":
                this.cyberkitty.dice = [];
                this.cyberkitty.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.cyberkitty.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.cyberkitty.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
            case "gigazaur":
                this.gigazaur.dice = [];
                this.gigazaur.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.gigazaur.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.gigazaur.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
            case "spacepenquin":
                this.spacepenquin.dice = [];
                this.spacepenquin.rollDice();
                debugger
                if (!this.tokyoBay) {
                    this.spacepenquin.enterTokyo(this.tokyoBay,this.monsters);
                    this.tokyoBay = true;
                } else if (!this.tokyoCity) {
                    this.spacepenquin.enterTokyo(this.tokyoCity,this.monsters);
                    this.tokyoCity = true;
                }
                break;
        }
    }
}   