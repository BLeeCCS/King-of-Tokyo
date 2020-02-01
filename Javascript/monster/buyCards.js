import { displayText } from "../game/displayText.js"
import { viewCardOn } from "../cards/viewCardOn.js"
import { viewCardOff } from "../cards/viewCardOff.js"
import { checkAndBuyCard } from "../cards/checkAndBuyCard.js"

export function buyCards(monster,card1,card2,card3,deck) {
    if (monster.player) {
        displayText("Do you want to buy power cards? Click on card to Purchase.","visible");
        setTimeout(()=>{
            $(".button").css("visibility","visible");
        },2200);

        $("#card1").hover(viewCardOn.bind(this,`../assets/Cards/${card1}.png`),viewCardOff);
        $("#card2").hover(viewCardOn.bind(this,`../assets/Cards/${card2}.png`),viewCardOff);
        $("#card3").hover(viewCardOn.bind(this,`../assets/Cards/${card3}.png`),viewCardOff);

        $("#card1").on("click",()=>{
            if (checkAndBuyCard(monster,card1)) {
                card1 = "" + deck.splice(0,1);
                $("#card1").css({"background-image":`url(../assets/Cards/${card1}.png`});
                $("#card1").hover(viewCardOn.bind(this,`../assets/Cards/${card1}.png`),viewCardOff);
            };
        });
        $("#card2").on("click",()=>{
            if (checkAndBuyCard(monster,card2)) {
                card2 = "" + deck.splice(0,1);
                $("#card2").css({"background-image":`url(../assets/Cards/${card2}.png`});
                $("#card2").hover(viewCardOn.bind(this,`../assets/Cards/${card2}.png`),viewCardOff);
            };
        });
        $("#card3").on("click",()=>{
            checkAndBuyCard(monster,card3,deck);
        });
    }
}