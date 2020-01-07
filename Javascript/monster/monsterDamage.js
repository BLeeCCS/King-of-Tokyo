import { displayText } from "../game/displayText.js"
import { exitCity } from "./exitCity.js"
import { enterCity } from "./enterCity.js";

export function monsterDamage(damage,monster,monsterArray) {
 
    if (monster.firstTurn) {
        return "Monster on first turn can't attack.";
    }

    damage = 1

    if (damage > 0) {
        if (monster.inTokyo || monster.inBay) {
            for (let i = 0; i < monsterArray.length; i++) {
                if (!monsterArray[i].inTokyo && !monsterArray[i].inBay) {
                    monsterArray[i].lifePoint -= damage;
                }
            }
            return `Monsters outside of City loses ${damage} heart${(damage > 1) ? "s." : "."}`;
        } else {
            for (let i = 0; i < monsterArray.length; i++) {
                if (monsterArray[i].inTokyo || monsterArray[i].inBay) {
                    monsterArray[i].lifePoint -= damage;

                    if (monsterArray[i].player) {
                        setTimeout(()=>{
                            console.log("Do you want to move out of City?");
                            displayText("Do you want to move out of City?","visible");
                            setTimeout(()=>{
                                $(".button").css("visibility","visible");
                            },1500);
                        },12000);

                        $("#yes").on("click",()=>{
                            $("#yes").off("click");
                            $("#no").off("click");
                            
                            exitCity(monsterArray[i]);

                            if(!monster.inBay && !monster.inTokyo){
                                enterCity(monster,monsterArray);
                            }

                            $(".button").css("visibility","hidden");
                        });

                        $("#no").on("click",()=>{
                            $("#yes").off("click");
                            $("#no").off("click");
                            
                            $(".button").css("visibility","hidden");
                            setTimeout(()=>{
                                $("#bubble").css("visibility","hidden");
                            },500);
                        });

                        setTimeout(()=>{
                            $(".button").css("visibility","hidden");
                        },16000);
                        
                        setTimeout(()=>{
                            console.log("Buttons hidden");
                            $("#bubble").css("visibility","hidden");
                        },16500);

                    } else {
                        let random = Math.floor(Math.random(9) * 9 + 1);
                        if(monsterArray[i].lifePoint < random) {
                            
                            exitCity(monsterArray[i]);

                            if(!monster.inBay && !monster.inTokyo){
                                enterCity(monster,monsterArray);
                            }
                        }
                    }
                }
            }

            return `Monsters inside of City loses ${damage} heart${(damage > 1) ? "s." : ". "}`;
        }
    }

    return "No monster is taking damage.";
}