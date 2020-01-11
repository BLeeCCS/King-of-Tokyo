import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"
import { player } from "./playerTurn.js"
import { renderTurnMonster } from "./renderTurnMonster.js"

export function turn(monstersArray) {
    var start = null;
    let next = 0;

    let clock = null;

    let clockCount = 0;
    clock = setInterval(() => {
        clockCount++;
        console.log(clockCount);
        if(clockCount == 20) {
            clearInterval(clock);
        }
    }, 1000);

    $("#nameIcon").text("Loses 5");

    //displayText(" gains 5 victory points","visible");

    // start = setInterval(() => {
    //     renderTurnMonster(next,monstersArray[next].player);

    //     if(monstersArray[next].player) {
    //         clearInterval(start);
    //         console.log("player's turn");
    //         displayText("PLAYER TURN","visible");
    //         player(monstersArray,next);
    //     } else {
    //         $("#yes").off("click");
    //         $("#no").off("click");
    //         displayText();
    //         enemy(monstersArray,next);
    //     }
    //     next++;

    // }, 1000);
}