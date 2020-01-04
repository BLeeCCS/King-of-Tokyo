export function enterCity(monster,monsterArray) {
    let name = "";

    switch(monster.name) {
        case "mekadragon":
            name = "MekaDragon";
            break;
        case "alienoid":
            name = "Alienoid";
            break;
        case "theking":
            name = "TheKing";
            break;
        case "cyberkitty":
            name = "CyberKitty";
            break;
        case "gigazaur":
            name = "Gigazaur";
            break;
        case "spacepenguin":
            name = "SpacePenguin";
            break;
    }

    if (monster.firstTurn) {
        for(let i = 0; i < monsterArray.length; i++) {
            monsterArray[i].firstTurn = false;
        }
        
        $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${name}.png)`);
        monster.inTokyo = true;

        return `${monster.name} entered Tokyo.`;
    }

    if(!monster.inBay) {
        $("#tokyoBay").css("background-image",`url(../assets/M_Fig/${name}.png)`);
        monster.inBay = true;
        return `${monster.name} entered Bay.`;
    } else {
        if(!monster.inTokyo) {
            $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${name}.png)`);
            monster.inTokyo = true;
            return `${monster.name} entered Tokyo.`;
        }
    }

    return "";
}