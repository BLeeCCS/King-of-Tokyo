export function renderMonsterStat(monstersArray,next) {
    $(`#${monstersArray[next].name}_s > #victory`).text(monstersArray[next].victoryPoint);
    $(`#${monstersArray[next].name}_s > #energy`).text(monstersArray[next].energyPoint);
    $(`#${monstersArray[next].name}_s > #heart`).text(monstersArray[next].lifePoint);
    $(`#${monstersArray[next].name}_s`).css("z-index",`${next + 3}`);
}