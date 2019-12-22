class game {
    constructor(name) {
        this.monsters = ["mekadragon",
                         "alienoid",
                         "theking",
                         "cyberkitty",
                         "gigazaur",
                         "spacepenquin"];
        this.numOfPlayers = this.monsters.length;
        this.player = name;
        this.tokyoCity = false;
        this.tokyoBay = false;
        this.gameStart();
    }

    gameStart() {
        for (let i = 0; i < this.numOfPlayers; i++) {
            if (this.player === this.monsters[i]) {
                this.monsters.splice(i,1);
            }
        }
        this.playerMonster = new monster();

        for (let i = 0; i < this.monsters.length; i++) {
            console.log(this.monsters[i]);
        }

        this.gameTurn();
    }

    gameTurn() {
        while (this.playerMonster.alive != false) {
            console.log("gameTurn start!");
            this.playerMonster.alive = false;
        }
        this.playerMonster.rollDice();
        console.log(this.playerMonster.dice);
    }
}   