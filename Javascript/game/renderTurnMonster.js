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

        if (player) {
            clearInterval(startTurn);
        }

        switch(next) {
            case 1:
                if (top == 20) {clearInterval(startTurn);}
                break;
            case 2:
                if (top == 35) {clearInterval(startTurn);}
                break;
            case 3:
                if (top == 50) {clearInterval(startTurn);}
                break;
            case 4:
                if (top == 65) {clearInterval(startTurn);}
                break;
            case 5:
                if (top == 80) {clearInterval(startTurn);}
                break;
        }

        top++;
        
    },50);
}