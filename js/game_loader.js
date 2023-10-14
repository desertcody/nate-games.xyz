const gameContainer = document.getElementById("game-container");
const loadingMessage = document.createElement("p");
loadingMessage.textContent = "Loading games content...";
const centerAlign = document.getElementById("center-text");
const imageElement = document.createElement("img");
const respectiveNote = document.getElementById("respective-note");
var createLinebreak = document.createElement("br");
const flashOpener = document.getElementById("flash-opener");
imageElement.src =
  "https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/ring-resize-white-36.svg";

centerAlign.appendChild(loadingMessage);
loadingMessage.appendChild(createLinebreak);
loadingMessage.appendChild(imageElement);

fetch("/js/json/games.json")
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      centerAlign.removeChild(loadingMessage);

      const urlParams = new URLSearchParams(window.location.hash.substr(1)); // Remove the '#' character

      data.forEach((game) => {
        if (urlParams.toString() === "" || window.location.pathname === "/") {
          createGameCard(game, gameContainer);
        } else {
          const tags = game.tags.split(", ");

          const matchingTags = tags.filter((tag) =>
            urlParams.has(tag.toLowerCase())
          );

          if (matchingTags.length > 0) {
            createGameCard(game, gameContainer);
          }
        }
      });
    }, 0);
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
    gameContainer.removeChild(loadingMessage);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error loading games. Please try again later.";
    gameContainer.appendChild(errorMessage);
  });

function createGameCard(game, container) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game-card");

  const gameUrl = document.createElement("a");
  gameUrl.href = game.url;
  gameUrl.classList.add("game-url");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const img = document.createElement("img");
  img.src = game.imageSrc;
  img.onerror = function () {
    this.src = "/game/image-placeholder.svg";
  };

  const h3 = document.createElement("h3");
  h3.textContent = game.name;

  imageContainer.appendChild(img);
  gameCard.appendChild(imageContainer);
  gameCard.appendChild(h3);
  gameUrl.appendChild(gameCard);
  container.appendChild(gameUrl);
  gameUrl.addEventListener("click", function (e) {
    if (game.requiresProxy) {
      const userResponse = prompt(
        "A Proxy or VPN is required to play this game. Do you have a proxy or VPN enabled? (yes/no)"
      );
      if (userResponse && userResponse.toLowerCase() === "yes") {
      } else {
        e.preventDefault();
        alert(
          "You need a proxy or VPN to play this game. Please enable one and come back."
        );
      }
    }
  });
  if (game.hotGame) {
    const hotLabel = document.createElement("label");
    hotLabel.setAttribute("id", "hot_game");
    imageContainer.appendChild(hotLabel);
  }
  if (game.newGame) {
    const newLabel = document.createElement("label");
    newLabel.setAttribute("id", "new_game");
    imageContainer.appendChild(newLabel);
  }
  if (game.target === "_blank") {
    gameUrl.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(game.url, "blank");
    });
  }
  if (game.target === "window.open") {
    gameUrl.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(game.url, "_blank", "width=800,height=600");
    });
  }
}
