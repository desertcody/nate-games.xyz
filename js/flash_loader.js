function handleFileChange(event) {
  var fileInput;
  var fileInput = event.target;
  var file = fileInput.files[0];

  if (file) {
    var fileNameElement = document.getElementById("file-name");
    fileNameElement.textContent = "Selected File: " + file.name;
    fileNameElement.style.display = "block";
  }
}

function openFileInput() {
  var fileInput = document.getElementById("file-input");
  fileInput.click();
}
function loadFlash() {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const fullscreenButton = document.getElementById("fullscreen-flash");
  fullscreenButton.style.display = "block";
  var fileInput = document.getElementById("file-input");
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var flashContent = event.target.result;

      var container = document.getElementById("flash-container");

      fullscreenContainer.style.width = "1200px";
      fullscreenContainer.style.height = "625px";
      container.style.width = "100%";
      container.style.height = "100%";
      container.innerHTML = "";

      var embed = document.createElement("embed");
      embed.src = flashContent;
      embed.type = "application/x-shockwave-flash";
      embed.width = "100%";
      embed.height = "100%";

      container.appendChild(embed);
    };
    reader.readAsDataURL(file);
  }
}

function fullscreenFlash() {
  const iframe = document.querySelector("#fullscreen-container");

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
window.RufflePlayer.config = {
  autoplay: "on",
  unmuteOverlay: "hidden",
  contextMenu: false,
  preloader: false,
  warnOnUnsupportedContent: false,
};
