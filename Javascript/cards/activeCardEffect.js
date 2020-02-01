export function activateCardEffect(monster,card) {
    switch(card) {
        case "backgroundDweller":
            monster.backgroundDweller = true;
            break;
        case "batteryMonster":
            monster.batteryMonster = true;
            break;
    }
}