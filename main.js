$(document).ready(appStart);

function appStart() {
    selectionScreen();
    console.log("app start");
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
    $("#spacepenquin").hover(moveRight,moveCenter);

    $("#mekadragon").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("mekadragon");
    })
    $("#alienoid").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("alienoid");
    })
    $("#theking").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("theking");
    })
    $("#cyberkitty").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("cyberkitty");
    })
    $("#gigazaur").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("gigazaur");
    })
    $("#spacepenquin").on("click",()=>{
        $("#modal").css("display","none");
        clearInterval(changefont);
        var newGame = new game("spacepenquin");
    })

    function moveLeft() {
        $(this).css("background-position","left");
    }
    function moveCenter() {
        $(this).css("background-position","center");
    }
    function moveRight() {
        $(this).css("background-position","right");
    }
    
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
