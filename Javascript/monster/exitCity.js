import { nameChange } from "../game/nameChange.js"

export function exitCity(monster) {
    if(monster.inTokyo) {
        $("#tokyoCity").css("background-image",`url()`);
        monster.inTokyo = false;
        console.log(`${nameChange(monster.name)} exited Tokyo City.`);
    }
    if(monster.inBay) {
        $("#tokyoBay").css("background-image",`url()`);
        monster.inBay = false;
        console.log(`${nameChange(monster.name)} exited Tokyo Bay.`);
    }
}