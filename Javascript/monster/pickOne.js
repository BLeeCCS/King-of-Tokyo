export function pickOne(monster,dicePosition) {
    monster.dice[dicePosition] = "";
    $(`#${monster.name}_s > #diceContainer > :nth-child(${dicePosition + 1})`).off("click");
    $(`#${monster.name}_s > #diceContainer > :nth-child(${dicePosition + 1})`).css({"background-image":""});
}