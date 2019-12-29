class nameChange {
    constructor(name) {
        this.name = name;
    }
    nameConverter() {
        switch(this.name) {
            case "alienoid":
                this.name = "Alienoid";
                break;
            case "cyberkitty":
                this.name = "CyberKitty"
                break;
            case "gigazaur":
                this.name = "Gigazaur"
                break;
            case "mekadragon":
                this.name = "MekaDragon"
                break;
            case "spacepenguin":
                this.name = "SpacePenguin"
                break;
            case "theking":
                this.name = "TheKing"
                break;
        }
        return this.name;
    }
}