import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"
import { nameChange } from "./nameChange.js"

export function player(monstersArray,next) {
    for (var monster in monstersArray) {
        if (monstersArray[monster].player) {
            monstersArray[monster].rollDice();

            if(monstersArray[monster].count < 3) {
                setTimeout(() => {
                    displayText("Roll again?","visible","visible");
                }, 3500);
                $("#yes").on("click",()=>{
                    monstersArray[monster].dice = [];
                    monstersArray[monster].rollDice();
                    monstersArray[monster].count++;

                    if(monstersArray[monster].count == 3) {
                        $("#yes").off("click");
                        $("#no").off("click");
                        displayText();

                        let enemyStart = setInterval(() => {
                            if(++next < monstersArray.length) {
                                displayText(`${nameChange(monstersArray[next].name)}`,"visible");
                                enemy(monstersArray,next);
                            }
                            if(next >= monstersArray.length) {
                                clearInterval(enemyStart);
                                console.log(next);
                            }
                        }, 4000);
                    }
                })
            }
            
            break;
        };
    }
}