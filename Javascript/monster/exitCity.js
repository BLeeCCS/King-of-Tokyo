import { nameChange } from "../game/nameChange.js"

export function exitCity(monster) {
    if(monster.inTokyo) {
        $("#tokyoCity").css("background-image",`url()`);
        monster.inTokyo = false;
        return `${nameChange(monster.name)} exits Tokyo City.`;
    }
    if(monster.inBay) {
        $("#tokyoBay").css("background-image",`url()`);
        monster.inBay = false;
        return `${nameChange(monster.name)} exits Tokyo Bay.`;
    }
}