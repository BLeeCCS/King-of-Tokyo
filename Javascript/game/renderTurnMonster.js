export function renderTurnMonster(next,player) {
    var top = null;

    switch(next) {
        case 0:
            top = 5;
            break;
        case 1:
            top = 20;
            break;
        case 2:
            top = 35;
            break;
        case 3:
            top = 50;
            break;
        case 4:
            top = 65;
            break;
        case 5:
            top = 80;
            break;
    }

    let startTurn = setInterval(()=>{
        let render = {"top": top+"%","left":"30.99%","visibility":"visible"};
        $("#select").css(render);
        
        if (!player) {
            clearInterval(startTurn);
        }
        if (player) {
            clearInterval(startTurn);
        }
        
    },50);
}