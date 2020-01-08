export function displayText(text = "",display = "hidden",button = "hidden") {
    $("#textChoice").text("");
    $(".button").css("visibility",button);
    $("#bubble").css("visibility",display);

    if (text !== "") {
        $("#choice").css("background-image","url(../assets/Reporter/reporterSpeaks.gif)");
    }

    let name = text.search("CYBERKITTY");
    console.log("name is ", name);

    let textCount = 0;
    let textAnimation = setInterval(() => {
        $("#textChoice").text($("#textChoice").text() + text.charAt(textCount));
        textCount++;
        if (textCount == text.length) {
            clearInterval(textAnimation);
            $("#choice").css("background-image","url(../assets/Reporter/reporter.gif)");
        }
    }, 35);
}