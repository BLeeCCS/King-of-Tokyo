import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"
import { player } from "./playerTurn.js"
import { renderTurnMonster } from "./renderTurnMonster.js"

//For Testing
import { clock } from "../test/clock.js"

export function turn(monstersArray,deck,round) {
    let start = null;
    let next = 0;

    if (round == 1) {
        var card1 = "" + deck.splice(0,1);
        var card2 = "" + deck.splice(0,1);
        var card3 = "" + deck.splice(0,1);

        $("#card1").css({"background-image":`url(../assets/Cards/${card1}.png`});
        $("#card2").css({"background-image":`url(../assets/Cards/${card2}.png`});
        $("#card3").css({"background-image":`url(../assets/Cards/${card3}.png`});
    }

    clock(18);

    start = setInterval(() => {
        renderTurnMonster(next);

        if(monstersArray[next].player) {
            clearInterval(start);
            displayText("PLAYER TURN","visible");
            player(monstersArray,next,card1,card2,card3,deck,round);
        } else {
            $("#yes").off("click");
            $("#no").off("click");
            displayText();
            enemy(monstersArray,next);
        }
        next++;

    }, 18000);
}