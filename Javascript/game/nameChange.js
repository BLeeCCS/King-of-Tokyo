export function nameChange(name) {
    let newName = name;
    
    switch(newName) {
        case "alienoid":
            newName = "ALIENOID";
            break;
        case "cyberkitty":
            newName = "CYBER KITTY"
            break;
        case "gigazaur":
            newName = "GIGAZAUR"
            break;
        case "mekadragon":
            newName = "MEKA DRAGON"
            break;
        case "spacepenguin":
            newName = "SPACE PENGUIN"
            break;
        case "theking":
            newName = "THE KING"
            break;
    }
    return newName;
}