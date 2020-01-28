import { monsterHeal } from "./monsterHeal.js";
import { monsterGainVictoryPoints } from "./monsterVictory.js";
import { monsterGainEnergy } from "./monsterEnergy.js"
import { displayText } from "../game/displayText.js"
import { monsterDamage } from "./monsterDamage.js"
import { enterCity } from "./enterCity.js";
import { renderMonsterStat } from "../game/renderStats.js"
import { nameChange } from "../game/nameChange.js"

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
        let text = "";
        let monsterGainVpText = monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster);
        let monsterGainEnergyText = monsterGainEnergy(energyPts,monster);
        let monsterHealText = monsterHeal(heal,monster);

        if (monsterGainVpText !== "" || monsterGainEnergyText !== "" || monsterHealText  !== "") {
            
            if (monsterGainVpText === "" && monsterGainEnergyText === "") {
                text += `${nameChange(monster.name)}`;
            } else {
                text += `${nameChange(monster.name)} gains `;
            }
            
            if (monsterGainVpText !== "") {
                text += " " + monsterGainVpText + " Victory";
                text += ((monsterGainEnergyText !== "" || monsterHealText  !== "") ? "," : ".");
            }

            if (monsterGainEnergyText !== "") {
                text += " " + monsterGainEnergyText + " Energy" + ((monsterHealText !== "") ? "," : ".");
            }

            if (monsterHealText  !== "") {
                text += " " + monsterHealText;
            }
        }

        if (text !== "") {
            displayText(text,"visible");
            renderMonsterStat(monsterArray,next);
        }
    },3000)

    monsterDamage(damage,monster,monsterArray);

    if(!monster.inBay && !monster.inTokyo){
        setTimeout(()=>{
            enterCity(monster,monsterArray);
            renderMonsterStat(monsterArray,next);
        },18000)
    }
}