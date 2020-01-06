export function nameChange(name) {
    let newName = name;
    
    switch(newName) {
        case "alienoid":
            newName = "ALIENOID";
            break;
        case "cyberkitty":
            newName = "CYBERKITTY"
            break;
        case "gigazaur":
            newName = "GIGAZAUR"
            break;
        case "mekadragon":
            newName = "MEKADRAGON"
            break;
        case "spacepenguin":
            newName = "SPACEPENGUIN"
            break;
        case "theking":
            newName = "THEKING"
            break;
    }
    return newName;
}