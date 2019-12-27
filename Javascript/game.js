class game {
    constructor(name) {
        this.monsters = ["mekadragon",
                         "alienoid",
                         "theking",
                         "cyberkitty",
                         "gigazaur",
                         "spacepenguin"];
        this.numOfPlayers = this.monsters.length;
        this.turnOrder = [];
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
        this.round = 1;
        this.next = 0;
        this.monsterObj = [];
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

        for (var i = 0; i < 6; i++) {
            switch(this.monsters[i]) {
                case "mekadragon":
                    if (this.player == "mekadragon") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.mekadragon = new monster("mekadragon",false,true);
                        this.monsterObj.push(this.mekadragon);
                    }
                    break;
                case "alienoid":
                    if (this.player == "alienoid") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.alienoid = new monster("alienoid",false,true);
                        this.monsterObj.push(this.alienoid);
                    }
                    break;
                case "theking":
                    if (this.player == "theking") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.theking = new monster("theking",false,true);
                        this.monsterObj.push(this.theking);
                    }
                    break;
                case "cyberkitty":
                    if (this.player == "cyberkitty") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.cyberkitty = new monster("cyberkitty",false,true);
                        this.monsterObj.push(this.cyberkitty);
                    }
                    break;
                case "gigazaur":
                    if (this.player == "gigazaur") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.gigazaur = new monster("gigazaur",false,true);
                        this.monsterObj.push(this.gigazaur);
                    }
                    break;
                case "spacepenguin":
                    if (this.player == "spacepenguin") {
                        this.playerMonster = new monster(this.player,true,false);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.spacepenguin = new monster("spacepenguin",false,true);
                        this.monsterObj.push(this.spacepenguin);
                    }
                    break;
            }
        }

        console.log(this.monsterObj);
        this.renderMonsterStat();
        this.gameTurn();
    }

    gameTurn() {
        let start = null;
        let startAgain = null;
        let enemyStart = null;
        this.next = 0;

        this.renderMonsterStat();
        clearTimeout(startAgain);

        $("#textChoice").text("Round " + this.round);
        $("#choice").css("visibility","visible");

        start = setInterval(() => {
            if (this.player === this.monsters[this.next]) {
                clearInterval(start);
                clearTimeout(startAgain);
                
                $("#textChoice").text("Player Turn!");
                $("#choice").css("visibility","visible");
                
                this.monsterTurn(this.player);
                let speed = this.determineSpeed();

                if (this.playerMonster.count < 3) {
                    setTimeout(() => {
                        $("#textChoice").text("Roll again?");
                        $("#choice").css("visibility","visible");
                        $(".button").css("visibility","visible");
                    }, 3500);

                    $("#yes").on("click",()=>{
                        this.playerMonster.dice = [];
                        this.playerMonster.rollDice();
                        this.playerMonster.count++;

                        if (this.playerMonster.count == 3) {
                            $("#yes").off("click");
                            $("#no").off("click");
                            $("#choice").css("visibility","hidden");
                            $(".button").css("visibility","hidden");
                            enemyStart = setInterval(() => {
                                if(this.next <= 5) {
                                    $("#textChoice").text(this.monsters[this.next].toUpperCase());
                                    $("#choice").css("visibility","visible");
                                    this.monsterTurn(this.monsters[this.next]);
                                }
                                this.next++;

                                if(this.next >= this.numOfPlayers) {
                                    clearInterval(enemyStart);
                                }
                            }, 4000);
                            
                            this.playerMonster.resolveDice(this.monsterObj);
                            this.renderMonsterStat();
                            this.playerMonster.yield();

                            if (!this.tokyoBay) {
                                if (!this.playerMonster.inBay) {
                                    this.playerMonster.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters,this.next);
                                    this.tokyoBay = true;
                                }
                            } else if (!this.tokyoCity) {
                                if (!this.playerMonster.inTokyo) {
                                    this.playerMonster.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters,this.next);
                                    this.tokyoCity = true;
                                }
                            }

                            startAgain = setTimeout(() => {
                                this.clearDice();
                                this.playerMonster.count = 1;
                                this.gameTurn();
                            }, speed);
                        }
                    })

                    $("#no").on("click",()=>{
                        $("#no").off("click");
                        $("#yes").off("click");
                        $("#choice").css("visibility","hidden");
                        $(".button").css("visibility","hidden");
                        enemyStart = setInterval(() => {
                        
                        if(this.next <= 5) {
                            $("#textChoice").text(this.monsters[this.next].toUpperCase());
                            $("#choice").css("visibility","visible");
                            this.monsterTurn(this.monsters[this.next]);
                            
                        }
                        this.next++;
                           
                        if(this.next >= this.numOfPlayers) {
                            clearInterval(enemyStart);
                        }
                    }, 4000);
                        
                        this.playerMonster.resolveDice(this.monsterObj);
                        this.renderMonsterStat();
                        this.playerMonster.yield();
                        
                        if (!this.tokyoBay) {
                            if (!this.playerMonster.inBay) {
                                this.playerMonster.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters,this.next);
                                this.tokyoBay = true;
                            }
                        } else if (!this.tokyoCity) {
                            if (!this.playerMonster.inTokyo) {
                                this.playerMonster.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters,this.next);
                                this.tokyoCity = true;
                            }
                        }

                        startAgain = setTimeout(() => {
                            this.clearDice();
                            this.playerMonster.count = 1;
                            this.gameTurn();
                        }, speed);
                    })
                }
            } else {
                $("#textChoice").text(this.monsters[this.next].toUpperCase());
                $("#choice").css("visibility","visible");
                
                this.monsterTurn(this.monsters[this.next]);
                $("#yes").off("click"); 
                $("#no").off("click");
            }
            this.next++;
        },4000);

        this.round++;
    }

    renderMonsterStat() {
        debugger
        $("#"+this.player+"_s > #victory").text(this.playerMonster.victoryPoint);
        $("#"+this.player+"_s > #energy").text(this.playerMonster.energyPoint);
        $("#"+this.player+"_s > #heart").text(this.playerMonster.lifePoint);
        
        for (var i = 0; i < this.turnOrder.length; i++) {
            switch(this.turnOrder[i]) {
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
                case "spacepenguin":
                    $("#spacepenguin_s > #victory").text(this.spacepenguin.victoryPoint);
                    $("#spacepenguin_s > #energy").text(this.spacepenguin.energyPoint);
                    $("#spacepenguin_s > #heart").text(this.spacepenguin.lifePoint);
                    break;
            }
        }
    }
    
    clearDice() {
        $(".diceContainer > div").css({"background-image":""});
    }

    determineSpeed() {
        let speed = null;
        switch(this.next) {
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
        return speed;
    }

    monsterTurn(name) {
        switch(name) {
            case "mekadragon":
                if (this.player == "mekadragon") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.mekadragon.dice = [];
                    this.mekadragon.rollDice();
                    this.mekadragon.resolveDice(this.monsterObj);
                    this.renderMonsterStat();

                    if (!this.tokyoBay) {
                        this.mekadragon.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.mekadragon.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.mekadragon.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.mekadragon.yield();
                    }
                }
                break;
            case "alienoid":
                if (this.player == "alienoid") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.alienoid.dice = [];
                    this.alienoid.rollDice();
                    this.alienoid.resolveDice(this.monsterObj);
                    this.renderMonsterStat();
    
                    if (!this.tokyoBay) {
                        this.alienoid.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.alienoid.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.alienoid.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.alienoid.yield();
                    }
                }
                break;
            case "theking":
                if (this.player == "theking") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.theking.dice = [];
                    this.theking.rollDice();
                    this.theking.resolveDice(this.monsterObj);
                    this.renderMonsterStat();

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.theking.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.theking.yield();
                    }

                    if (!this.tokyoBay) {
                        this.theking.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.theking.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }
                }
                break;
            case "cyberkitty":
                if (this.player == "cyberkitty") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.cyberkitty.dice = [];
                    this.cyberkitty.rollDice();
                    this.cyberkitty.resolveDice(this.monsterObj);
                    this.renderMonsterStat();
            
                    if (!this.tokyoBay) {
                        this.cyberkitty.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.cyberkitty.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.cyberkitty.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.cyberkitty.yield();
                    }
                }
                break;
            case "gigazaur":
                if (this.player == "gigazaur") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.gigazaur.dice = [];
                    this.gigazaur.rollDice();
                    this.gigazaur.resolveDice(this.monsterObj);
                    this.renderMonsterStat();

                    if (!this.tokyoBay) {
                        this.gigazaur.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.gigazaur.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.gigazaur.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.gigazaur.yield();
                    }
                }
                break;
            case "spacepenguin":
                if (this.player == "spacepenguin") {
                    this.playerMonster.dice = [];
                    this.playerMonster.rollDice();
                    break;
                } else {
                    this.spacepenguin.dice = [];
                    this.spacepenguin.rollDice();
                    this.spacepenguin.resolveDice(this.monsterObj);
                    this.renderMonsterStat();
    
                    if (!this.tokyoBay) {
                        this.spacepenguin.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.spacepenguin.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }

                    if (this.tokyoBay == true) {
                        this.tokyoBay = this.spacepenguin.yield();
                    }
                    if (this.tokyoCity == true) {
                        this.tokyoCity = this.spacepenguin.yield();
                    }
                }
                break;
        }
    }
}   