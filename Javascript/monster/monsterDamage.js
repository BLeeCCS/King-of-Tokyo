import { displayText } from "../game/displayText.js"
import { exitCity } from "./exitCity.js"

export function monsterDamage(damage,monster,monsterArray) {
 
    if (monster.firstTurn) {
        return (
            setTimeout(()=>{
                let text = "Monster on first turn can't attack.";
                console.log(text);
                displayText(text,"visible");
            },9000)
        );
    };

    if (damage > 0) {
        if (monster.inTokyo || monster.inBay) {
            for (let i = 0; i < monsterArray.length; i++) {
                if (!monsterArray[i].inTokyo && !monsterArray[i].inBay) {
                    monsterArray[i].lifePoint -= damage;
                }
            }

            return (
                setTimeout(()=>{
                    let text = `Monsters uses Attack Animation!!!}`;
                    console.log(text);
                    displayText(text,"visible");
                },9000),

                setTimeout(()=>{
                    let text = `Monsters outside of City loses ${damage} heart${(damage > 1) ? "s." : "."}`;
                    console.log(text);
                    displayText(text,"visible");
                },11000)
            )

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
                        },13000);

                        $("#yes").on("click",()=>{
                            $("#yes").off("click");
                            $("#no").off("click");
                            
                            exitCity(monsterArray[i]);

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
                        },17000);
                        
                        setTimeout(()=>{
                            $("#bubble").css("visibility","hidden");
                        },17500);

                    } else {
                        let random = Math.floor(Math.random(9) * 9 + 1);
                        if(monsterArray[i].lifePoint < random) {
                            console.log(monsterArray[i].name + " wants to exit city.");
                            setTimeout(()=>{
                                exitCity(monsterArray[i]);
                            },13000)
                        }
                    }
                }
            }

            return(
                setTimeout(()=>{
                    let text = `Monsters took damage Animation!!!`;
                    console.log(text);
                    displayText(text,"visible");
                },9000),

                setTimeout(()=>{
                    let text = `Monsters inside of City loses ${damage} heart${(damage > 1) ? "s." : ". "}`;
                    console.log(text);
                    displayText(text,"visible");
                },11000)
            )
        }
    }
}