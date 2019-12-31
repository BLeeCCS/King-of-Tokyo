import { renderMonsterStat}  from "./renderStats.js"
import { displayText } from "./displayText.js"
import { nameChange } from "./nameChange.js"
import { enemy } from "./enemyTurn.js"
import { player } from "./playerTurn.js"

export function turn(monstersArray,round) {
    let start = null;
    let next = 0;

    renderMonsterStat(monstersArray);
    displayText(`Round ${round}`,"visible");

    start = setInterval(() => {
        if(monstersArray[next].player) {
            clearInterval(start);
            displayText("PLAYER TURN","visible");
            player(monstersArray,next,round);
        } else {
            $("#yes").off("click");
            $("#no").off("click");
            displayText(`${nameChange(monstersArray[next].name)}`,"visible");
            enemy(monstersArray,next);
        }
        next++;
    }, 4000);

    round++;
}