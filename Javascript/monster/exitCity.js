import { nameChange } from "../game/nameChange.js"

export function exitCity(monster) {
    if(monster.inTokyo) {
        $("#tokyoCity").css("background-image",`url()`);
        monster.inTokyo = false;
    }
    if(monster.inBay) {
        $("#tokyoBay").css("background-image",`url()`);
        monster.inBay = false;
    }
}