import { displayText } from "./displayText.js"
import { nameChange } from "./nameChange.js"
import { renderMonsterStat}  from "./renderStats.js"
import { removeDie } from "./removeDie.js"
import { turnStartAgain } from "./turnStartAgain.js"

export function player(monstersArray,next,card1,card2,card3,deck,round) {
    if(monstersArray[next].inTokyo || monstersArray[next].inBay) {
        monstersArray[next].victoryPoint += 2;
        displayText(`${nameChange(monstersArray[next].name)} gained 2 Victory points for being in City.`,"visible");
        renderMonsterStat(monstersArray,next);
    } else {
        renderMonsterStat(monstersArray,next);
    }

    for (var monster in monstersArray) {
        if (monstersArray[monster].player) {
            monstersArray[monster].rollDice();

            if(monstersArray[monster].count < 3) {
                setTimeout(() => {
                    displayText("Click on die you dont want to remove and reroll.","visible");
                    setTimeout(()=>{
                        $(".button").css("visibility","visible");
                    },1800);
                }, 3500);
                
                removeDie(monstersArray,monster);

                $("#yes").on("click",()=>{
                    monstersArray[monster].count++;
                    monstersArray[monster].rollDice();

                    removeDie(monstersArray,monster);

                    if(monstersArray[monster].count == 3) {
                        $("#yes").off("click");
                        $("#no").off("click");
                        
                        $(".button").css("visibility","hidden");
                        setTimeout(() => {
                            $("#bubble").css("visibility","hidden");
                        }, 500);
                        
                        monstersArray[monster].count = 1;
                        monstersArray[monster].resolveDice(monstersArray[monster],monstersArray,next);
                        
                        setTimeout(()=>{
                            monstersArray[monster].buyPowerCards(monstersArray[monster],card1,card2,card3,deck);
                            $("#yes").on("click",()=>{
                                $("#yes").off("click");
                                $("#no").off("click");
                                displayText();
                                turnStartAgain(monstersArray,next,deck,round);
                            });
                            $("#no").on("click",()=>{
                                $("#yes").off("click");
                                $("#no").off("click");
                                displayText();
                                turnStartAgain(monstersArray,next,deck,round);
                            });
                        },18000)
                    }
                })

                $("#no").on("click",()=>{
                    $("#no").off("click");
                    $("#yes").off("click");
                    $(".button").css("visibility","hidden");
                    setTimeout(() => {
                        $("#bubble").css("visibility","hidden");
                    }, 500);

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
                    monstersArray[monster].resolveDice(monstersArray[monster],monstersArray,next);

                    setTimeout(()=>{
                        monstersArray[monster].buyPowerCards(monstersArray[monster],card1,card2,card3,deck);
                        $("#yes").on("click",()=>{
                            $("#yes").off("click");
                            $("#no").off("click");
                           
                            $(".button").css("visibility","hidden");
                            setTimeout(() => {
                                $("#bubble").css("visibility","hidden");
                            }, 500);
                            renderMonsterStat(monstersArray,next);

                            turnStartAgain(monstersArray,next,deck,round);
                        });
                        $("#no").on("click",()=>{
                            $("#yes").off("click");
                            $("#no").off("click");
                            
                            $(".button").css("visibility","hidden");
                            setTimeout(() => {
                                $("#bubble").css("visibility","hidden");
                            }, 500);
                            renderMonsterStat(monstersArray,next);

                            turnStartAgain(monstersArray,next,deck,round);
                        });
                    },18000)
                })
            }
            break;
        };
    }
}