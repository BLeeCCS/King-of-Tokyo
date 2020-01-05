import { nameChange } from "../game/nameChange.js"

export function monsterHeal(heal,monster) {
    let gainLP = 0;
    let text = "";

    if (monster.alive && monster.lifePoint < 10) {
        for (let i = heal; i > 0; i--) {
            if (monster.lifePoint < 10) {
                monster.lifePoint++;
                gainLP++;
            }
        }

        text = `${nameChange(monster.name)} gains ${gainLP} heart${(gainLP > 1) ? "s." : "."}`;
    }

    return text;
}