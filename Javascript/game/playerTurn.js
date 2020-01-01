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
                    displayText("Click on die you dont want to remove and reroll.","visible","visible");
                }, 3500);
                
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(1)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],0));
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(2)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],1));
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(3)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],2));
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(4)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],3));
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(5)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],4));
                $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(6)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],5));

                $("#yes").on("click",()=>{
                    monstersArray[monster].count++;
                    monstersArray[monster].rollDice();

                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(1)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],0));
                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(2)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],1));
                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(3)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],2));
                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(4)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],3));
                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(5)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],4));
                    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(6)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],5));

                    if(monstersArray[monster].count == 3) {
                        $("#yes").off("click");
                        $("#no").off("click");
                        displayText();
                        monstersArray[monster].count = 1;

                        monstersArray[monster].resolveDice(monstersArray[monster],monstersArray);

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
                        }, 5000);
                    }
                })

                $("#no").on("click",()=>{
                    $("#no").off("click");
                    $("#yes").off("click");
                    displayText();

                    let emptyDie = false;
                    for(let i = 0; i < monstersArray[monster].dice.length; i++) {
                        if (monstersArray[monster].dice[i] === "") {
                            emptyDie = true;
                        }
                    }
                    if(emptyDie) { 
                        monstersArray[monster].count++;
                        monstersArray[monster].rollDice(); 
                    }

                    monstersArray[monster].count = 1;

                    monstersArray[monster].resolveDice(monstersArray[monster],monstersArray);

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
                    }, 5000);
                })
            }
            
            break;
        };
    }
}