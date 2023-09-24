var allowedDomains = [
  "https://nate-games.xyz",
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app",
];

var currentDomain = window.location.origin;

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://nate-games.xyz/en-us/sitelock";
}

// LOCALHOST; ❎
// COMPUTER IP; ✅