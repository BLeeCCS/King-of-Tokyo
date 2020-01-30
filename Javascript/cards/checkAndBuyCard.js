import { checkCost } from "./checkCost.js"

export function checkAndBuyCard(monster,card,deck) {
    console.log("monster energy point",monster.energyPoint);
    console.log(card);
    console.log(deck);
    console.log(monster);

    monster.energyPoint = 10;
    let cost = checkCost(card);

    if (monster.energyPoint >= cost){
        console.log("you can buy card");
        console.log(monster.energyPoint);

        monster.energyPoint -= cost;
        console.log("energy after bought card ", monster.energyPoint);

        console.log(monster);
    } else {
        console.log("you dont have enough energy point");
    };
}