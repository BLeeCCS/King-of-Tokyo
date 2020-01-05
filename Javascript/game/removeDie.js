export function removeDie(monstersArray,monster) {
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(1)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],0));
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(2)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],1));
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(3)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],2));
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(4)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],3));
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(5)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],4));
    $(`#${monstersArray[monster].name}_s > #diceContainer > :nth-child(6)`).on("click",monstersArray[monster].pickDie.bind(this,monstersArray[monster],5));
}