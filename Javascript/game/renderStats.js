export function renderMonsterStat(monstersArray) {
    for (var i = 0; i < monstersArray.length; i++) {
        switch(monstersArray[i].name) {
            case "mekadragon":
                $("#mekadragon_s > #victory").text(monstersArray[i].victoryPoint);
                $("#mekadragon_s > #energy").text(monstersArray[i].energyPoint);
                $("#mekadragon_s > #heart").text(monstersArray[i].lifePoint);
                break;
            case "alienoid":
                $("#alienoid_s > #victory").text(monstersArray[i].victoryPoint);
                $("#alienoid_s  > #energy").text(monstersArray[i].energyPoint);
                $("#alienoid_s  > #heart").text(monstersArray[i].lifePoint);
                break;
            case "theking":
                $("#theking_s > #victory").text(monstersArray[i].victoryPoint);
                $("#theking_s > #energy").text(monstersArray[i].energyPoint);
                $("#theking_s > #heart").text(monstersArray[i].lifePoint);
                break;
            case "cyberkitty":
                $("#cyberkitty_s > #victory").text(monstersArray[i].victoryPoint);
                $("#cyberkitty_s > #energy").text(monstersArray[i].energyPoint);
                $("#cyberkitty_s > #heart").text(monstersArray[i].lifePoint);
                break;
            case "gigazaur":
                $("#gigazaur_s > #victory").text(monstersArray[i].victoryPoint);
                $("#gigazaur_s > #energy").text(monstersArray[i].energyPoint);
                $("#gigazaur_s > #heart").text(monstersArray[i].lifePoint);
                break;
            case "spacepenguin":
                $("#spacepenguin_s > #victory").text(monstersArray[i].victoryPoint);
                $("#spacepenguin_s > #energy").text(monstersArray[i].energyPoint);
                $("#spacepenguin_s > #heart").text(monstersArray[i].lifePoint);
                break;
        }
    }
}