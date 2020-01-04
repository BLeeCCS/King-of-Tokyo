import { displayText } from "./displayText.js"
import { nameChange } from "./nameChange.js"
import { enemy } from "./enemyTurn.js"
import { player } from "./playerTurn.js"
import { renderTurnMonster } from "./renderTurnMonster.js"

export function turn(monstersArray,round) {
    let start = null;
    let next = 0;
    
    start = setInterval(() => {
        renderTurnMonster(next,monstersArray[next].player);
    
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
    }, 5000);

    round++;
}