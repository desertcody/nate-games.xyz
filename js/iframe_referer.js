// Only works on a 404 page
const urlMappings = {
  "/cdn_loader": "https://cdn.nate-games.xyz/developer-access" // Log if isDeveloper access
};

function changeIframeSource() {
  const iframe = document.getElementById("game-id");
  const currentURL = window.location.pathname;
  const referrer = document.referrer;

  if (referrer === "https://nate-games.xyz/game/") {
    if (urlMappings[currentURL]) {
      iframe.src = urlMappings[currentURL];
      iframe.target = "_top";
      document.title = "Classes";
      changeFavicon("/game/class.png");
    } else {
      iframe.src = "";
      iframe.style.display = "none";
      resetFavicon();
    }
  } else {
    console.log("Referrer is not https://nate-games.xyz/game/");
  }
}

function changeFavicon(newFaviconPath) {
  var link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = newFaviconPath;
}

function resetFavicon() {
  var link = document.querySelector('link[rel="icon"]');
  if (link) {
    link.parentNode.removeChild(link);
  }
}

window.addEventListener("load", changeIframeSource);