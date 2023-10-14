function handleKeyPress(event) {
  if (event.code === "Backquote") {
    window.location.href = "https://launchpad.classlink.com";
  }
}

document.addEventListener("keydown", handleKeyPress);

var allowedDomains = [
  "https://nate-games.xyz",
  "https://nate-games.xyz.",
  "https://nates-cdn.pages.dev", // Hosting provider
  "http://192.168.4.63:8080",
  "http://localhost:8080",
];

var currentDomain = window.location.origin;
console.log("Page hostname is " + window.location.hostname); // https://www.w3schools.com/js/js_window_location.asp
console.log("Port number is " + window.location.port);

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://nate-games.xyz/en-us/sitelock";
}

let msg = "%c Brought to you by http://nate-games.xyz";
let styles = [
  "font-size: 12px",
  "font-family: 'Lato', 'Roboto', Arial",
  "display: inline-block",
  "color: #4287f5",
  "padding: 8px 19px",
  "border: 1px dashed #fff",
  "background-image: linear-gradient(to bottom, #333, #000);",
].join(";");
console.log(msg, styles);