var allowedDomains = [
  "https://nate-games.xyz",
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app",
  "https://google.com",
  "https://cloudflare.com",
];

var currentDomain = window.location.origin;

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.location.href = "https://nate-games.xyz/en-us/sitelock";
}
