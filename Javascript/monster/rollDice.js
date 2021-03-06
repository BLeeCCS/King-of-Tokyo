export function roll(name,dice,count) {
    const diceSet = ["one","two","three","heart","energy","smash"];
    let diceStart = null;
    let diceCount = 0;

    if (dice.length == 0) {
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random(6) * 6 + 1);
            dice.push(diceSet[random-1]);
        }
    }

    if (count > 1) {
        for(let i = 0; i < dice.length; i++) {
            if (dice[i] === "" ) {
                let random = Math.floor(Math.random(6) * 6 + 1);
                dice[i] = diceSet[random-1];

                let animation = setInterval(()=>{
                    let random = Math.floor(Math.random(6) * 6);
                    $(`#${name}_s > #diceContainer > :nth-child(${i+1})`).css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
                },50);

                setTimeout(() => {
                    switch(dice[i]) {
                        case "one":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/one.png)"});
                            break;
                        case "two":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/two.png)"});
                            break;
                        case "three":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/three.png)"});
                            break;
                        case "heart":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/heart.png)"});
                            break;
                        case "energy":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/energy.png)"});
                            break;
                        case "smash":
                            clearInterval(animation);
                            $("#"+name+"_s > #diceContainer > :nth-child("+ (i+1) +")").css({"background-image":"url(./assets/Dice/smash.png)"});
                            break;
                    }
                }, 500 * (i+1));
            }
        }

    } else {
        let animation = setInterval(()=>{
            let random = Math.floor(Math.random(6) * 6);
            $(`#${name}_s > #diceContainer > :nth-child(1)`).css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
        },50);
    
        diceStart = setInterval(() => {
            switch(dice[diceCount]) {
                case "one":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/one.png)"});
                    break;
                case "two":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/two.png)"});
                    break;
                case "three":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/three.png)"});
                    break;
                case "heart":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/heart.png)"});
                    break;
                case "energy":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/energy.png)"});
                    break;
                case "smash":
                    clearInterval(animation);
                    $("#"+name+"_s > #diceContainer > :nth-child("+ (diceCount+1) +")").css({"background-image":"url(./assets/Dice/smash.png)"});
                    break;
            }
            diceCount++;
    
            animation = setInterval(()=>{
                let random = Math.floor(Math.random(6) * 6);
                $("#"+name+"_s > #diceContainer > :nth-child("+(diceCount+1)+")").css({"background-image":"url(./assets/Dice/"+ diceSet[random] +".png)"});
            },50);
    
            if (diceCount == dice.length){
                clearInterval(diceStart);
            }
        }, 500);
    }
}