document.addEventListener("DOMContentLoaded", function () {
  let queryString = window.location.search.substring(1);

  if (queryString.endsWith("=")) {
    queryString = queryString.slice(0, -1);
  }

  const iframe = document.getElementById("content");
  const playButton = document.getElementById("play-button");
  const gameImage = document.getElementById("game-img");
  const gameThumbnail = document.getElementById("game-thumb");
  const loading = document.getElementById("loading-screen");
  const loadingText = document.getElementById("loading-text");
  const nateLogo = document.getElementById("nates-logo");
  const gameLoader = document.getElementById("game-loader");
  const adPreloader = document.getElementById("ad_preloader");

  let iframeSrc = null;

  fetch("/js/json/game-data.json")
    .then((response) => response.json())
    .then((data) => {
      const queryParamsData = data[queryString];

      if (queryParamsData) {
        const pageMapping = queryParamsData.pageMapping;
        const gameTitle = queryParamsData.gameTitle;
        const gameDesc = queryParamsData.description;
        const imageSrc = queryParamsData.imageSrc;

        if (pageMapping) {
          iframeSrc = pageMapping;
        }

        changeText(gameTitle);
        changeDescription(gameDesc);

        if (imageSrc) {
          gameImage.src = imageSrc;
          gameThumbnail.src = imageSrc;
        }
      } else {
        changeText("Error fetching json");
      }
    })
    .catch((error) => {
      console.error("Error fetching json data", error);
    });
  playButton.addEventListener("click", function () {
    if (iframeSrc) {
      setTimeout(() => {
        adPreloader.style.display = "block";
        loading.style.display = "none";
        showAd();
      }, 2000);
      setTimeout(() => {
        loadingText.textContent = "Preparing your game...";
        iframe.style.backgroundColor = "#171717";
      }, 250);
      setTimeout(() => {
        loadingText.textContent = "Loading your game...";
      }, 750);
      setTimeout(() => {
        loadingText.textContent = "Successful! ✅";
        loadingText.style.color = "#42f57e";
      }, 1500);
      loading.style.display = "block";
      loadingText.textContent = "Downloading your game contents...";
      nateLogo.style.height = "20px";
      nateLogo.style.verticalAlign = "middle";
      gameLoader.style.display = "none";
    }
  });
  let adSkipped = false;
  function showAd() {
    const IframeAd = document.getElementById("iframe_ad");
    const adContent = document.getElementById("ad_content");
    const adPreContent = document.getElementById("preload_ad-content");
    const gameImg = document.getElementById("game-thumb").src;
    const gameThumb = document.getElementById("ad_game-thumb");
    const skipcountContainer = document.getElementById("skip_count-container");
    gameThumb.src = gameImg;
    gameThumb.style.objectFit = "cover";
    adContent.style.display = "block";
    const skipButton = document.getElementById("skipButton");
    const skipCount = document.getElementById("skipCount");
    const skipAllow = document.getElementById("skipAllow");
    adPreContent.style.display = "none"; // https://www.w3schools.com/tags/av_event_canplaythrough.asp
    IframeAd.src = "https://cdn.nate-games.xyz/center-ads";
    skipButton.style.padding = "0";
    setTimeout(() => {
      skipButton.addEventListener("click", skipAd);
      skipcountContainer.style.display = "none";
      skipcountContainer.style.opacity = "0";
      skipAllow.style.display = "block";
      skipButton.style.padding = "10px 17px";
    }, 3000);
    setTimeout(() => {
      skipCount.textContent = "2";
    }, 1000);
    setTimeout(() => {
      skipCount.textContent = "1";
    }, 2000);
    if (!adSkipped) {
      setTimeout(skipAd, 10000); // https://www.w3schools.com/tags/av_prop_duration.asp
    }
  }
  function skipAd() {
    if (!adSkipped) {
      adSkipped = true;
      const IframeAd = document.getElementById("iframe_ad");
      const adContent = document.getElementById("ad_content");
      iframe.src = iframeSrc;
      iframe.style.display = "block";
      iframe.style.zIndex = "1";
      adContent.style.display = "none";
      IframeAd.src = null;
    }
  }

  function changeText(dynamicText) {
    document.getElementById("game-title").textContent =
      dynamicText || "Error fetching json";
    document.getElementById("game-h3").textContent =
      dynamicText || "Error fetching json";
  }

  function changeDescription(dynamicText) {
    document.getElementById("game-description").textContent =
      dynamicText || "Play now on nate-games! 👇";
  }

  function enterFullscreen() {
    const iframe = document.querySelector("#embed-container");

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  }

  const fullscreenButton = document.querySelector("#fullscreen-button");
  fullscreenButton.addEventListener("click", enterFullscreen);

  document.addEventListener("keydown", function (event) {
    if (event.key === "F" || event.key === "f") {
      enterFullscreen();
    }
  });

  var currentURL = window.location.href;

  var linkElement = document.getElementById("report-referer");

  linkElement.href += currentURL;

  function setSessionCookie(name, value) {
    const urlParams = new URLSearchParams(window.location.search);
    const key = `${name}_${urlParams.toString()}`;
    document.cookie = `${key}=${value};path=/`;
  }

  function getCookie(name) {
    const urlParams = new URLSearchParams(window.location.search);
    const key = `${name}_${urlParams.toString()}`;
    const cookieName = `${key}=`;
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      let c = cookie.trim();
      if (c.startsWith(cookieName)) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return null;
  }

  const starred = document.getElementById("starred");
  const unstarred = document.getElementById("unstarred");

  if (getCookie("starred") === "true") {
    starred.style.display = "block";
    unstarred.style.display = "none";
  } else {
    starred.style.display = "none";
    unstarred.style.display = "block";
  }

  starred.addEventListener("click", function () {
    if (starred.style.display === "none") {
      unstarred.style.display = "none";
      starred.style.display = "block";
      setSessionCookie("starred", "true");
    } else {
      starred.style.display = "none";
      unstarred.style.display = "block";
      setSessionCookie("starred", "");
    }
  });

  unstarred.addEventListener("click", function () {
    if (unstarred.style.display === "none") {
      starred.style.display = "none";
      unstarred.style.display = "block";
      setSessionCookie("starred", "");
    } else {
      unstarred.style.display = "none";
      starred.style.display = "block";
      setSessionCookie("starred", "true");
    }
  });
});


function hidebar() {
  const Likes = document.querySelector(".likes");
  const bar = document.querySelector(".bar");
  const iframe = document.querySelector("#content");
  const showbarButton = document.querySelector(".show-bar");
  const fullscreenbutton = document.querySelector("#fullscreen-button");
  fullscreenbutton.style.display = "none";
  bar.style.display = "none";
  iframe.style.height = "100%";
  showbarButton.style.display = "block";
  Likes.style.display = "none";
}

function showbar() {
  const Likes = document.querySelector(".likes");
  const showbarButton = document.querySelector(".show-bar");
  const bar = document.querySelector(".bar");
  const iframe = document.querySelector("#content");
  const fullscreenbutton = document.querySelector("#fullscreen-button");
  iframe.style.height = "calc(100% - 50px)";
  bar.style.display = "block";
  Likes.style.display = "block";
  fullscreenbutton.style.display = "block";
  showbarButton.style.display = "none";
}