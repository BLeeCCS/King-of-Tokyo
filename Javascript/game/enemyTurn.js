import { renderTurnMonster } from "./renderTurnMonster.js";
import { renderMonsterStat}  from "./renderStats.js"
import { displayText } from "./displayText.js";

export function enemy(monstersArray,next) {
    console.log(monstersArray[next].name + "'s turn")
    renderTurnMonster(next);
    if(monstersArray[next].inTokyo || monstersArray[next].inTokyo) {
        console.log("monster in tokyo or bay gains 2 VP.")
        monstersArray[next].victoryPoint += 2;
        displayText(`${nameChange(monstersArray[next].name)} gainst 2 Victory points for being in City/.`)
        renderMonsterStat(monstersArray,next);
    } else {
        renderMonsterStat(monstersArray,next);
    }
    monstersArray[next].rollDice();
    monstersArray[next].resolveDice(monstersArray[next],monstersArray,next);
}