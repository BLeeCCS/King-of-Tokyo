export function shuffleCards(cardArray) {
    let shuffled = [];

    for (let i = cardArray.length; i > 0; i--) {
        let random = Math.floor(Math.random(i) * i);
        let card = cardArray.splice(random,1);
        shuffled.push(card + "");
    }

    return shuffled;
}