var allowedDomains = ['nate-games.github.io', 'nate-games.netlify.app', 'cdn.nate-games.xyz', 'nate-games.xyz'];

function getReferringDomain() {
  var referrer = document.referrer;
  if (!referrer) return null;

  var match = referrer.match(/:\/\/(www\.)?([^/:]+)(:[0-9]+)?/i);
  if (match && match.length > 2) {
    return match[2].toLowerCase();
  }

  return null;
}

function isDomainAllowed() {
  var referringDomain = getReferringDomain();
  if (!referringDomain) return false;

  var currentURL = window.location.href;
  for (var i = 0; i < allowedDomains.length; i++) {
    if (currentURL.indexOf(allowedDomains[i]) !== -1) {
      return true;
    }
  }

  return false;
}

if (!isDomainAllowed()) {
  // alert('Access to this site is not allowed from the current domain.');
  window.location.href = 'https://nate-games.xyz/en-us/sitelock';
}
