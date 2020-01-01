export function monsterGainVictoryPoints(oneCount,twoCount,threeCount,monster) {
    if (oneCount >= 3) {
        monster.victoryPoint += 1;
        if ((oneCount - 3) > 0) {
            monster.victoryPoint += (oneCount - 3);
        }
    }

    if (twoCount >= 3) {
        monster.victoryPoint += 2;
        if ((twoCount - 3) > 0) {
            monster.victoryPoint += (twoCount - 3);
        }
    }

    if (threeCount >= 3) {
        monster.victoryPoint += 1;
        if ((threeCount - 3) > 0) {
            monster.victoryPoint += (threeCount - 3);
        }
    }
}