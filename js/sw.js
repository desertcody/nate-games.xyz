var allowedDomains = [
  "https://nate-games.xyz",
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app",
  "https://nates-cdn.pages.dev",
  "http://192.168.4.63:8080"
];

var currentDomain = window.location.origin;

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://nate-games.xyz/en-us/sitelock";
}

// LOCALHOST; ❎
// COMPUTER IP; ✅