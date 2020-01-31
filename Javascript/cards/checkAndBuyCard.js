import { checkCost } from "./checkCost.js"
import { displayText } from "../game/displayText.js"
import { activateCardEffect } from "./activeCardEffect.js"

export function checkAndBuyCard(monster,card) {

    let cost = checkCost(card);
    monster.energyPoint = 10;

    if (monster.energyPoint >= cost){
        displayText("Sold!!!Check to continue ...","visible","visible");
        monster.energyPoint -= cost;
        activateCardEffect(monster,card);
        return true;
    } else {
        displayText("Sorry, you dont have enough energy point.","visible","visible");
        setTimeout(()=>{
            displayText("Do you want to buy power cards? Click on card to Purchase.","visible","visible");
        },2000);
    };
}