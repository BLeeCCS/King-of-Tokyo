import monster from "../monster/monster.js"
import { randomizeTurn } from "./randomizeTurnOrder.js";
import { setUpTurnIcons } from "./setUpTurnIcons.js"

export function start(monsters,player) { 
    const randomizeMonsters = randomizeTurn(monsters);

    setUpTurnIcons(randomizeMonsters);

    let monsterObjects = [];
    for (let i = 0; i < 6; i++) {
        switch(randomizeMonsters[i]) {
            case "mekadragon":
                if (player == "mekadragon") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let mekadragon = new monster("mekadragon",false,true);
                    monsterObjects.push(mekadragon);
                }
                break;
            case "alienoid":
                if (player == "alienoid") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let alienoid = new monster("alienoid",false,true);
                    monsterObjects.push(alienoid);
                }
                break;
            case "theking":
                if (player == "theking") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let theking = new monster("theking",false,true);
                    monsterObjects.push(theking);
                }
                break;
            case "cyberkitty":
                if (player == "cyberkitty") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let cyberkitty = new monster("cyberkitty",false,true);
                    monsterObjects.push(cyberkitty);
                }
                break;
            case "gigazaur":
                if (player == "gigazaur") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let gigazaur = new monster("gigazaur",false,true);
                    monsterObjects.push(gigazaur);
                }
                break;
            case "spacepenguin":
                if (player == "spacepenguin") {
                    let playerMonster = new monster(player,true,false);
                    monsterObjects.push(playerMonster);
                } else {
                    let spacepenguin = new monster("spacepenguin",false,true);
                    monsterObjects.push(spacepenguin);
                }
                break;
            default:
                break;
        }
    }

    return monsterObjects;
}