$(document).ready(appStart);

import game from "./Javascript/game/game.js"

function appStart() {
    //selectionScreen();
}

function selectionScreen() {
    var display = "visible";
    var changefont = setInterval(()=>{
        $("#text").css("visibility",fontFlash(display));
      },200);

    $("#mekadragon").hover(moveLeft,moveCenter);
    $("#alienoid").hover(moveLeft,moveCenter);
    $("#theking").hover(moveLeft,moveCenter);
    $("#cyberkitty").hover(moveRight,moveCenter);
    $("#gigazaur").hover(moveRight,moveCenter);
    $("#spacepenguin").hover(moveRight,moveCenter);

    $("#mekadragon").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("mekadragon");
        newGame.gameStart();
    })
    $("#alienoid").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("alienoid");
        newGame.gameStart();
    })
    $("#theking").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("theking");
        newGame.gameStart();
    })
    $("#cyberkitty").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("cyberkitty");
        newGame.gameStart();
    })
    $("#gigazaur").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("gigazaur");
        newGame.gameStart();
    })
    $("#spacepenguin").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        let newGame = new game("spacepenguin");
        newGame.gameStart();
    })

    function fontFlash(text) {
        var flash = text;
        if ( flash === "visible"){
            display = "hidden";
            return "visible";
        }
        display = "visible";
        return "hidden";
      }
}

function moveLeft() {
    $(this).css("background-position","left");
}

function moveCenter() {
    $(this).css("background-position","center");
}

function moveRight() {
    $(this).css("background-position","right");
}
