import { monsterHeal } from "./monsterHeal.js";
import { monsterGainVictoryPoints } from "./monsterVictory.js";
import { monsterGainEnergy } from "./monsterEnergy.js"
import { displayText } from "../game/displayText.js"
import { monsterDamage } from "./monsterDamage.js"
import { enterCity } from "./enterCity.js";

export function resolve(dice,monster,monsterArray) {
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

    let textHeal = monsterHeal(heal,monster);
    let textVP = monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster);
    let textE = monsterGainEnergy(energyPts,monster);
    let textDmg = monsterDamage(damage,monster,monsterArray);
    let textEnterCity = enterCity(monster,monsterArray);

    let textArray = [];
    let speed = 510;
    textArray.push(textHeal);
    textArray.push(textVP);
    textArray.push(textE);
    textArray.push(textDmg);
    textArray.push(textEnterCity);

    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] !== "") {
            setTimeout(()=>{
                displayText(textArray[i],"visible");
            },speed);
            speed += 1800;
        }
    }
}