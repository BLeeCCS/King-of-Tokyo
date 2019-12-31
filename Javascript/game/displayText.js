export function displayText(text = "",display = "hidden",button = "hidden") {
    $("#textChoice").text(text);
    $("#choice").css("visibility",display);
    $(".button").css("visibility",button);
}