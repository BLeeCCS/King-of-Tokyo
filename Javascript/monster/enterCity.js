export function enterCity(monster,monsterArray) {
    let namePNG = "";
    let name = "";

    switch(monster.name) {
        case "mekadragon":
            namePNG = "MekaDragon";
            name = "MEKA DRAGON";
            break;
        case "alienoid":
            namePNG = "Alienoid";
            name = "ALIENOID";
            break;
        case "theking":
            namePNG = "TheKing";
            name = "THE KING";
            break;
        case "cyberkitty":
            namePNG = "CyberKitty";
            name = "CYBER KITTY";
            break;
        case "gigazaur":
            namePNG = "Gigazaur";
            name = "GIGAZAUR";
            break;
        case "spacepenguin":
            namePNG = "SpacePenguin";
            name = "SPACE PENGUIN";
            break;
    }

    if (monster.firstTurn) {
        for(let i = 0; i < monsterArray.length; i++) {
            monsterArray[i].firstTurn = false;
        }
        
        $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`);
        monster.inTokyo = true;
        return `${name} entered Tokyo.`;
    }

    let monsterInTokyo = false;
    let monsterInBay = false;

    for (let i = 0; i < monsterArray.length; i++) {
        if(monsterArray[i].inTokyo) {
            monsterInTokyo = true;
        }
        if(monsterArray[i].inBay) {
            monsterInBay = true;
        }
    }

    if(!monster.inBay && !monsterInBay) {
        $("#tokyoBay").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`);
        monster.inBay = true;
        return `${name} entered Bay.`;
    } else {
        if(!monster.inTokyo && !monsterInTokyo) {
            $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${name}.png)`);
            monster.inTokyo = true;
            return `${name} entered Tokyo.`;
        }
    }

    return "";
}