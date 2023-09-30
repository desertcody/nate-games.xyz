const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const videoPopup = document.getElementById("video-popup");

openPopupButton.addEventListener("click", function () {
    videoPopup.style.display = "flex";
});

closePopupButton.addEventListener("click", function () {
    videoPopup.style.display = "none";
});