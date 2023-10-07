const adContent = document.getElementById("ad_content")
const adPreloader = document.getElementById("preload_ad-content")


function showAd() {
    adContent.style.display = "block";
    adPreloader.style.display = "none";
    document.getElementById("video_ad").play(); // https://www.w3schools.com/tags/av_met_play.asp
}
function skipAd() {
    adContent.style.display = "none";
    iframe.src = iframeSrc;
    adPreloader.style.display = "block";
    document.getElementById("video_ad").pause(); // https://www.w3schools.com/tags/av_met_play.asp 
}