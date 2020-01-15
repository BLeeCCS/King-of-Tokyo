export function viewCardOn(cardImage) {
    $("#bigCard").css({"visibility":"visible"});
    $("#bigCard").css({"background-image":`url(${cardImage})`});
}