import { renderMonsterStat }from "../game/renderStats.js"
import { displayText } from "../game/displayText.js"
import { nameChange } from "../game/nameChange.js"

export function monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster,monsterArray) {
    let gainVictoryPoints = 0;
    if (oneCount >= 3) {
        monster.victoryPoint += 1;
        gainVictoryPoints += 1;
        if ((oneCount - 3) > 0) {
            monster.victoryPoint += (oneCount - 3);
            gainVictoryPoints += (oneCount - 3);
        }
    }

    if (twoCount >= 3) {
        monster.victoryPoint += 2;
        gainVictoryPoints += 2;
        if ((twoCount - 3) > 0) {
            monster.victoryPoint += (twoCount - 3);
            gainVictoryPoints += (oneCount - 3);
        }
    }

    if (threeCount >= 3) {
        monster.victoryPoint += 3;
        gainVictoryPoints += 3;
        if ((threeCount - 3) > 0) {
            monster.victoryPoint += (threeCount - 3);
            gainVictoryPoints += (threeCount - 3);
        }
    }

    setTimeout(()=>{
        if(gainVictoryPoints > 0) {
            let text = `${nameChange(monster.name)} gains ${gainVictoryPoints} victory point${(gainVictoryPoints > 1) ? "s." : "."}`;
            displayText(text,"visible");
        }
    },4000)
}