import { monsterHeal } from "./monsterHeal.js";
import { monsterGainVictoryPoints } from "./monsterVictory.js";
import { monsterGainEnergy } from "./monsterEnergy.js"
import { displayText } from "../game/displayText.js"
import { monsterDamage } from "./monsterDamage.js"
import { enterCity } from "./enterCity.js";

export function resolve(dice,monster,monsterArray,start) {
    let heal = 0;
    let damage = 0;
    let energyPts = 0;
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;

    for (let i = 0; i < dice.length; i++) {
        switch(dice[i]) {
            case "one":
                oneCount++;
                break;
            case "two":
                twoCount++;
                break;
            case "three":
                threeCount++;
                break;
            case "heart":
                heal++;
                break;
            case "energy":
                energyPts++;
                break;
            case "smash":
                damage++;
                break;
        }
    }

    let textHeal = monsterHeal(heal,monster);
    let textVP = monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster);
    let textE = monsterGainEnergy(energyPts,monster);
    let textDmg = monsterDamage(damage,monster,monsterArray);
    let textEnterCity = enterCity(monster,monsterArray);

    let textArray = [];
    let speed = 3000;

    // let textHealtest = "MEKA DRAGON gains 3 hearts."
    // let textVPtest = "MEKA DRAGON gains 5 victory points."
    // let textEtest = "MEKA DRAGON gains 5 energy points."
    // let textEnterCitytest = "MEKA DRAGON entered TOKYO."
    // textArray.push(textHealtest);
    // textArray.push(textVPtest);
    // textArray.push(textEtest);
    // textArray.push(textDmg);
    // textArray.push(textEnterCitytest);

    textArray.push(textHeal);
    textArray.push(textVP);
    textArray.push(textE);
    textArray.push(textDmg);
    // textArray.push(textEnterCity);

    let clock = null;

    let clockCount = 0;
    clock = setInterval(() => {
        clockCount++;
        console.log(clockCount);
        if(clockCount == 20) {
            clearInterval(clock);
        }
    }, 1000);

    for (let i = 0; i < textArray.length; i++) {

        if(textArray[i] == "") {
            setTimeout(()=>{
                console.log("No text.");
                displayText(textArray[i],"hidden");
            },speed);
        } else {
            setTimeout(()=>{
                console.log(textArray[i]);
                displayText(textArray[i],"visible");
            },speed);
        }

        // setTimeout(()=>{
        //     console.log(textArray[i]);
        //     displayText(textArray[i],"visible");
        // },speed);
        speed += 1000;
    }
    
    setTimeout(()=>{
        displayText(textEnterCity,"visible");
    },18000);

}