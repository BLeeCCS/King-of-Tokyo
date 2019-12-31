import { renderMonsterStat}  from "./renderStats.js"
import { displayText } from "./displayText.js"

export function turn(monstersArray) {
    let start = null;
    let next = 0;
    let round = 1;

    renderMonsterStat(monstersArray);
    displayText(`Round ${round}`,"visible");
}