export function displayTextWithIcon(name,text = "",display = "hidden") {
    let backgroundImage = null;
    let width = null;
    let height = null;

    switch(name) {
        case "alienoid":
            backgroundImage = "../assets/NameIcon/alienoidName.png";
            width = 80;
            height = 40;
            break;
        case "cyberkitty":
            backgroundImage = "../assets/NameIcon/cyberkittyName.png";
            width = 60;
            height = 50;
            break;
        case "gigazaur":
            backgroundImage = "../assets/NameIcon/gigazaurName.png";
            width = 80;
            height = 30;
            break;
        case "mekadragon":
            backgroundImage = "../assets/NameIcon/mekadragonName.png";
            width = 80;
            height = 50;
            break;
        case "spacepenguin":
            backgroundImage = "../assets/NameIcon/spacepenguinName.png";
            width = 70;
            height = 50;
            break;
        case "theking":
            backgroundImage = "../assets/NameIcon/thekingName.png";
            width = 70;
            height = 50;
            break;
    }

    $("#bubble").css("visibility",display);
    $("#nameIcon").css({"background-image":`url(${backgroundImage})`});
    $("#nameIcon").css({"background-size":`${width}% ${height}%`});
}