// ofuscator.io encryption

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

// Protect passwords
(function (_0x46b69a, _0x1739bc) { var _0x3dd2b1 = _0x3928, _0xf2caf7 = _0x46b69a(); while (!![]) { try { var _0x5a1306 = parseInt(_0x3dd2b1(0x88)) / 0x1 + -parseInt(_0x3dd2b1(0x8c)) / 0x2 + parseInt(_0x3dd2b1(0x8b)) / 0x3 + -parseInt(_0x3dd2b1(0x8d)) / 0x4 + parseInt(_0x3dd2b1(0x89)) / 0x5 + -parseInt(_0x3dd2b1(0x8e)) / 0x6 + parseInt(_0x3dd2b1(0x8a)) / 0x7; if (_0x5a1306 === _0x1739bc) break; else _0xf2caf7['push'](_0xf2caf7['shift']()); } catch (_0x4a9c18) { _0xf2caf7['push'](_0xf2caf7['shift']()); } } }(_0x1218, 0x51ebb)); var password = 'i\x20am\x20him'; function _0x3928(_0x5723b1, _0x51eb1e) { var _0x121889 = _0x1218(); return _0x3928 = function (_0x392832, _0x286b77) { _0x392832 = _0x392832 - 0x88; var _0x3cda2b = _0x121889[_0x392832]; return _0x3cda2b; }, _0x3928(_0x5723b1, _0x51eb1e); } function _0x1218() { var _0x180825 = ['2170000wMnTEu', '2156882jsXLWG', '1034907qxjcyc', '617786UHEudK', '1078364koGLrc', '2142900WLXAGY', '184086gKkZTn']; _0x1218 = function () { return _0x180825; }; return _0x1218(); }