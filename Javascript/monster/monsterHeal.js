export function monsterHeal(heal,monster) {
    if (monster.alive && monster.lifePoint < 10) {
        for (let i = heal; i > 0; i--) {
            if (monster.lifePoint < 10) {
                monster.lifePoint++;
            }
        }
    }
}