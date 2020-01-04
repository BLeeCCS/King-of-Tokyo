import { renderMonsterStat }from "../game/renderStats.js"
import { displayText } from "../game/displayText.js"
import { nameChange } from "../game/nameChange.js"

export function monsterGainEnergy(energyPts,monster,monsterArray) {
    if (energyPts > 0) {
        monster.energyPoint += energyPts;
        setTimeout(()=>{
            let text = `${nameChange(monster.name)} gains ${energyPts} energy point${(energyPts > 1) ? "s." : "."}`;
            displayText(text,"visible");
        },5000)
    }
}