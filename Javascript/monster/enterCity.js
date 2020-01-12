import { displayText } from "../game/displayText.js";

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

        monster.inTokyo = true;

        return ( 
            console.log(`${name} entered Tokyo City. Gained 1 Victory Point.`),
            monster.victoryPoint += 1,
            $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`),
            displayText(`${name} entered Tokyo City. Gained 1 VP.`,"visible")
        );
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

            monster.inTokyo = true;
            
            return ( 
                console.log(`${name} entered Tokyo City. Gained 1 Victory Point.`),
                monster.victoryPoint += 1,
                $("#tokyoCity").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`),
                displayText(`${name} entered Tokyo City. Gained 1 VP.`,"visible")
            );
        } else {

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
    
            monster.inBay = true;
            
            return ( 
                console.log(`${name} entered Tokyo Bay. Gained 1 Victory Point.`),
                monster.victoryPoint += 1,
                $("#tokyoBay").css("background-image",`url(../assets/M_Fig/${namePNG}.png)`),
                displayText(`${name} entered Tokyo Bay. Gained 1 VP.`,"visible")
            );
        }
    }
}