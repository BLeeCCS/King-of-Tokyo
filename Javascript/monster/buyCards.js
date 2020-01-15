import { displayText } from "../game/displayText.js"
import { viewCardOn } from "../cards/viewCardOn.js"
import { viewCardOff } from "../cards/viewCardOff.js"

export function buyCards(monster,card1,card2,card3) {
    if (monster.player) {
        displayText("Do you want to buy power cards? Click to Select\nHover to View","visible");
        setTimeout(()=>{
            $(".button").css("visibility","visible");
        },2200);

        $("#card1").hover(viewCardOn.bind(this,`../assets/Cards/${card1}.png`),viewCardOff);
        $("#card2").hover(viewCardOn.bind(this,`../assets/Cards/${card2}.png`),viewCardOff);
        $("#card3").hover(viewCardOn.bind(this,`../assets/Cards/${card3}.png`),viewCardOff);
    }
}