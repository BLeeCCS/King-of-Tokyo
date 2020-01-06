import { turn } from "./turn.js"
import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"

export function turnStartAgain(monstersArray,next,round) {
    let enemyStart = setInterval(() => {

        if(++next < monstersArray.length) {
            displayText();
            enemy(monstersArray,next);
        }
        if(next >= monstersArray.length) {
            clearInterval(enemyStart);

            for(let i = 0; i < monstersArray.length; i++) {
                $(`#${monstersArray[i].name}_s`).css("z-index",`${1}`);
                monstersArray[i].dice = [];
            }

            displayText();
            $(".diceContainer > div").css({"background-image":""});
            turn(monstersArray,round);
        }
        
    }, 20000);
}