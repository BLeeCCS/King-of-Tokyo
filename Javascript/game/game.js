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
        turn(this.monsterObjectArray);
    }

    gameTurn() {

        start = setInterval(() => {
            if (this.player === this.monsters[this.next]) {
                let speed = this.determineSpeed();

                if (this.playerMonster.count < 3) {

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
                            this.playerMonster.yield(this.tokyoCity,this.tokyoBay);

                            if (!this.tokyoCity) {
                                if (!this.playerMonster.inTokyo) {
                                    this.playerMonster.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                                    this.tokyoCity = true;
                                }
                            } else if (!this.tokyoBay) {
                                if (!this.playerMonster.inBay) {
                                    this.playerMonster.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                                    this.tokyoBay = true;
                                }
                            }

                            setTimeout(() => {
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
                    }, 4500);

                        this.playerMonster.resolveDice(this.monsterObj);
                        this.renderMonsterStat();
                        this.playerMonster.yield(this.tokyoCity,this.tokyoBay);

                        if (!this.tokyoCity) {
                            if (!this.playerMonster.inTokyo) {
                                this.playerMonster.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                                this.tokyoCity = true;
                            }
                        } else if (!this.tokyoBay) {
                            if (!this.playerMonster.inBay) {
                                this.playerMonster.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                                this.tokyoBay = true;
                            }
                        }

                        setTimeout(() => {
                            this.clearDice();
                            this.playerMonster.count = 1;
                            this.gameTurn();
                        }, speed);
                    })
                }
            }
        },4500);

        this.round++;
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
        console.log("tokyoCity " + this.tokyoCity)
        console.log("tokyoBay " + this.tokyoBay)

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

                    if (!this.tokyoCity) {
                        this.mekadragon.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.mekadragon.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay = true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.mekadragon.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay) {
                    //     this.tokyoBay = this.mekadragon.yield(this.tokyoCity,this.tokyoBay);
                    // }
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

                    if (!this.tokyoCity) {
                        this.alienoid.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.alienoid.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay = true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.alienoid.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay) {
                    //     this.tokyoBay = this.alienoid.yield(this.tokyoCity,this.tokyoBay);
                    // }
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

                    if (!this.tokyoCity) {
                        this.theking.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.theking.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay= true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.theking.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay) {
                    //     this.tokyoBay = this.theking.yield(this.tokyoCity,this.tokyoBay);
                    // }
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

                    if (!this.tokyoCity) {
                        this.cyberkitty.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.cyberkitty.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay = true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.cyberkitty.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay ) {
                    //     this.tokyoBay = this.cyberkitty.yield(this.tokyoCity,this.tokyoBay);
                    // }
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

                    if (!this.tokyoCity) {
                        this.gigazaur.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.gigazaur.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay = true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.gigazaur.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay) {
                    //     this.tokyoBay = this.gigazaur.yield(this.tokyoCity,this.tokyoBay);
                    // }
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

                    if (!this.tokyoCity) {
                        this.spacepenguin.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoCity = true;
                    } else if (!this.tokyoBay) {
                        this.spacepenguin.enterTokyo(this.tokyoCity,this.tokyoBay,this.monsters);
                        this.tokyoBay = true;
                    }

                    // if (this.tokyoCity) {
                    //     this.tokyoCity = this.spacepenguin.yield(this.tokyoCity,this.tokyoBay);
                    // } else if (this.tokyoBay) {
                    //     this.tokyoBay = this.spacepenguin.yield(this.tokyoCity,this.tokyoBay);
                    // }
                }
                break;
                
        }
        

    }
}
