import { monsterHeal } from "./monsterHeal.js";
import { monsterGainVictoryPoints } from "./monsterVictory.js";
import { monsterGainEnergy } from "./monsterEnergy.js"
import { displayText } from "../game/displayText.js"
import { monsterDamage } from "./monsterDamage.js"
import { enterCity } from "./enterCity.js";
import { renderMonsterStat } from "../game/renderStats.js"

export function resolve(dice,monster,monsterArray,next) {
    let heal = 0;
    let damage = 0;
    let energyPts = 0;
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;

    for (let i = 0; i < dice.length; i++) {
        switch(dice[i]) {
            case "one":
                oneCount++;
                break;
            case "two":
                twoCount++;
                break;
            case "three":
                threeCount++;
                break;
            case "heart":
                heal++;
                break;
            case "energy":
                energyPts++;
                break;
            case "smash":
                damage++;
                break;
        }
    }

    // Clock Start
    let clock = null;
    let clockCount = 0;
    clock = setInterval(() => {
        clockCount++;
        console.log(clockCount);
        if(clockCount == 20) {
            clearInterval(clock);
        }
    }, 1000);

    setTimeout(()=>{
        let text = monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster);
        console.log(text);
        displayText(text,"visible");
        renderMonsterStat(monsterArray,next);
    },3000)

    setTimeout(()=>{
        let text = monsterGainEnergy(energyPts,monster);
        console.log(text);
        displayText(text,"visible");
        renderMonsterStat(monsterArray,next);
    },5000)

    setTimeout(()=>{
        let text = monsterHeal(heal,monster);
        console.log(text);
        displayText(text,"visible");
        renderMonsterStat(monsterArray,next);
    },7000)

    monsterDamage(damage,monster,monsterArray);

    if(!monster.inBay && !monster.inTokyo){
        setTimeout(()=>{
            enterCity(monster,monsterArray);
        },18000)
    }
}