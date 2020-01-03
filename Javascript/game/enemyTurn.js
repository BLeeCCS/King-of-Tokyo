export function enemy(monstersArray,next) {
    $(`#${monstersArray[next].name}Icon`).css({"border":"solid 3px green"});
    monstersArray[next].rollDice();
    setTimeout(()=>{
        $(`#${monstersArray[next].name}Icon`).css({"border":""});
    },4200)
}