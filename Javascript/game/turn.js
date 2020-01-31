import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"
import { player } from "./playerTurn.js"
import { renderTurnMonster } from "./renderTurnMonster.js"

export function turn(monstersArray,deck,round) {
    var start = null;
    let next = 0;

    console.log("game round ", round);

    if (round == 1) {
        var card1 = "" + deck.splice(0,1);
        var card2 = "" + deck.splice(0,1);
        var card3 = "" + deck.splice(0,1);

        $("#card1").css({"background-image":`url(../assets/Cards/${card1}.png`});
        $("#card2").css({"background-image":`url(../assets/Cards/${card2}.png`});
        $("#card3").css({"background-image":`url(../assets/Cards/${card3}.png`});
    }

    let clock = null;
    let clockCount = 0;
    clock = setInterval(() => {
        clockCount++;
        console.log(clockCount);
        if(clockCount == 18) {
            clearInterval(clock);
        }
    }, 1000);

    start = setInterval(() => {
        renderTurnMonster(next,monstersArray[next].player);

        if(monstersArray[next].player) {
            clearInterval(start);
            console.log("player's turn");
            displayText("PLAYER TURN","visible");
            player(monstersArray,next,card1,card2,card3,deck,round);
        } else {
            $("#yes").off("click");
            $("#no").off("click");
            displayText();
            enemy(monstersArray,next);
        }
        next++;

    }, 1000);
}