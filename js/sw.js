const dateString = "2023-04-26T18:39:15Z";
const event = new Date(dateString);
const formattedDateString = event.toString();
const isoString = event.toISOString();
const createText = document.getElementById("createText")
createText.textContent = formattedDateString;
console.log(formattedDateString);
console.log(isoString);


function handleKeyPress(event) {

  if (event.code === 'Backquote') {
    window.location.href = "https://launchpad.classlink.com";
  }
}

document.addEventListener('keydown', handleKeyPress);

var allowedDomains = [
  "https://nate-games.xyz",
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app",
  "https://nates-cdn.pages.dev",
  "http://192.168.4.63:8080",
  "http://localhost:8080"
];

var currentDomain = window.location.origin;

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://nate-games.xyz/en-us/sitelock";
}

var password = 'i\x20am\x20him'