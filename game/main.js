document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const iframe = document.getElementById("content");
    const playButton = document.getElementById("play-button");
    const gameImage = document.getElementById("game-img");
    const gameThumbnail = document.getElementById("game-thumb");
    const loading = document.getElementById("loading-screen");
    const loadingText = document.getElementById("loading-text");
    const nateLogo = document.getElementById("nates-logo");

    let iframeSrc = null;

    fetch('game-data.json')
        .then(response => response.json())
        .then(data => {
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
        .catch(error => {
            console.error('Error fetching json data', error);
        });

    playButton.addEventListener("click", function () {
        if (iframeSrc) {
            setTimeout(() => {
                iframe.src = iframeSrc;
                loading.style.display = "none";
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
            iframe.style.display = "block";
            loading.style.display = "block";
            loadingText.textContent = "Downloading your game contents...";
            nateLogo.style.height = "20px";
            nateLogo.style.verticalAlign = "middle";
        }
    });
});

function changeText(dynamicText) {
    document.getElementById('game-title').textContent = dynamicText || 'Error fetching json';
    document.getElementById('game-h3').textContent = dynamicText || 'Error fetching json';
}

function changeDescription(dynamicText) {
    document.getElementById('game-description').textContent = dynamicText || 'Play now on nate-games! 👇';
}

function enterFullscreen() {
    const iframe = document.querySelector('#embed-container');
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

document.addEventListener('keydown', function (event) {
    if (event.key === 'F' || event.key === 'f') {
        enterFullscreen();
    }
});

var currentURL = window.location.href;

var linkElement = document.getElementById("report-referer");

linkElement.href += currentURL;


function hidebar() {
    const bar = document.querySelector('.bar')
    const iframe = document.querySelector('#content')
    const showbarButton = document.querySelector('.show-bar')
    const fullscreenbutton = document.querySelector('#fullscreen-button')
    fullscreenbutton.style.display = "none";
    bar.style.display = "none";
    iframe.style.height = "100%";
    showbarButton.style.display = "block";

}

function showbar() {
    const showbarButton = document.querySelector('.show-bar')
    const bar = document.querySelector('.bar')
    const iframe = document.querySelector('#content')
    const fullscreenbutton = document.querySelector('#fullscreen-button')
    iframe.style.height = "calc(100% - 50px)";
    bar.style.display = "block";
    fullscreenbutton.style.display = "block";
    showbarButton.style.display = "none";
}

document.getElementById("revealLevel").addEventListener("click", function () {
    var level = document.querySelector("#levelContent");
    if (level.style.display === "none" || level.style.display === "") {
      level.style.display = "block";
    } else {
      level.style.display = "none";
    }
  });
  