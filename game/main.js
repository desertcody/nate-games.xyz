document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const preloaderContainer = document.querySelector('.preloader-container');
    const iframe = document.getElementById("content");
    const playButton = document.getElementById("play-button");
    const gameImage = document.getElementById("game-img");

    fetch('game-data.json')
        .then(response => response.json())
        .then(data => {
            const queryParamsData = data[queryString];

            if (queryParamsData) {
                const pageMapping = queryParamsData.pageMapping;
                const gameTitle = queryParamsData.gameTitle;
                const imageSrc = queryParamsData.imageSrc;

                if (pageMapping) {
                    iframe.src = pageMapping;
                }

                changeText(gameTitle);

                if (imageSrc) {
                    gameImage.src = imageSrc;
                }
            } else {
                changeText("Error fetching json");
            }
        })
        .catch(error => {
            console.error('Error fetching json data', error);
        });

    playButton.addEventListener("click", function () {
        iframe.style.display = "block";
    });
});

function changeText(dynamicText) {
    document.getElementById('game-title').textContent = dynamicText || 'Error fetching json';
    document.getElementById('game-h3').textContent = dynamicText || 'Error fetching json';
}



// Bug Report

var currentURL = window.location.href;

var linkElement = document.getElementById("bug.referer");

linkElement.href += currentURL;

// 4th and goal 2022 https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://284711640-164027483921740274.preview.editmysite.com/uploads/b/139890129-601329693740539694/files/4g22.xml