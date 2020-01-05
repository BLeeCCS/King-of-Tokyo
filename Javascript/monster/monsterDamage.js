export function monsterDamage(damage,monster,monsterArray) {
    if (monster.firstTurn) {
        return "";
    }

    if (damage > 0) {
        if (monster.inTokyo || monster.inBay) {
            for (let i = 0; i < monsterArray.length; i++) {
                if (!monsterArray[i].inTokyo && !monsterArray[i].inBay) {
                    monsterArray[i].lifePoint -= damage;
                }
            }
            return `Monsters outside of City loses ${damage} heart${(damage > 1) ? "s." : "."}`;
        } else {
            for (let i = 0; i < monsterArray.length; i++) {
                if (monsterArray[i].inTokyo || monsterArray[i].inBay) {
                    monsterArray[i].lifePoint -= damage;
                }
            }
            return `Monsters inside of City loses ${damage} heart${(damage > 1) ? "s." : "."}`;
        }
    }

    return "";
}