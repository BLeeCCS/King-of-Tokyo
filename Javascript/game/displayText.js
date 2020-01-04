export function displayText(text = "",display = "hidden",button = "hidden") {
    $("#textChoice").text("");
    $(".button").css("visibility",button);
    $("#bubble").css("visibility",display);

    var textCount = 0;
    var speed = 20;

    let textAnimation = setInterval(() => {
        $("#textChoice").text($("#textChoice").text() + text.charAt(textCount));
        textCount++;
        if (textCount == text.length) {
            clearInterval(textAnimation);
        }
    }, speed);
}