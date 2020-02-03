export function randomizeTurn(monsters) {
    let array = [];
    let testArray = ["mekadragon","alienoid","theking","cyberkitty","gigazaur","spacepenguin"];

    for (let i = monsters.length; i > 0; i--) {
        let random = Math.floor(Math.random(i) * i);
        let monsterZ = monsters.splice(random,1);
        array.push(monsterZ + "");
    }

    return array;
    return testArray;
}