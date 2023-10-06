const gameContainer = document.getElementById('game-container');
const loadingMessage = document.createElement('p');
loadingMessage.textContent = "Loading games content...";
const centerAlign = document.getElementById('center-text')
const imageElement = document.createElement('img');
const respectiveNote = document.getElementById('respective-note');
var createLinebreak = document.createElement('br');
const flashOpener = document.getElementById('flash-opener');
searchBar = document.getElementById('search-contents');
const adblocker = document.getElementById('adblocker')
const joinDiscord = document.getElementById('join-discord')
imageElement.src = "https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/ring-resize-white-36.svg";

centerAlign.appendChild(loadingMessage);
loadingMessage.appendChild(createLinebreak);
loadingMessage.appendChild(imageElement);
respectiveNote.style.display = "none";
searchBar.style.display = "none";
joinDiscord.style.display = "none";
adblocker.style.display = "none";
flashOpener.style.display = "none";
loadingMessage.style.marginTop = "25%"

fetch('games.json')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            centerAlign.removeChild(loadingMessage);
            respectiveNote.style.display = "block";
            searchBar.style.display = "block";
            joinDiscord.style.display = "block";
            adblocker.style.display = "flex";
            flashOpener.style.display = "flex"

            const urlParams = new URLSearchParams(window.location.search);

            data.forEach(game => {
                if (urlParams.toString() === '' || window.location.pathname === '/') {
                    createGameCard(game, gameContainer);
                } else {
                    const tags = game.tags.split(', ');

                    const matchingTags = tags.filter(tag => urlParams.has(tag.toLowerCase()));

                    if (matchingTags.length > 0) {
                        createGameCard(game, gameContainer);
                    }
                }
            });
        }, 500);

    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
        gameContainer.removeChild(loadingMessage);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error loading games. Please try again later.';
        gameContainer.appendChild(errorMessage);
    });

function createGameCard(game, container) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    const gameUrl = document.createElement('a');
    gameUrl.href = game.url;
    gameUrl.classList.add('game-url');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = game.imageSrc;
    img.onerror = function () {
        this.src = '/game/image-placeholder.svg';
    };

    const h3 = document.createElement('h3');
    h3.textContent = game.name;

    imageContainer.appendChild(img);
    gameCard.appendChild(imageContainer);
    gameCard.appendChild(h3);
    gameUrl.appendChild(gameCard);
    container.appendChild(gameUrl);
    gameUrl.addEventListener('click', function (e) {
        if (game.requiresProxy) {
            const userResponse = prompt('A Proxy or VPN is required to play this game. Do you have a proxy or VPN enabled? (yes/no)');
            if (userResponse && userResponse.toLowerCase() === 'yes') {
            } else {
                e.preventDefault();
                alert('You need a proxy or VPN to play this game. Please enable one and come back.');
            }
        }
    });
    if (game.target === "_blank") {
        gameUrl.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(game.url, 'blank');
        });
    }
    if (game.target === "window.open") {
        gameUrl.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(game.url, '_blank', 'width=800,height=600');
        });
    }
}