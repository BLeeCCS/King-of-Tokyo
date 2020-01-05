import { nameChange } from "../game/nameChange.js"

export function monsterGainEnergy(energyPts,monster) {
    let text = "";
    if (energyPts > 0) {
        monster.energyPoint += energyPts;
        text = `${nameChange(monster.name)} gains ${energyPts} energy point${(energyPts > 1) ? "s." : "."}`;
    }

    return text;
}