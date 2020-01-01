import { monsterHeal } from "./monsterHeal.js";
import { monsterGainVictoryPoints } from "./monsterVictory.js";
import { monsterGainEnergy } from "./monsterEnergy.js"

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

    monsterHeal(heal,monster,monsterArray);
    monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster,monsterArray);
    monsterGainEnergy(energyPts,monster,monsterArray)
}