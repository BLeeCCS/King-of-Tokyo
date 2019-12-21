class game {
    constructor(name) {
        this.monsters = ["#mekadragon",
                         "#alienoid",
                         "#theking",
                         "#cyberkitty",
                         "#gigazaur",
                         "#spacepenquin"];
        this.numOfPlayers = this.monsters.length;
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
    }
}   