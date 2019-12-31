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
