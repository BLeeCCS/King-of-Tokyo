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
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.mekadragon = new monster("mekadragon");
                        this.monsterObj.push(this.mekadragon);
                    }
                    break;
                case "alienoid":
                    if (this.player == "alienoid") {
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.alienoid = new monster("alienoid");
                        this.monsterObj.push(this.alienoid);
                    }
                    break;
                case "theking":
                    if (this.player == "theking") {
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.theking = new monster("theking");
                        this.monsterObj.push(this.theking);
                    }
                    break;
                case "cyberkitty":
                    if (this.player == "cyberkitty") {
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.cyberkitty = new monster("cyberkitty");
                        this.monsterObj.push(this.cyberkitty);
                    }
                    break;
                case "gigazaur":
                    if (this.player == "gigazaur") {
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.gigazaur = new monster("gigazaur");
                        this.monsterObj.push(this.gigazaur);
                    }
                    break;
                case "spacepenguin":
                    if (this.player == "spacepenguin") {
                        this.playerMonster = new monster(this.player);
                        this.monsterObj.push(this.playerMonster);
                    } else {
                        this.spacepenguin = new monster("spacepenguin");
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

        $("#choice").css("visibility","visible");
        $("#textChoice").text("Round " + this.round);
        start = setInterval(() => {
            if (this.player === this.monsters[this.next]) {
                clearInterval(start);
                clearTimeout(startAgain);
                $("#choice").css("visibility","visible");
                $("#textChoice").text("Player Turn!");
                this.monsterTurn(this.player);
                
                var speed = null;
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
                                    $("#textChoice").text(this.monsters[this.next].toUpperCase());
                                this.monsterTurn(this.monsters[this.next]);
                                
                                if (this.next != this.numOfPlayers) {
                                    this.next++;
                                }
                                
                                if(this.next == this.numOfPlayers) {
                                    clearInterval(enemyStart);
                                }
                            }, 4000);
                            $("#yes").off("click");
                            
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
                        
                            this.playerMonster.resolveDice(this.monsters);

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
                            $("#textChoice").text(this.monsters[this.next].toUpperCase());
                            this.monsterTurn(this.monsters[this.next]);
                            
                            if (this.next != this.numOfPlayers) {
                                this.next++;
                            }
                            
                            if(this.next == this.numOfPlayers) {
                                clearInterval(enemyStart);
                            }
                        }, 4000);
                        $("#no").off("click");

                        this.playerMonster.resolveDice(this.monsters);
                        
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
                $("#choice").css("visibility","visible");
                $("#textChoice").text(this.monsters[this.next].toUpperCase());
                this.monsterTurn(this.monsters[this.next]);
                $("#yes").off("click"); 
                $("#no").off("click");
            }
            this.next++;
        },4000);

        this.round++;
    }

    renderMonsterStat() {
        $("#"+this.player+"_s > #victory").text(this.playerMonster.victoryPoint);
        $("#"+this.player+"_s > #energy").text(this.playerMonster.energyPoint);
        $("#"+this.player+"_s > #heart").text(this.playerMonster.lifePoint);
        
        
        for (var i = 0; i < this.turnOrder.length; i++) {
            switch(this.turnOrder[i].name) {
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
    
                    if (!this.tokyoBay) {
                        this.mekadragon.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.mekadragon.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
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
    
                    if (!this.tokyoBay) {
                        this.alienoid.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.alienoid.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
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
    
                    if (!this.tokyoBay) {
                        this.cyberkitty.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.cyberkitty.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
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
    
                    if (!this.tokyoBay) {
                        this.gigazaur.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.gigazaur.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
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
    
                    if (!this.tokyoBay) {
                        this.spacepenguin.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoBay = true;
                    } else if (!this.tokyoCity) {
                        this.spacepenguin.enterTokyo(this.tokyoBay,this.tokyoCity,this.monsters);
                        this.tokyoCity = true;
                    }
                }
                break;
        }
    }
}   