import { randomizeTurn } from "./randomizeTurnOrder.js";

export function start(monsters) {
    let randomizeMonsters = randomizeTurn(monsters);
    console.log (randomizeMonsters);

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