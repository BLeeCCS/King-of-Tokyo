export function setUpTurnIcons(randomizeMonsters) {
    randomizeMonsters.map(name => {
        $("#monsterTurn").append($("<div>").attr("id",`${name}Icon`));
    })
}