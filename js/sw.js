var allowedDomains = [
  // PAID
  "https://nate-games.xyz",
  // FREE
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app"
];

var referringUrl = document.referrer;

var isSitelock = referringUrl.indexOf("sitelock") !== -1;
var isRootPath = window.location.pathname === "/";

if (isSitelock && isRootPath) {
  window.location.href = "https://nate-games.xyz/en-us/sitelock";
} else {
  // what else?
}