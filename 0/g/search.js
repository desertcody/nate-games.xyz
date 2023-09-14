function search() {
    var input = document.getElementById("search-bar").value.toLowerCase();
    var cards = document.getElementsByClassName("game-card");

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

document.getElementById("search-bar").addEventListener("input", search);