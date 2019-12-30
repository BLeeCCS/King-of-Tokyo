function randomizeTurn(monsters) {
    let array = [];

    for (let i = monsters.length; i > 0; i--) {
        var random = Math.floor(Math.random(i) * i);
        var monsterZ = monsters.splice(random,1);
        array.push(monsterZ + "");
    }

    return array;
}
export { randomizeTurn };