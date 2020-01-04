import { renderTurnMonster } from "./renderTurnMonster.js";
import { renderMonsterStat}  from "./renderStats.js"

export function enemy(monstersArray,next) {
    renderTurnMonster(next);
    renderMonsterStat(monstersArray,next);
    monstersArray[next].rollDice();
    monstersArray[next].resolveDice(monstersArray[next],monstersArray);
    renderMonsterStat(monstersArray,next);
}