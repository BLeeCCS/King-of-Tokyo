import { nameChange } from "../game/nameChange.js"

export function monsterGainEnergy(energyPts,monster) {
    if (energyPts > 0) {
        monster.energyPoint += energyPts;
        return `${nameChange(monster.name)} gains ${energyPts} energy point${(energyPts > 1) ? "s." : "."}`;
    }

    return `${nameChange(monster.name)}'s energy is rising!`;
}