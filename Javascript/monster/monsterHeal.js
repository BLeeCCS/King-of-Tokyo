import { nameChange } from "../game/nameChange.js"

export function monsterHeal(heal,monster) {
    let gainLP = 0;

    if (monster.alive && monster.lifePoint < 10 && !monster.inTokyo && !monster.inBay) {
        for (let i = heal; i > 0; i--) {
            if (monster.lifePoint < 10) {
                monster.lifePoint++;
                gainLP++;
            }
        }

        //return `${nameChange(monster.name)} gains ${gainLP} heart${(gainLP > 1) ? "s." : "."}`;
    }

    if(monster.inTokyo) {
        return `can't regain heart in Tokyo.`;
    }

    if(monster.inBay) {
        return `can't regain heart in Bay.`;
    }

    if (gainLP > 0) {
        return "" + gainLP + " hearts.";
    }

    //return `${nameChange(monster.name)} gains hearts test!`;
    return "";
}