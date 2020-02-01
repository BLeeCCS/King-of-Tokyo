export function checkCost(card) {
    let cost;

    switch(card) {
        case "backgroundDweller":
            cost = 4;
            break;
        case "batteryMonster":
            cost = 3;
            break;
    }

    return cost;
}