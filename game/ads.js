function showAd() {
  const videoAd = document.getElementById("video_ad");
  const adContent = document.getElementById("ad_content");
  const adPreContent = document.getElementById("preload_ad-content");
  const gameImg = document.getElementById("game-thumb").src;
  const gameThumb = document.getElementById("ad_game-thumb");
  const skipcountContainer = document.getElementById("skip_count-container");
  gameThumb.src = gameImg;
  adContent.style.display = "block";
  const skipButton = document.getElementById("skipButton");
  const skipCount = document.getElementById("skipCount");
  const skipAllow = document.getElementById("skipAllow");
  adPreContent.style.display = "none"; // https://www.w3schools.com/tags/av_event_canplaythrough.asp
  const videoUrls = [
    "/game/media/acrobats_got_it.mp4",
    "/game/media/dog_tested.mp4",
    "https://cdn.nate-games.xyz/ads",
  ];
  // https://stackoverflow.com/questions/63003226/randomly-changing-video-src-with-js
  const randomIndex = Math.floor(Math.random() * videoUrls.length);
  const randomVideoUrl = videoUrls[randomIndex];
  videoAd.src = randomVideoUrl;
  videoAd.addEventListener("canplaythrough", function () {
    videoAd.play();
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
    const videoDuration = videoAd.duration;
    setTimeout(skipAd, videoDuration * 1000); // https://www.w3schools.com/tags/av_prop_duration.asp
  });
}
function skipAd() {
  const continueButton = document.getElementById("continueButton");
  const adContent = document.getElementById("ad_content");
  // const adPreloader = document.getElementById("preload_ad-content")
  adContent.style.display = "none";
  // adPreloader.style.display = "block";
  continueGame(); // Automatic goes to game instead of having to press the btn
  continueButton.addEventListener("click", continueGame);
  document.getElementById("video_ad").pause(); // https://www.w3schools.com/tags/av_met_play.asp
}

function continueGame() {
  iframe.src = iframeSrc;
  iframe.style.display = "block";
  iframe.style.zIndex = "1";
}
