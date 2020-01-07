export function enterCity(monster,monsterArray) {
    let namePNG = "";
    let name = "";

    switch(monster.name) {
        case "mekadragon":
            namePNG = "MekaDragon";
            name = "MEKADRAGON";
            break;
        case "alienoid":
            namePNG = "Alienoid";
            name = "ALIENOID";
            break;
        case "theking":
            namePNG = "TheKing";
            name = "THEKING";
            break;
        case "cyberkitty":
            namePNG = "CyberKitty";
            name = "CYBERKITTY";
            break;
        case "gigazaur":
            namePNG = "Gigazaur";
            name = "GIGAZAUR";
            break;
        case "spacepenguin":
            namePNG = "SpacePenguin";
            name = "SPACEPENGUIN";
            break;
    }

    if (monster.firstTurn) {
        for(let i = 0; i < monsterArray.length; i++) {
            monsterArray[i].firstTurn = false;
        }
        
        switch(monster.name) {
            case "cyberkitty": 
            case "gigazaur": 
            case "spacepenguin":
                $("#tokyoCity").css({"transform":"rotateY(0deg)"});
                $("#tokyoBay").css({"transform":"rotateY(180deg)"});
                break;
            case "mekadragon": 
            case "alienoid":
            case "theking":
                $("#tokyoCity").css({"transform":"rotateY(180deg)"});
                $("#tokyoBay").css({"transform":"rotateY(0deg)"});
                break;
        }

        setTimeout(() => {
            $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`);
        }, 18000);

        monster.inTokyo = true;
        return `${name} entered Tokyo City.`;
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
        
        switch(monster.name) {
            case "cyberkitty": 
            case "gigazaur": 
            case "spacepenguin":
                $("#tokyoBay").css({"transform":"rotateY(180deg)"});
                break;
            case "mekadragon": 
            case "alienoid":
            case "theking":
                $("#tokyoBay").css({"transform":"rotateY(0deg)"});
                break;
        }

        setTimeout(() => {
            $("#tokyoBay").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`);            
        }, 18000);

        monster.inBay = true;
        return `${name} entered Tokyo Bay.`;
    } else {
        if(!monster.inTokyo && !monsterInTokyo) {
            
            switch(monster.name) {
                case "cyberkitty": 
                case "gigazaur": 
                case "spacepenguin":
                    $("#tokyoCity").css({"transform":"rotateY(0deg)"});
                    break;
                case "mekadragon": 
                case "alienoid":
                case "theking":
                    $("#tokyoCity").css({"transform":"rotateY(180deg)"});
                    break;
            }
        
            setTimeout(() => {
                $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`);            
            }, 18000);

            monster.inTokyo = true;
            return `${name} entered Tokyo City.`;
        }
    }

    return "Tokyo and Bay are taken.";
}