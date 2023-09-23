const urlMappings = {
  '/cosmic-city': 'https://cosmic-city.github.io', /*TEST*/
  '/ip-address': 'https://ip.nate-games.workers.dev',
  '/404/stats-for-nerds': '/404',
};

function changeIframeSource() {
  const iframe = document.getElementById('game-id');
  const currentURL = window.location.pathname;

  if (urlMappings[currentURL]) {
    iframe.src = urlMappings[currentURL];
    iframe.target = '_top';
    document.title = 'Classes'
    changeFavicon('/game/class.png');
  } else {
    iframe.src = '';
    iframe.style.display = 'none';
    resetFavicon();
  }
}

function changeFavicon(newFaviconPath) {
  var link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
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

window.addEventListener('load', changeIframeSource);
