var allowedDomains = [
  // PAID
  "https://nate-games.com",
  "https://nate-games.xyz",
  // FREE
  "https://nate-games.github.io",
  "https://nate-games.netlify.app",
  "https://nate-games.vercel.app"
];

var referringUrl = document.referrer;

var isSitelock = referringUrl.indexOf("sitelock") !== -1;

if (isSitelock) {
  window.location.href = "https://nate-games.xyz/en-us/sitelock";
} else {
  var isAllowedDomain = allowedDomains.some(function (domain) {
    return referringUrl.indexOf(domain) !== -1;
  });

  if (!isAllowedDomain) {
    window.location.href = allowedDomains[0];
  }
}
