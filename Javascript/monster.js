class monster {
    constructor(name,player,ai) {
        this.name = name;
        this.player = player;
        this.AI = ai;
        this.lifePoint = 10;
        this.victoryPoint = 0;
        this.energyPoint = 0;
        this.alive = true;
        this.dice = [];
        this.rollAgain = true;
        this.count = 1;
        this.inTokyo = false;
        this.inBay = false;
    }

    rollDice() {
        const diceSet = ["one","two","three","heart","energy","smash"];
        let diceStart = null;
        let diceCount = 0;

        for (let i = 0; i < 6; i++) {
            var random = Math.floor(Math.random(6) * 6 + 1);
            this.dice.push(diceSet[random-1]);
        }

        if (this.count > 1) {
            this.dice = [];
            for (let i = 0; i < 6; i++) {
                var random = Math.floor(Math.random(6) * 6 + 1);
                this.dice.push(diceSet[random-1]);
            }
        }

        var animation = setInterval(()=>{
            let random = Math.floor(Math.random(6) * 6);
            $("#"+this.name+"_s > #diceContainer > :nth-child(1)").css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
        },50);

        diceStart = setInterval(() => {
            switch(this.dice[diceCount]) {
                case "one":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/one.png)"});
                    break;
                case "two":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/two.png)"});
                    break;
                case "three":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/three.png)"});
                    break;
                case "heart":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/heart.png)"});
                    break;
                case "energy":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/energy.png)"});
                    break;
                case "smash":
                    clearInterval(animation);
                    $("#"+this.name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/smash.png)"});
                    break;
            }
            diceCount++;

            animation = setInterval(()=>{
                let random = Math.floor(Math.random(6) * 6);
                $("#"+this.name+"_s > #diceContainer > :nth-child("+(diceCount+1)+")").css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
            },50);

            if (diceCount == this.dice.length){
                clearInterval(diceStart);
            }
        }, 500);
    }

    resolveDice(monsters) {
        let heal = 0;
        let damage = 0;
        let energyPts = 0;
        let oneCount = 0;
        let twoCount = 0;
        let threeCount = 0;
        let firstTurn = true;
        var occupied = null;

        for (let i = 0; i < this.dice.length; i++) {
            switch(this.dice[i]) {
                case "one":
                    oneCount++;
                    break;
                case "two":
                    twoCount++;
                    break;
                case "three":
                    threeCount++;
                    break;
                case "heart":
                    heal++;
                    break;
                case "energy":
                    energyPts++;
                    break;
                case "smash":
                    damage++;
                    break;
            }
        }

        if (oneCount >= 3) {
            this.victoryPoint += 1;
            if ((oneCount - 3) > 0) {
                this.victoryPoint += (oneCount - 3);
            }
        }

        if (twoCount >= 3) {
            this.victoryPoint += 2;
            if ((twoCount - 3) > 0) {
                this.victoryPoint += (twoCount - 3);
            }
        }

        if (threeCount >= 3) {
            this.victoryPoint += 1;
            if ((threeCount - 3) > 0) {
                this.victoryPoint += (threeCount - 3);
            }
        }

        if (energyPts > 0) {
            this.energyPoint += energyPts;
        }

        if (this.alive && this.lifePoint < 10) {
            for (let i = heal; i > 0; i--) {
                if (this.lifePoint < 10) {
                    this.lifePoint++;
                }
            }
        }

        for (let i = 0; i < monsters.length; i++) {
            if (monsters[i].inBay || monsters[i].inTokyo) {
                firstTurn = false;
            }
        }
        
        if (damage > 0 && !firstTurn) {
            if (this.inBay || this.inTokyo) {
                for (let i = 0; i < monsters.length; i++) {
                    if (monsters[i].name != this.name){
                        if (!monsters[i].inTokyo || !monsters[i].inBay) {
                            monsters[i].lifePoint -= damage;
                        }
                    }
                }
                setTimeout(()=>{
                    $("#textChoice").text(`Everyone not in City took ${damage} damage.`);
                    $("#choice").css("visibility","visible");
                },3200);
            } else {
                for (let i = 0; i < monsters.length; i++) {
                    if (monsters[i].name != this.name){
                        if (monsters[i].inTokyo) {
                            monsters[i].lifePoint -= damage;
 
                            occupied = monsters[i].yield(monsters[i].inTokyo,monsters[i].inBay)
                            setTimeout(()=>{
                                $("#textChoice").text(`Monsters in City took ${damage} damage.`);
                                $("#choice").css("visibility","visible");
                            },3200);

                            setTimeout(()=>{
                                if (!occupied) {
                                    this.inTokyo = true;
                                    let name = new nameChange(this.name);
                                    $("#textChoice").text(`${name.nameConverter()} entered Tokyo City!`);
                                    $("#choice").css("visibility","visible");
                    
                                    switch(this.name) {
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
                    
                                    $("#tokyoCity").css({"background-image":`url(./assets/M_Fig/${name.nameConverter()}.png)`});
                                }
                            },3600);
                        }

                        if (monsters[i].inBay) {
                            monsters[i].lifePoint -= damage;
  
                            occupied = monsters[i].yield(monsters[i].inTokyo,monsters[i].inBay)
                            
                            setTimeout(()=>{
                                $("#textChoice").text(`Monsters in City took ${damage} damage.`);
                                $("#choice").css("visibility","visible");
                            },3200);

                            setTimeout(()=>{
                                if (!occupied) {
                                    if (monsters.length >= 5) {
                                        this.inBay = true;
                                        let name = new nameChange(this.name);
                                        $("#textChoice").text(`${name.nameConverter()} entered Tokyo Bay!`);
                                        $("#choice").css("visibility","visible");
                        
                                        switch(this.name) {
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
                        
                                        $("#tokyoBay").css({"background-image":`url(./assets/M_Fig/${name.nameConverter()}.png)`});
                                    }
                                }
                            },3600);
                        }
                    }
                }
            }
        }
    }

    yield(tokyo,bay) {  
        // if (this.player && this.lifePoint < 10 && (this.inBay || this.inTokyo)) {
        //     $("#textChoice").text("Yield?");
        //     $("#choice").css("visibility","visible");
        //     $(".button").css("visibility","visible");

        //     $("#yes").on("click",()=>{
        //         $("#yes").off("click");

        //         if (this.inBay == true) {this.inBay = false;}
        //         if (this.inTokyo == true) {this.inTokyo = false;}

        //         $("#tokyoBay").css({"background-image": ""});
        //         $("#textChoice").text("");
        //         $("#choice").css("visibility","hidden");
        //         $(".button").css("visibility","hidden");
        //         return false;
        //     })

        //     $("#no").on("click",()=>{
        //         $("#no").off("click");
        //         $("#textChoice").text("");
        //         $("#choice").css("visibility","hidden");
        //         $(".button").css("visibility","hidden");
        //         return true;
        //     })
        // }
        
        if (tokyo || bay) {
            if (this.AI && this.lifePoint < 6) {
                let name = new nameChange(this.name);
                $("#textChoice").text(`${name.nameConverter()} ran away.`);
                $("#choice").css("visibility","visible");

                if (this.inTokyo) {
                    this.inTokyo = false;
                    $("#tokyoCity").css({"background-image": ""});
                    return false;
                }

                if (this.inBay) {
                    this.inBay = false;
                    $("#tokyoBay").css({"background-image": ""});
                    return false;
                }

                return true;
            }
        }
    }

    enterTokyo(tokyo,bay,monsters) {
        setTimeout(()=>{
            let name = new nameChange(this.name);
            if(!tokyo) {
                this.inTokyo = true;
                $("#textChoice").text(`${name.nameConverter()} entered Tokyo City!`);
                $("#choice").css("visibility","visible");

                switch(this.name) {
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

                $("#tokyoCity").css({"background-image":`url(./assets/M_Fig/${name.nameConverter()}.png)`});
                return;
            }

            if (!bay && monsters.length >= 5) {
                this.inBay = true;
                $("#textChoice").text(`${name.nameConverter()} entered Tokyo Bay!`);
                $("#choice").css("visibility","visible");

                switch(this.name) {
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

                $("#tokyoBay").css({"background-image":`url(./assets/M_Fig/${name.nameConverter()}.png)`});
            }
        },3200)
    }

    buyPowerCards() {

    }

    endOfTurn() {

    }
}