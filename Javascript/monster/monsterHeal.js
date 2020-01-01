import { renderMonsterStat }from "../game/renderStats.js"
import { displayText } from "../game/displayText.js"
import { nameChange } from "../game/nameChange.js"

export function monsterHeal(heal,monster,monsterArray) {
    let gainLP = 0;
    if (monster.alive && monster.lifePoint < 10) {
        for (let i = heal; i > 0; i--) {
            if (monster.lifePoint < 10) {
                monster.lifePoint++;
                gainLP++;
            }
        }
        let text = `${nameChange(monster.name)} gains ${gainLp} heart` + (gainLP > 1) ? "s." : "."
        displayText(text,"visible")
    }
    renderMonsterStat(monsterArray);
}