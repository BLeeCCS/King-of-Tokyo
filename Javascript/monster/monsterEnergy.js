export function monsterGainEnergy(energyPts,monster) {
    if (energyPts > 0) {
        monster.energyPoint += energyPts;
        return "" + energyPts;
    }

    return "";
}