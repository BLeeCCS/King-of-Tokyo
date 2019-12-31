import { displayText } from "./displayText.js"
import { enemy } from "./enemyTurn.js"
import { nameChange } from "./nameChange.js"
import { turn } from "./turn.js"

export function player(monstersArray,next,round) {
    for (var monster in monstersArray) {
        if (monstersArray[monster].player) {
            monstersArray[monster].rollDice();

            if(monstersArray[monster].count < 3) {
                setTimeout(() => {
                    displayText("Roll again? You can also click on dice you dont want to remove","visible","visible");
                }, 3500);
                
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(1)`).on("click");

                $("#yes").on("click",()=>{
                    monstersArray[monster].dice = [];
                    monstersArray[monster].rollDice();
                    monstersArray[monster].count++;

                    if(monstersArray[monster].count == 3) {
                        $("#yes").off("click");
                        $("#no").off("click");
                        displayText();
                        monstersArray[monster].count = 1;

                        let enemyStart = setInterval(() => {
                            if(++next < monstersArray.length) {
                                displayText(`${nameChange(monstersArray[next].name)}`,"visible");
                                enemy(monstersArray,next);
                            }
                            if(next >= monstersArray.length) {
                                clearInterval(enemyStart);

                                $(".diceContainer > div").css({"background-image":""});
                                turn(monstersArray,round);
                            }
                        }, 4000);
                    }
                })

                $("#no").on("click",()=>{
                    $("#no").off("click");
                    $("#yes").off("click");
                    displayText();
                    monstersArray[monster].resolveDice();

                    let enemyStart = setInterval(() => {
                        if(++next < monstersArray.length) {
                            displayText(`${nameChange(monstersArray[next].name)}`,"visible");
                            enemy(monstersArray,next);
                        }
                        if(next >= monstersArray.length) {
                            clearInterval(enemyStart);

                            $(".diceContainer > div").css({"background-image":""});
                            turn(monstersArray,round);
                        }
                    }, 4000);
                })
            }
            
            break;
        };
    }
}